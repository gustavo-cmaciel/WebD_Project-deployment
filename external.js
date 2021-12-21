//This function using Jquery, serves to keep the header fixed at the top of the page, if the user scrolls more than 140px
jQuery(document).ready(function($) {
    window.onscroll = function() {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active")
        }
    }
});

//This function, validates the login and password fields
function check_info() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (username == "" || password == "") {
        alert("Please fill in all fields")
        return true;

    } else if (!email_val.test(username)) {
        alert('Invalid email format please enter valid email id')
        return false;

    } else if (document.getElementById("password").value.length > 11) {
        alert("Password maximum length is 11")
        return false;

    } else if (document.getElementById("password").value.length < 6) {
        alert("Password minimum length is 6")
        return false;

    } else {
        alert("Your account has been acepted... It's a pleasure to have you with us!");

    }
}
//This function, validates and registers the customer's email address to receive the newsletter.
function newsletter() {
    var email = document.getElementById("email").value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email == "") {
        alert("Please insert your email first")
        return true;
    } else if (!email_val.test(email)) {
        alert('Invalid email format please enter valid email id')
        return false;
    } else {
        alert("Your email was successfully registered!")
    }

}

window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}


//calories calculator
function calsPerDay() {
function find(id) { return document.getElementById(id) }

var age = find("age").value
var height = find("height").value * 2.54
var weight = find("weight").value / 2.2
var result = 0
if (find("male").checked) 
result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
else if (find("female").checked)
result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
find("totalCals").innerHTML = Math.round( result )
}
calsPerDay()


function calsPerDayM() {
function find(id) { return document.getElementById(id) }

var age = find("ageM").value
var height = find("heightM").value 
var weight = find("weightM").value
var result = 0
if (find("maleM").checked) 
result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
else if (find("femaleM").checked)
result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
find("totalCalsM").innerHTML = Math.round( result )
}
calsPerDayM()


//Reference Calories counter
function referCal() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "This Calorie Calculator is based on several equations, and the results of the calculator are based on an estimated average. The Harris-Benedict Equation was one of the earliest equations used to calculate basal metabolic rate (BMR), which is the amount of energy expended per day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor Equation was introduced.";
    } else {
        greeting = "This Calorie Calculator is based on several equations, and the results of the calculator are based on an estimated average. The Harris-Benedict Equation was one of the earliest equations used to calculate basal metabolic rate (BMR), which is the amount of energy expended per day at rest. It was revised in 1984 to be more accurate and was used up until 1990, when the Mifflin-St Jeor Equation was introduced.";
    }
    document.getElementById("calo").innerHTML = greeting;
}

//      if(form.gender.value == 'Female') {
  //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
 //calories = 655.09 + (9.56 * weight) + (1.84 * heightCM) - (4.67 * age);
//}  else {
 //calories = 66.47 + (13.75 * weight) + (5 * heightCM) - (6.75 * age);
//} 