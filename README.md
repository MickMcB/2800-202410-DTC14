## GUD - Gamified User Development

## Project Description:
DTC-14 is developing a web application to help gamers, both casual and hardcore, lead healthy and active lifestyles by gamifying their lifestyle with the performance statistics they enjoy in their favorite games and then combining them with their actual in-game performance so they can “git gud” in all aspects of their life.

## About Us
Team Name: DTC-14
Team Members: 
- Ephraim Hsu
- Tommy Ju
- Alzen Landayan
- Michael McBride
- Matthew Yoon

## Technologies used
IDEs:\
[Microsoft Visual Studio](https://visualstudio.microsoft.com/)

Runtime Environments:\
- [NodeJS](https://nodejs.org/en)

Utilities:\
- [MongoDB](https://www.mongodb.com/)\
- [NPM](https://www.npmjs.com/)\
- [Copilot](https://github.com/features/copilot)

Libraries:\
- [Tailwind](https://tailwindcss.com/)\
- [Flowbite](https://flowbite.com/)\
- [ApexCharts](https://apexcharts.com/)\

NPM Packages:\
- [apexcharts](https://www.npmjs.com/package/apexcharts)\
- [axios](https://www.npmjs.com/package/axios)\
- [bcrypt](https://www.npmjs.com/package/bcrypt)\
- [bottleneck](https://www.npmjs.com/package/bottleneck)\
- [connect-mongo](https://www.npmjs.com/package/connect-mongo)\
- [cors](https://www.npmjs.com/package/cors)\
- [dotenv](https://www.npmjs.com/package/dotenv)\
- [ejs](https://www.npmjs.com/package/ejs)\
- [express-session](https://www.npmjs.com/package/express-session)\
- [gitignore](https://www.npmjs.com/package/gitignore)\
- [joi](https://www.npmjs.com/package/joi)\
- [mongodb](https://www.npmjs.com/package/mongodb)\
- [mongoose](https://www.npmjs.com/package/mongoose)
- [readline](https://www.npmjs.com/package/readline)\
- [serve-favicon](https://www.npmjs.com/package/serve-favicon)\
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)\


APIs:\
- [OpenWeatherMap](https://openweathermap.org/)\
- [ChatGPT](https://platform.openai.com/docs/overview)\
- [RiotAPI](https://developer.riotgames.com/)\

Websites:\
- [Github]\
- [Drive]

## Set up Instructions

## Features/User Guide

### Sign Up Page
#### Create a new account:  
1. If you are logged out, you can create a new user by clicking "Sign Up".
1. Enter a unique username no longer than 20 characters with alphanumerical characters only.
2. Create a password no longer than 20 characters, special characters are allowed.
3. Select a security question in case you forget your password.
4. Provide an answer to your security question that you will remember. Alphanumerical characters only with a max length of 20.
5. (Optional) provide a Riot username associated with your League of Legends account.
5. (Optional) provide a Riot ID associated with your League of Legends account.
5. (Optional) enter in the name of the closest city for weather data that will be used to suggest physical activites.

```
(Example valid Riot credentials)

Riot Username: Sheiden

Riot ID: 0001
```

### Password Recovery
#### Reset your password using your security question:

1. Navigate to the login page.
2. Click "Forgot Password?".
3. Enter in your username.
4. Provide your security answer and a new password.
5. Click submit.

### Home Page
#### View your level progress:
1. Hover your mouse over the donut chart to see your progress in each category.

#### View your achievements:
1. Hover your mouse over your achievement badges to read their descriptions.

### Profile Page
#### Log out of app:
1. Click the red "Log Out" button at the bottom of the page.

### Game Page
#### Search for a summoner (League of Legends player) using their Riot username and Riot ID:
1. Find the "Look up a summoner!" form.
1. Enter in a valid Riot username.
1. Enter in a valid Riot ID.
1. Click "Search for summoner".

```
(Example valid Riot credentials)  

Riot Username: Sheiden  

Riot ID: 0001
```

#### Create a custom task:  

1. Click "Add Task"
2. Enter a title for your task.
3. Enter a description for your task.
4. Select your task category.
5. Click "Add".

#### Update a task:  
1. Click the green checkmark to complete a task OR the red "x" to delete a task.

> Completing a task will give you experience for the corresponding category. Deleting will simply remove the task.

#### Add a suggested task to your tasks:
1. Click the blue plus icon to move the suggested task to your tasks to complete.

#### View completed tasks:
1. Click "Completed Tasks".

### Diet Page
#### Generate a food recipe:
1. Select a meal from the drop down menu (breakfast, lunch, dinner, etc.)
2. Click the "Generate Recipe" button.

#### Add food allergies to your account:
1. Click "Edit Allergies".
2. Enter your allergy into the text input.
3. Click "Save".

> Allergies will be saved to your account for future food recipes.

#### Favourite a recipe:
1. Generate a food recipe.
2. Click "Add to favourites" at the bottom of the recipe description.
3. View or delete your favourite recipes by clicking the "Favourites" button.

#### Add a recipe to your To-Do list for completion:
1. Generate a food recipe.
2. Click "Add to to-do list" at the bottom of the recipe description.
3. Click "To-Do list" to view your recipes to complete.
4. Click "Complete" to complete the task and gain exp, clicking "Remove" will simply remove the recipe from your to-do list.

Note: Recipes can also be added to the to-do list from the favourite recipes modal.

#### View completed tasks:
1. Click "Completed Tasks".

### Fitness Page


#### Create a custom task:  

1. Click "Add Task"
2. Enter a title for your task.
3. Enter a description for your task.
4. Select your task category.
5. Click "Add".

#### Update a task:  
1. Click the green checkmark to complete a task OR the red "x" to delete a task.

> Completing a task will give you experience for the corresponding category. Deleting will simply remove the task.

#### Add a suggested task to your tasks:
1. Click the blue plus icon to move the suggested task to your tasks to complete.


#### View completed tasks:
1. Click "Completed Tasks".

### Friends Page
#### Send a friend request:
1. Enter in your friend's username into the corresponding text input.
2. Click "Add friend".

#### Filter friend requests:
1. Enter in your friend's username into the corresponding text input.
2. Click "Search requests".

#### Filter friends list:
1. Enter in your friend's username into the corresponding text input.
2. Click "Search friends".

#### Clear friends list or friend request filters:
1. Click "Clear search"

#### Delete a friend:
1. Click "Delete" on the corresonding friend card.

## References

## AI Implementation

## Contact Information
Ephraim Hsu - ehsu18bcit@gmail.com\
Tommy Ju - tju1@my.bcit.ca\
Alzen Landayan - alzenlandayan1616@gmail.com\
Michael McBride - mcbride1987@gmail.com\
Matthew Yoon - myoon928@gmail.com

## Project Files

```
.
├── README.md
├── about.html
├── achievement_functions.js
├── authentication_functions.js
├── databaseConnection.js
├── friend_functions.js
├── index.js
├── level_functions.js
├── login
│   ├── answer.png
│   ├── city.png
│   ├── email.png
│   ├── home_background2.jpg
│   ├── login_signup_style.css
│   ├── password.png
│   ├── riot.png
│   ├── security.png
│   ├── try.jpeg
│   └── user.png
├── package-lock.json
├── package.json
├── public
│   ├── client-side-scripts
│   │   ├── button_functions.js
│   │   ├── event_listeners.js
│   │   └── stats.js
│   ├── css
│   │   ├── achievements.css
│   │   ├── completed.css
│   │   ├── friends.css
│   │   ├── game.css
│   │   ├── home_page.css
│   │   ├── level_up.css
│   │   ├── profile.css
│   │   ├── progress_bar.css
│   │   ├── style.css
│   │   └── tooltip.css
│   ├── footer-icons
│   │   ├── LOL.mp3
│   │   ├── fork-and-spoon.svg
│   │   ├── games.svg
│   │   ├── group.svg
│   │   ├── home.svg
│   │   └── walk-directions.svg
│   ├── footer-icons-v2
│   │   ├── diet.png
│   │   ├── fitness.png
│   │   ├── friends.png
│   │   ├── game.png
│   │   └── home.png
│   └── images
│       ├── backgrounds
│       │   ├── home_background2.jpg
│       │   ├── home_background3.jpg
│       │   ├── level_up_background.jpg
│       │   ├── profile_background.jpg
│       │   └── profile_background2.jpg
│       ├── favicon.ico
│       ├── friendIcons
│       ├── gud_logo.png
│       ├── level-up
│       │   ├── diet.gif
│       │   ├── fitness.gif
│       │   └── game.gif
│       ├── logo.png
│       ├── ranks
│       │   ├── 20560797_hexa_dan_wave_10.jpg
│       │   ├── bronze.webp
│       │   ├── gold.webp
│       │   ├── silver.webp
│       │   └── unranked.webp
│       └── taskCardIcons
│           ├── 100.png
│           ├── American_Football.png
│           ├── BRONZE.png
│           ├── Badminton.png
│           ├── Baseball.png
│           ├── Boxing.png
│           ├── CHALLENGER.png
│           ├── Cricket.png
│           ├── Cycling.png
│           ├── DIAMOND.png
│           ├── EMERALD.png
│           ├── Field_Hockey.png
│           ├── GOLD.png
│           ├── GRANDMASTER.png
│           ├── Golf.png
│           ├── Gymnastics.png
│           ├── IRON.png
│           ├── Ice_Hockey.png
│           ├── Indoor_Basketball.png
│           ├── Indoor_Volleyball.png
│           ├── MASTER.png
│           ├── MMA_(Mixed_Martial_Arts).png
│           ├── Outdoor_Basketball.png
│           ├── Outdoor_Volleyball.png
│           ├── PLATINUM.png
│           ├── Rugby.png
│           ├── SILVER.png
│           ├── Skiing.png
│           ├── Snowboarding.png
│           ├── Soccer(Football).png
│           ├── Surfing.png
│           ├── Swimming.png
│           ├── Table_Tennis.png
│           ├── Tennis.png
│           ├── Track_and_Field.png
│           ├── UNRANKED.png
│           ├── Wrestling.png
│           └── pencil2.png
├── riotLeagueAPI.js
├── stats_send.js
├── tailwind.config.js
├── task_functions.js
├── utils.js
├── views
│   ├── 404_not_found.ejs
│   ├── diet.ejs
│   ├── diet_completed.ejs
│   ├── fitness.ejs
│   ├── fitness_completed.ejs
│   ├── fitness_weather.ejs
│   ├── friends.ejs
│   ├── game.ejs
│   ├── game_completed.ejs
│   ├── home_logged_out.ejs
│   ├── invalid_log_in.ejs
│   ├── invalid_password_recovery.ejs
│   ├── invalid_sign_up.ejs
│   ├── level_up.ejs
│   ├── log_in.ejs
│   ├── password_recovery.ejs
│   ├── profile.ejs
│   ├── security_question.ejs
│   ├── sign_up.ejs
│   ├── stat_summary.ejs
│   ├── successful_password_recovery.ejs
│   ├── template.ejs
│   └── templates
│       ├── achievement.ejs
│       ├── achievement_logo_only.ejs
│       ├── achievements_container.ejs
│       ├── achievements_container_preview.ejs
│       ├── easter_footer.ejs
│       ├── footer.ejs
│       ├── friends
│       │   ├── friend_card.ejs
│       │   ├── friend_card_container.ejs
│       │   ├── friend_request.ejs
│       │   └── invalid_friend_request.ejs
│       ├── game
│       │   ├── helpfulMessage.ejs
│       │   ├── searchSummonerButton.ejs
│       │   ├── summonerGameStats.ejs
│       │   └── userGameStats.ejs
│       ├── header.ejs
│       ├── header_logo_only.ejs
│       ├── header_with_profile.ejs
│       ├── nav_footer.ejs
│       ├── nav_logo_only.ejs
│       ├── nav_with_profile.ejs
│       ├── task_card.ejs
│       ├── task_cards_container.ejs
│       └── task_modal.ejs
└── weather.js
```