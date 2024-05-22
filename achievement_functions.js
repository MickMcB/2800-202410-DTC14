
module.exports = {checkForAchievements, addAchievements};

async function addAchievements(username, userCollection, achievements) {
    try {
        for (const achievement of achievements) {
            await userCollection.updateOne(
                { username: username },
                { $push: { achievements: achievement } }
            );
        }
    } catch (error) {
        console.error("Failed to add achievements:", error);
    }
}

// Returns an array of achievement titles
function checkForAchievements(gameLevel, dietLevel, fitnessLevel) {
    const combinedLevel = gameLevel + dietLevel + fitnessLevel;
    const achievements = [];
    // Combined level achievements
    switch (combinedLevel) {
        case 5:
            achievements.push("Still A Noob");
            break;
        case 10:
            achievements.push("On the Path to Gudness");
            break;
        case 20:
            achievements.push("High Achiever");
            break;
        case 25:
            achievements.push("Unstoppable");
            break;
        case 35:
            achievements.push("Super GUD");
            break;
    }
    // Game level achievements
    switch (gameLevel) {
        case 5:
            achievements.push("Intermediate Gamer");
            break;
        case 10:
            achievements.push("Advanced Gamer");
            break;
        case 15:
            achievements.push("Pro Gamer");
            break;
    }

    // Fitness level achievements
    switch (fitnessLevel) {
        case 5:
            achievements.push("Intermediate Fitness");
            break;
        case 10:
            achievements.push("Advanced Fitness");
            break;
        case 15:
            achievements.push("Pro-level Fitness");
            break;
    }

    // Diet level achievements
    switch (dietLevel) {
        case 5:
            achievements.push("Healthy Eater");
            break;
        case 10:
            achievements.push("Super Healthy Eater");
            break;
        case 15:
            achievements.push("Health Enthusiast");
            break;
    }
    return achievements;
}