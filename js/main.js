
//create user name and log in
function Login(){
    let userName = "";
    do{
        userName = prompt("SIGN UP and calculate your calorie deficit!\n\nCreate a user name:");
    }while(userName == "")
    let password = function(){
        let selectPassword = prompt("Create a password:");
        let repeatPassword = prompt("Repeat password:");
        if((selectPassword == repeatPassword) && (selectPassword != "")){
            if(userName !== ""){
                alert(`Hi ${userName}, welcome to our calculator!`);
            start()
            }else{
                alert(`Hi stranger, welcome to our calculator!`);
            start()
            }
        }else if((selectPassword != repeatPassword) && (selectPassword != "")){
            alert("Incorrect pasword. Try again.");
            password()
        }else if(selectPassword == ""){
            alert("You must enter a password to create your account. Try again.");
            password()
        }
    }
    password() 
}

//calculators 
const calculatorFemale = (age, weight, height) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) - 161);
    return result
}

const calculatorMale = (age, weight, height) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) + 5);
    return result
}

const calculatorOther = (age, weight, height) =>{
    let result = ((10 * weight) + (6.65 * height) - (5 * age) - 80);
    return result
}





//main programm
const start = function(){
    let chooseGender = prompt("Select your gender:\n\n1) Female\n2) Male\n3) Other").toLocaleLowerCase();
    if((chooseGender == "1") || (chooseGender == "female")){
        let age = Number((prompt("Insert your age:")));
        if(isNaN(age)){
        alert("You must insert a number.");
        start()
        }else if(age < 18){
        alert("You must to be over 18 years old to access to the calculator.")
        Login()
        }
        let weight = Number(prompt("Insert your weight in kilos:"));
        if(isNaN(weight)){
        alert("You must insert a number.");
        start()
        }
        let height = Number(prompt("Insert your height in centimentres:"));
        if(isNaN(height)){
        alert("You must insert a number.");
        start()
        }
        let chooseActivityLevel = prompt("Select your activity level:\n\n1) Very Active\n2) Active\n3) Not too active\n4) Not active at all").toLocaleLowerCase();
        if((chooseActivityLevel == "1") || (chooseActivityLevel == "very active")){
            let activityLevel = 500
            let startAgain = prompt(`Your TBM is ${(calculatorFemale(age, weight, height)+activityLevel)}. It means that you should consume ${(calculatorFemale(age, weight, height)+activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "2") || (chooseActivityLevel == "active")){
            let activityLevel = 300
            let startAgain = prompt(`Your TBM is ${(calculatorFemale(age, weight, height))-activityLevel}. It means that you should consume ${(calculatorFemale(age, weight, height))-activityLevel} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "3") || (chooseActivityLevel == "not too active")){
            let activityLevel = 150
            let startAgain = prompt(`Your TBM is ${(calculatorFemale(age, weight, height))-activityLevel}. It means that you should consume ${(calculatorFemale(age, weight, height))-activityLevel} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "4") || (chooseActivityLevel == "not active at all")){
            let activityLevel = 0
            let startAgain = prompt(`Your TBM is ${(calculatorFemale(age, weight, height))-activityLevel}. It means that you should consume ${(calculatorFemale(age, weight, height))-activityLevel} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else{
            alert("Invalid entry");
            start();
        }
    }else if((chooseGender == "2") || (chooseGender == "male")){
        let age = Number((prompt("Insert your age:")));
        if(isNaN(age)){
        alert("You must insert a number.");
        start()
        }else if(age < 18){
        alert("You must to be over 18 years old to access to the calculator.")
        Login()
        }
        let weight = Number(prompt("Insert your weight in kilos:"));
        if(isNaN(weight)){
        alert("You must insert a number.");
        start()
        }
        let height = Number(prompt("Insert your height in centimentres:"));
        if(isNaN(height)){
        alert("You must insert a number.");
        start()
        }
        let chooseActivityLevel = prompt("Select your activity level:\n\n1) Very Active\n2) Active\n3) Not too active\n4) Not active at all").toLocaleLowerCase();
        if((chooseActivityLevel == "1") || (chooseActivityLevel == "very active")){
            let activityLevel = 500
            let startAgain = prompt(`Your TBM is ${(calculatorMale(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorMale(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "2") || (chooseActivityLevel == "active")){
            let activityLevel = 300
            let startAgain = prompt(`Your TBM is ${(calculatorMale(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorMale(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "3") || (chooseActivityLevel == "not too active")){
            let activityLevel = 150
            let startAgain = prompt(`Your TBM is ${(calculatorMale(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorMale(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "4") || (chooseActivityLevel == "not active at all")){
            let activityLevel = 0
            let startAgain = prompt(`Your TBM is ${(calculatorMale(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorMale(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else{
            alert("Invalid entry");
            start();
        }
    }else if((chooseGender == "3") || (chooseGender == "other")){
        let age = Number((prompt("Insert your age:")));
        if(isNaN(age)){
        alert("You must insert a number.");
        start()
        }else if(age < 18){
        alert("You must to be over 18 years old to access to the calculator.")
        Login()
        }
        let weight = Number(prompt("Insert your weight in kilos:"));
        if(isNaN(weight)){
        alert("You must insert a number.");
        start()
        }
        let height = Number(prompt("Insert your height in centimentres:"));
        if(isNaN(height)){
        alert("You must insert a number.");
        start()
        }
        let chooseActivityLevel = prompt("Select your activity level:\n\n1) Very Active\n2) Active\n3) Not too active\n4) Not active at all").toLocaleLowerCase();
        if((chooseActivityLevel == "1") || (chooseActivityLevel == "very active")){
            let activityLevel = 500
            let startAgain = prompt(`Your TBM is ${(calculatorOther(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorOther(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "2") || (chooseActivityLevel == "active")){
            let activityLevel = 300
            let startAgain = prompt(`Your TBM is ${(calculatorOther(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorOther(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "3") || (chooseActivityLevel == "not too active")){
            let activityLevel = 150
            let startAgain = prompt(`Your TBM is ${(calculatorOther(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorOther(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else if((chooseActivityLevel == "4") || (chooseActivityLevel == "not active at all")){
            let activityLevel = 0
            let startAgain = prompt(`Your TBM is ${(calculatorOther(age, weight, height)-activityLevel)}. It means that you should consume ${(calculatorOther(age, weight, height)-activityLevel)} calories as maximum per day to lose weight.\n\nWould you like to calculate it again? (YES or NO)`).toLocaleLowerCase();
            if((startAgain === "yes") || (startAgain === "y")){
                start();
            }else{
                alert(`See you next time!`);
            }
        }else{
            alert("Invalid entry");
            start();
        }
    }else{
        start();
    }
    
}

Login();





