require("./utils.js");
require('dotenv').config();
weather = require('./weather.js')
const taskFunctions = require("./task_functions.js");
const authenticationFunctions = require("./authentication_functions.js");

const cors = require('cors');
const { ObjectId } = require('mongodb');
const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

// Importing the API logic functions to link back end data to front end display.
const lolAPI = require('./riotLeagueAPI.js');

const session = require('express-session');
const MongoStore = require('connect-mongo');
const ejs = require('ejs');
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

// Env variables
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
const weatherKey = process.env.OPEN_WEATHER_API_KEY;

const node_session_secret = process.env.NODE_SESSION_SECRET;

var { database } = include('databaseConnection');
const userCollection = database.db(mongodb_database).collection('users');

// Store sessions in db
var mongoStore = MongoStore.create({
  mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/sessions`,
  crypto: {
    secret: mongodb_session_secret
  }
})

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: node_session_secret,
  store: mongoStore,
  saveUninitialized: false,
  resave: true
}
));

app.use(express.static(__dirname + "/public"));


// Home page ---------------------------
app.get('/', (req, res) => {
  if (req.session.authenticated) {
    res.render("home_logged_in.ejs", { username: req.session.username });
    return;
  }
  res.render("home_logged_out.ejs");
})

//Stats page ---------------------------
app.get('/stats', async (req, res) => {
  username = req.session.username;
  const result = await userCollection.find({ username: username }).toArray();
  levelGame = result[0].levels.game
  levelFitness = result[0].levels.fitness
  levelDiet = result[0].levels.diet
  res.render("stat_summary.ejs", { levelGame: levelGame, levelFitness: levelFitness, levelDiet: levelDiet });
})
// Sign up ----------------------------
app.get('/signup', (req, res) => {
  res.render("sign_up.ejs");
});

// Submit new user to database and validate inputs
app.post('/submitUser', async (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var securityQuestion = req.body.securityQuestion;
  var securityAnswer = req.body.securityAnswer
  var RiotUsername = req.body.RiotUsername;
  var RiotID = req.body.RiotID;

  await authenticationFunctions.submitUser(
    req, res,
    username, userCollection,
    email, password,
    securityQuestion, securityAnswer,
    RiotUsername, RiotID);
});

// Log in page -------------------------------
app.get('/login', (req, res) => {
  res.render("log_in.ejs");
})

// Log in submission and verification
app.post('/loggingin', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  await authenticationFunctions.logInUser(req, res, username, password, userCollection);
});

app.get('/password_recovery', (req, res) => {
  res.render("password_recovery.ejs");
})

app.post('/security_question', async (req, res) => {
  username = req.body.username;
  await authenticationFunctions.renderSecurityQuestion(req, res, username, userCollection);

})

app.post('/password_reset', async (req, res) => {
  // Validate new password and security answer input
  username = req.body.username;
  securityAnswer = req.body.securityAnswer;
  newPassword = req.body.newPassword;

  await authenticationFunctions.resetPassword(req, res, username, securityAnswer, newPassword, userCollection);
})

// Weather page -------------------------
// app.use(cors());
app.get('/weather', async (req, res) => {
  username = req.session.username
  const result = await userCollection.find({ username: username }).toArray();
  defaultCity = result[0].city
  if (!req.query.selectCity) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity},CA&appid=${weatherKey}&units=metric`
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.selectCity},CA&appid=${weatherKey}&units=metric`
  }
  weather.getWeather(url, res)
});
// Log out
app.get('/logout', async (req, res) => {
  const userCollection = database.db(mongodb_database).collection('users')
  await userCollection.deleteOne({ _id: req.session._id });
  req.session.destroy();
  res.redirect('/');
});

// Game page
app.get('/game', async (req, res) => {
  if (req.session.authenticated) {
    user_name = req.session.RiotUsername;
    user_tag = req.session.RiotID;
    tasks = await taskFunctions.getTasksByCategory("game", req.session.username, userCollection);
    const PUUID = await lolAPI.getRiotPUUID(user_name, user_tag);
    const summonerDetails = await lolAPI.getSummonerLevelAndID(PUUID);
    const summonerLevel = summonerDetails[1];
    const encryptedSummonerId = summonerDetails[0];
    const summonerRank = await lolAPI.getSummonerRank(encryptedSummonerId);
    if (summonerRank === null) {
      var rank = "Unranked";
    } else {
      var rank = summonerRank[0] + " " + summonerRank[1];
    }
    const match_ids = await lolAPI.getMatchHistory(PUUID);
    const winrateAndKD = await lolAPI.calculateWinLoss(match_ids, PUUID);
    const winrate = winrateAndKD[0];
    const kd = winrateAndKD[1];
    res.render("game.ejs", { tasks: tasks, level: summonerLevel, rank: rank, winrate: winrate, kd: kd});
    return;
  }
  res.redirect("/");
})

// Fitness page
app.get('/fitness', async (req, res) => {
  if (req.session.authenticated) {
    tasks = await taskFunctions.getTasksByCategory("fitness", req.session.username, userCollection);
    res.render("fitness.ejs", { tasks: tasks });
    return;
  }
  res.redirect("/");
})
// Diet page
app.get('/diet', async (req, res) => {
  if (req.session.authenticated) {
    tasks = await taskFunctions.getTasksByCategory("diet", req.session.username, userCollection);
    res.render("diet.ejs", { tasks: tasks });
    return;
  }
  res.redirect("/");
})
// Friends page
app.get('/friends', (req, res) => {
  if (req.session.authenticated) {
    res.render("friends.ejs");
    return;
  }
  res.redirect("/");
})
// Profile page
app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.render("profile.ejs");
    return;
  }
  res.redirect("/");
})
// Add task from modal form
app.post('/add_task', async (req, res) => {
  title = req.body.title;
  description = req.body.description;
  category = req.body.category;
  username = req.session.username;

  taskFunctions.addTask(title, description, category, username, userCollection);

  res.redirect(req.get('referer'));
})

app.post('/complete_task', async (req, res) => {
  username = req.session.username;
  taskCategory = req.body.category;
  taskIdToDelete = req.body.taskId;
  await taskFunctions.completeTask(username, userCollection, taskCategory, taskIdToDelete)

  res.redirect(req.get('referer'));
})

app.post('/delete_task', async (req, res) => {
  username = req.session.username;
  taskCategory = req.body.category;
  taskIdToDelete = req.body.taskId;
  await taskFunctions.deleteTask(username, userCollection, taskCategory, taskIdToDelete)

  res.redirect(req.get('referer'));
})

// 404 not found page ------------------
app.get("/does_not_exist", (req, res) => {
  res.status(404);
  res.render(`404_not_found.ejs`);
})

app.get("*", (req, res) => {
  res.redirect('/does_not_exist');
})

app.listen(port, () => {
  console.log('Server running on port ' + port);
})