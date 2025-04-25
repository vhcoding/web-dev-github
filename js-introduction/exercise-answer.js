// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice -- courseNames ok
//    - A variable that stores the price of that course -- coursePrice ok
//    - A variable that stores the three main goals that you have, when taking this course --mainGoals; ok

let courseName = "Web Dev Course";
let coursePrice = 23.99;
let mainGoals = ["to learn how to code", "to get better at coding", "to work with coding"]

// 2) Output ("alert") the three variable values

alert(courseName + " " + coursePrice + " " + mainGoals.join (", "));

// 3) Try "grouping" the three variables together and still output their values thereafter

let junction = {
    courseName: "Web Dev Course",
    coursePrice: "23.99",
    mainGoals: ["to learn how to code", "to get better at coding", "to work with coding"]
}
alert(junction.mainGoals[0]);

// 4) Also output the second element in your "main goals" variable

alert(junction.mainGoals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function arrayAccess (index) {
    return junction.mainGoals[index]
}

// 6) Execute your custom command from (5) and output ("alert") the result

alert(arrayAccess(0));

// removing a letter and returnig error

function letterExtract (index, word) {
    if (index <= 0) { 
        return "Error - less than zero"
    }

    if (index > word.length) {
        return "Error - insufficient characters"
    }

    return word[index - 1]
}

let selectedWord = prompt ("Choose a word");
let letterPosition = prompt ("What letter position do you want?");

alert(letterExtract(letterPosition, selectedWord));

