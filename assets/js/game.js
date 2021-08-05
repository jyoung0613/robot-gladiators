    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;

    // You can also log multiple values at once like this
    console.log(playerName, playerAttack, playerHealth);

    var enemyName = "Roborto";
    var enemyHealth = 50;
    var enemyAttack = 12;

    // Adding playerMoney as a form of penalty for skipping a fight
    var playerMoney = 10;
    // I dont recall seeing the below in the instructions but maybe I missed it.  It was causing my playerHealth to calculate NaN instead of a number.
    console.log(enemyName, enemyHealth, enemyAttack);

    var fight = function() {
    //Alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    }
    
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    } 
  
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask questions again by running fight() again
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip the fight!");
}   else {
    window.alert("You need to choose a valid option. Try again!");         
    }
 
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
    // log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    if (playerHealth === 0) {
        console.log("This will not run.");
    }

    else {
        console.log("This will run instead.");
    }

  };


fight();