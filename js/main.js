// SECTION 1 - LOG IN

//create user name and log in

let userName = ""

function Login(){
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
            alert("Incorrect password. Try again.");
            password();
        }else if(selectPassword == ""){
            alert("You must enter a password to create your account. Try again.");
            password();
        }
    }
    password(); 
}

//SECTION 2 CALCULATOR

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
        if((isNaN(age)) || ((age < 0))){
            (alert("You must insert a positive number."));
            chooseAge();
        }else if(age < 18){
            (alert("You must to be over 18 years old to access to the calculator."));
            chooseAge();
        }
    }
    chooseWeight = () =>{
        weight = Number(prompt("Insert your weight in kilos:"));
        if((isNaN(weight)) || (weight < 0)){
            (alert("You must insert a positive number."));
            chooseWeight();
        }
    }
    chooseHeight = () =>{
        height = Number(prompt("Insert your height in centimentres:"));
        if((isNaN(height)) || (height < 0)){
            (alert("You must insert a positive number."));
            chooseHeight();
        }
    }
    chooseAge()
    chooseWeight()
    chooseHeight();
}


//main programm
const start = function(){
    const calculate = () =>{
        if(gender == 161){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorFemale(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorFemale(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`); 
            if(resultTBM == true){
                start();
            }else{
                offerRecipe();
            }
        }else if(gender == 5){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorMale(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorMale(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`);
            if(resultTBM == true){
                start();
            }else{
                offerRecipe();
            }
        }else if(gender == 80){
            let resultTBM = confirm(`Your TBM is ${Math.round(calculatorOther(age, weight, height, gender)+activityLevel)}. It means that you should consume ${Math.round(calculatorOther(age, weight, height, gender)+activityLevel)} calories as maximum per day if you want to lose weight.\n\nWould you like to calculate it again?`);
            if(resultTBM == true){
                start();
            }else{
                offerRecipe();
            }
        }else{
            alert("Invalid entry.");
            start();
        }
    }
    chooseGender();
    personalDetails();
    chooseActivityLevel();
    calculate();
}

//SECTION 3 RECIPES



//functions to creat recipes:

class Recipe{
    constructor(name, category, ingredients, calories, serving, protein, fats){
        this.name = name
        this.category = category
        this.ingredients = ingredients
        this.calories = calories
        this.serving = serving
        this.protein = protein
        this.fats = fats
    }
}

//recipes: 


const quinoaBurger = new Recipe("Quinoa Burger", "Low Calories", "20g breadcrumbs, 2 eggs, 130g onions, 100g carrots, 310g zuccini, 200g white quinoa", 92, 12, 3.9, 2);

const appleCrumble = new Recipe ("Apple Crumble", "Low Calories", "20g cornflour, 3 eggs, 200g natural sweetener, 400g plain protein yoghurt, 4 apples", 93, 8, 7.8, 2)

const proteinCookies = new Recipe ("Protein Cookies", "High Protein", "5ml vanilla essence, 1 entire egg, 1 egg white, 25g dark choco chips, 20g cornflour, 40g natural sweetner, 80g peanut butter, 1,5 scoops vanilla whey protein", 153, 6, 10.2, 9.3);

const greenPie = new Recipe ("Green Pie", "High Protein", "2 zuccini, 120g cottage cheese (fat free), 100g mushrooms, 100g onion, 120g light cheese, 170g asparagus, 115g brocoli, 4 eggs", 429, 4, 21.6, 6.5)

const wholeWheatPancakes = new Recipe ("Whole Wheat Pancakes", "Low Fat", "75g whole wheat flour, 150ml almond milk", 74, 4, 2.7, 0.7);

const spinachBurgers = new Recipe ("Spinach Burgers", "Low Fat", "1 egg, 100g cottage cheese, 1/2 capsicum, 100g carrots, 230g onion, 500g frozen spinach", 50, 10, 3.6, 1.2)


//array of recipes:


const recipes = [quinoaBurger, appleCrumble, proteinCookies, greenPie, wholeWheatPancakes, spinachBurgers]


//function to offer a recipe according to user's condition

const offerRecipe = function(){
    let weeklyRecipe = confirm("Would you like to check our recipes of the week?");
    if(weeklyRecipe == true){
        const chooseCategory = () =>{
            let chosenCategory = prompt("Which category do you prefer?\n\n1) Low calories\n2) High protein\n3) Low Fat").toLocaleLowerCase();
            if((chosenCategory === "1") || (chosenCategory === "low calories" || (chosenCategory === "low calorie"))){
                let askCalories = Number(prompt(`Which is the maximum of calories per serving you are looking for?`))
                let condition = recipes.find((element)=>{return element.calories < askCalories})
                if(!isNaN(askCalories)){
                    if(condition){
                        let getRecipe = confirm(`We have the perfect recipe for you: ${condition.name} (${condition.serving} servings)\n\nIngredients:\n${condition.ingredients}\n\nTotal ${condition.calories} calories per serving.\n\nWould you like to come back to the category menu?`)
                        if(getRecipe){
                            chooseCategory()
                        }else{
                            alert(`See you next time ${userName}!`);
                        }
                    }else{
                        let sorry = confirm(`Sorry, we don't have any recipe that reaches your expectations. Would you like to try again?`)
                        if(sorry){
                            chooseCategory()
                        }
                        else{
                            alert(`See you next time ${userName}!`);
                        }
                    }
                }else{
                    alert(`Invalid entry. Try again.`)
                    chooseCategory()
                }
            }else if((chosenCategory === "2") || (chosenCategory === "high protein" || (chosenCategory === "high proteins"))){
                let askProtein = Number(prompt(`Which is the miminum of protein per serving you are looking for?`))
                let condition = recipes.find((element)=>{return element.protein > askProtein})
                if(!isNaN(askProtein)){
                    if(condition){
                        let getRecipe = confirm(`We have the perfect recipe for you: ${condition.name} (${condition.serving} servings)\n\nIngredients:\n${condition.ingredients}\n\nTotal ${condition.protein} protein per serving.\n\nWould you like to come back to the category menu?`)
                        if(getRecipe){
                            chooseCategory()
                        }else{
                            alert(`See you next time ${userName}!`);
                        }
                    }else{
                        let sorry = confirm(`Sorry, we don't have any recipe that reaches your expectations. Would you like to try again?`)
                        if(sorry){
                            chooseCategory()
                        }
                        else{
                            alert(`See you next time ${userName}!`);
                        }
                    }
                }else{
                    alert(`Invalid entry. Try again.`)
                    chooseCategory()
                }
            }else if((chosenCategory === "3") || (chosenCategory === "low fat" || (chosenCategory === "low fats"))){
                let askFats = Number(prompt(`Which is the maximum of fats per serving you are looking for?`))
                let condition = recipes.find((element)=>{return element.fats < askFats})
                if(!isNaN(askFats)){
                    if(condition){
                        let getRecipe = confirm(`We have the perfect recipe for you: ${condition.name} (${condition.serving} servings)\n\nIngredients:\n${condition.ingredients}\n\nTotal ${condition.fats} fats per serving.\n\nWould you like to come back to the category menu?`)
                        if(getRecipe){
                            chooseCategory()
                        }else{
                            alert(`See you next time ${userName}!`);
                        }
                    }else{
                        let sorry = confirm(`Sorry, we don't have any recipe that reaches your expectations. Would you like to try again?`)
                        if(sorry){
                            chooseCategory()
                        }
                        else{
                            alert(`See you next time ${userName}!`);
                        }
                    }
                }else{
                    alert(`Invalid entry. Try again.`)
                    chooseCategory()
                }
            }else{
                alert(`Invalid entry. Try again.`);
                chooseCategory();
            }
        }
        chooseCategory();
    }else{
        alert(`See you next time ${userName}!`);
    }
}


Login();

