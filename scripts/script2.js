// Part 1 - Math and Math Functions (5 points)

//var userNumber = prompt("Please enter an integer.");
//console.log(Math.abs(userNumber));


//var userDV = prompt("Please enter a decimal value.");
//console.log(Math.ceil(userDV));


//var userDV = prompt("Please enter a decimal value.");
//console.log(Math.floor(userDV));


//var user5Numbers = prompt("Please enter 5 numbers by using commas to delimit each number.").split(",");
//console.log(Math.max.apply(Math, user5Numbers));
//console.log(Math.min.apply(Math, user5Numbers));


//var userNumber = prompt("Please enter a number.");
//console.log(Math.sqrt(userNumber));






// Part 2 - Date and Date Functions (6 points)

//console.log(new Date());


//var userMonth = prompt("What month do you want? Use a number.");
//console.log(new Date(2016, userMonth, 0).getDate());


//var userDate = prompt("Enter a date. For example, MM/DD/YYYY").split("/");
//var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//console.log(monthNames[userDate[0]-1]);


//var newDate = new Date();
//var randomDate = prompt("Enter a date. For example, MM/DD/YYYY").split("/");
//newDate.setMonth(randomDate[0]-1);
//newDate.setDate(randomDate[1]);
//newDate.setFullYear(randomDate[2]);
//if (newDate.getDay() === 0 || newDate.getDay() === 6) {
//    console.log("Weekend");
//} else {
//    console.log("Not weekend");
//}


//var userDate = new Date();
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var yesterday = userDate.getDay()-1;
//if (yesterday === -1) {
//    yesterday = 6;
//}
//console.log(days[yesterday]);


//var userDate = new Date();
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var today = days[userDate.getDay()];
//console.log(today[0]);




// Part 3 - Conditional Logic and Looping Operations (4 points)

//var x = parseInt(prompt("Enter an integer."));
//var y = parseInt(prompt("Enter another integer."));
//
//if (x > y) {
//    console.log(x);
//} else {
//    console.log(y);
//}


//var stuScores = [80, 77, 88, 95, 68];
//var stuNames = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
//for (i = 0; i < stuScores.length; i++) {
//    if (stuScores[i] < 60) {
//        console.log(stuNames[i] + ", " + "F");
//    } else if (stuScores[i] < 70) {
//        console.log(stuNames[i] + ", " + "D");
//    } else if (stuScores[i] < 80) {
//        console.log(stuNames[i] + ", " + "C");
//    } else if (stuScores[i] < 90) {
//        console.log(stuNames[i] + ", " + "B");
//    } else {
//        console.log(stuNames[i] + ", " + "A");
//    }  
//}


//for (i=1; i<16; i++) {
//    if (i%2 === 0) {
//        console.log(i + " is an even number.");
//    } else {
//        console.log(i + " is an odd number.");
//    }
//}


//for (i=1; i<101; i++) {
//    if (i%15 === 0) {
//        console.log("FizzBuzz");
//    } else if (i%5 === 0) {
//        console.log("Buzz");
//    } else if (i%3 === 0) {
//        console.log("Fizz");
//    } else {
//        console.log(i);
//    }
//}




// Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)

//var answer = confirm("Are you ready to play this game?");
//if (answer === true) {
//    alert("Awesome, our hero is waiting!");
//    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//    var direction = prompt("Which direction would you like to head (please enter forward, left, or right).");
//    switch (direction) {
//        case "forward":
//            alert("You walk about 100 yards and safely make your way out of the cave.");
//            break;
//        case "left":
//            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//            break;
//        case "right":
//            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//            break;
//        default:
//            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//    } // end of switch
//    var score = prompt("Please rate my game on a scale of 1 to 10.");
//    if (score < 1 || 6 < score) {
//        alert("Thank you, we will continue to make improvements to the game!");
//    } else {
//        alert("Whatever, you weren’t very good at this game anyway!"); // (1 <= score && score <= 5)
//    } 
//            
//} else {
//    alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}




// Part 5 - The “Coin Flip” Game (5 points)

//var coinFlip = Math.round(Math.random());
//var choice = prompt("Heads or Tails?").toLowerCase();
//coinArray = ["heads", "tails"];
//if (coinArray[coinFlip] === choice) {
//    alert("The flip was " + coinArray[coinFlip] + ", and you chose " + choice + "...you win!");
//} else {
//    alert("The flip was " + coinArray[coinFlip] + ", but you chose " + choice + "...you lose!");
//}




// Part 6 - The “Coin Flip” Game Redux (5 points)

//var coinFlip;
//for (i=0; i<10; i++) {
//    coinFlip = Math.round(Math.random());
//    if (coinFlip === 0) {
//        console.log("Heads");
//    } else {
//        console.log("Tails");
//    }
//}




// Part 7 - The “Coin Flip Streak” Game (5 points)

//var coinFlip;
//do {
//    coinFlip = Math.round(Math.random());
//    console.log("Heads");
//}
//while (coinFlip!==1);




// Part 8 – Looping a Triangle (5 points)

//for (i = 1; i < 8; i++) {
//    var str = "";
//    for (j = 0; j < i; j++) {
//        str+= "#";
//    }
//    console.log(str);
//}




// Part 9 – Odd or Even? (5 points)

//for (i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//        console.log(i + " is even.");
//    }
//    else {
//        console.log(i + " is odd.");
//    }
//}







