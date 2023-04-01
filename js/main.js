//create user name and log in
function Login(){
    let userName = "";
    do{
        userName = prompt("SIGN UP and calculate your calorie deficit!\n\nCreate a user name:");
    }while((userName == "") || (userName == null))
    let password = function(){
        let selectPassword = prompt("Create a password:");
        let repeatPassword = prompt("Repeat password:");
        if((selectPassword == repeatPassword) && (selectPassword != "")){
            alert(`Hi ${userName}, welcome to our calculator!`);
            start();
        }else if((selectPassword != repeatPassword) && (selectPassword != "")){
            alert("Incorrect pasword. Try again.");
            password();
        }else if(selectPassword == ""){
            alert("You must enter a password to create your account. Try again.");
            password();
        }
    }
    password(); 
}

//calorie deficit calculator for each gender
const calculatorFemale = (age, weight, height, gender) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) - gender);
    return result
}

const calculatorMale = (age, weight, height, gender) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) + gender);
    return result
}

const calculatorOther = (age, weight, height, gender) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) - gender);
    return result
}

// function to choose activity level
const chooseActivityLevel = () =>{
    let resultActivityLevel = prompt("Select your activity level:\n\n1) Very Active\n2) Active\n3) Not too active\n4) Not active at all").toLocaleLowerCase();
    if((resultActivityLevel == "1") || (resultActivityLevel == "very active")){
        activityLevel = 500;
    }else if((resultActivityLevel == "2") || (resultActivityLevel == "active")){
        activityLevel = 300;
    }else if((resultActivityLevel == "3") || (resultActivityLevel == "not too active")){
        activityLevel = 150;
    }else if((resultActivityLevel == "4") || (resultActivityLevel == "not active at all")){
        activityLevel = 0;
    }else{
        alert("Invalid entry");
        chooseActivityLevel();
    } 
}

// function to select gender and create a value depending on the gender, in order to use the TBM calculator 
const chooseGender = () =>{
    let resultGender = prompt("Select your gender:\n\n1) Female\n2) Male\n3) Other").toLocaleLowerCase();
    if((resultGender === "1") || (resultGender === "female") && (resultGender != "")){
        gender = 161;
    }else if((resultGender === "2") || (resultGender === "male") && (resultGender != "")){
        gender = 5;
    }else if((resultGender === "3") || (resultGender === "other") && (resultGender != "")){
        gender = 80;
    }else{
        alert("Invalid entry. Try again.");
        chooseGender();
    }
}

let age = "";
let weight = "";
let height = "";

const personalDetails = () =>{
    chooseAge = () =>{
        age = Number(prompt("Insert your age:"));
        if(isNaN(age)){
            (alert("You must insert a number."));
            chooseAge();
        }else if(age < 18){
            (alert("You must to be over 18 years old to access to the calculator."));
            chooseAge();
        }
    }
    chooseAge();
    chooseWeight = () =>{
        weight = Number(prompt("Insert your weight in kilos:"));
        if(isNaN(weight)){
            (alert("You must insert a number."));
            chooseWeight();
        }
    }
    chooseWeight();
    chooseHeight = () =>{
        height = Number(prompt("Insert your height in centimentres:"));
        if(isNaN(height)){
            (alert("You must insert a number."));
            chooseHeight();
        }
    }
    chooseHeight();
}


//main programm
const start = function(){
    chooseGender();
    personalDetails();
    chooseActivityLevel();
    const calculate = () =>{
        if(gender = 161){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorFemale(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorFemale(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`); 
            if(resultTBM == true){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if(gender = 5){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorMale(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorMale(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`);
            if(resultTBM == true){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if(gender = 80){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorOther(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorOther(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`);
            if(resultTBM == true){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else{
            alert("Invalid entry.");
            start();
        }
    }
    calculate();
}

Login();
