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
    constructor(name, category, ingredients, calories, serving){
        this.name = name
        this.category = category
        this.ingredients = ingredients
        this.calories = calories
        this.serving = serving
    }
}

//weekly recipes: 


const quinoaBurger = new Recipe("Quinoa Burger", "Low Calories", "20g breadcrumbs, 2 eggs, 130g onions, 100g carrots, 310g zuccini, 200g white quinoa", 92, 12);

const appleCrumble = new Recipe ("Apple Crumble", "Low Calories", "20g cornflour, 3 eggs, 200g natural sweetener, 400g plain protein yoghurt, 4 apples", 93, 8)

const proteinCookies = new Recipe ("Protein Cookies", "High Protein", "5ml vanilla essence, 1 entire egg, 1 egg white, 25g dark choco chips, 20g cornflour, 40g natural sweetner, 80g peanut butter, 1,5 scoops vanilla whey protein", 153, 6);

const greenPie = new Recipe ("Green Pie", "High Protein", "2 zuccini, 120g cottage cheese (fat free), 100g mushrooms, 100g onion, 120g light cheese, 170g asparagus, 115g brocoli, 4 eggs", 429, 4)

const wholeWheatPancakes = new Recipe ("Whole Wheat Pancakes", "Low Fat", "75g whole wheat flour, 150ml almond milk", 74, 4);

const spinachBurgers = new Recipe ("Spinach Burgers", "Low Fat", "1 egg, 100g cottage cheese, 1/2 capsicum, 100g carrots, 230g onion, 500g frozen spinach", 50, 10)


//array of recipes by categories

const lowCalorieRecipes = [quinoaBurger, appleCrumble];

const highProteinRecipes = [proteinCookies, greenPie];

const lowFatRecipes = [wholeWheatPancakes, spinachBurgers];



const offerRecipe = function(){
    let weeklyRecipe = confirm("Would you like to check our recipes of the week?");
    if(weeklyRecipe == true){
        const chooseCategory = () =>{
            let chosenCategory = prompt("Which category do you prefer?\n\n1) Low calories\n2) High protein\n3) Low Fat").toLocaleLowerCase();
            if((chosenCategory === "1") || (chosenCategory === "low calories" || (chosenCategory === "low calorie"))){
                let resultRecipe = confirm(`Our weekly ${lowCalorieRecipes[0].category} recipe for you is:\n\n${lowCalorieRecipes[0].name} (${lowCalorieRecipes[0].serving} servings)\n\nIngredients:\n${lowCalorieRecipes[0].ingredients}\n\nTotal: ${lowCalorieRecipes[0].calories} calories per serving.\n\nWould you like another Low Calorie recipe?`);
                if(resultRecipe == true){
                    let anotherRecipe = confirm(`Another ${lowCalorieRecipes[1].category} recipe for you:\n\n${lowCalorieRecipes[1].name} (${lowCalorieRecipes[1].serving} servings)\n\nIngredients:\n${lowCalorieRecipes[1].ingredients}\n\nTotal: ${lowCalorieRecipes[1].calories} calories per serving.\n\nWould you like to check another category?`)
                    if(anotherRecipe == true){
                        chooseCategory()
                    }else{
                        alert(`See you next time ${userName}!`);
                    }
                }else{
                    alert(`See you next time ${userName}!`);
                }
            }else if((chosenCategory === "2") || (chosenCategory === "high protein" || (chosenCategory === "high proteins"))){
                let resultRecipe = confirm(`Our weekly ${highProteinRecipes[0].category} recipe for you is:\n\n${highProteinRecipes[0].name} (${highProteinRecipes[0].serving} servings)\n\nIngredients:\n${highProteinRecipes[0].ingredients}\n\nTotal: ${highProteinRecipes[0].calories} calories per serving.\n\nWould you like another High Protein recipe?`);
                if(resultRecipe == true){
                    let anotherRecipe = confirm(`Another ${highProteinRecipes[1].category} recipe for you:\n\n${highProteinRecipes[1].name} (${highProteinRecipes[1].serving} servings)\n\nIngredients:\n${highProteinRecipes[1].ingredients}\n\nTotal: ${highProteinRecipes[1].calories} calories per serving.\n\nWould you like to check another category?`)
                    if(anotherRecipe == true){
                        chooseCategory()
                    }else{
                        alert(`See you next time ${userName}!`);
                    }
                }else{
                    alert(`See you next time ${userName}!`);
                }
            }else if((chosenCategory === "3") || (chosenCategory === "low fat" || (chosenCategory === "low fats"))){
                let resultRecipe = confirm(`Our weekly ${lowFatRecipes[0].category} recipe for you is:\n\n${lowFatRecipes[0].name} (${lowFatRecipes[0].serving} servings)\n\nIngredients:\n${lowFatRecipes[0].ingredients}\n\nTotal: ${lowFatRecipes[0].calories} calories per serving.\n\nWould you like another Low Fat recipe?`);
                if(resultRecipe == true){
                    let anotherRecipe = confirm(`Another ${lowFatRecipes[1].category} recipe for you:\n\n${lowFatRecipes[1].name} (${lowFatRecipes[1].serving} servings)\n\nIngredients:\n${lowFatRecipes[1].ingredients}\n\nTotal: ${lowFatRecipes[1].calories} calories per serving.\n\nWould you like to check another category?`)
                    if(anotherRecipe == true){
                        chooseCategory()
                    }else{
                        alert(`See you next time ${userName}!`);
                    }
                }else{
                    alert(`See you next time ${userName}!`);
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


//filters for the recipe search engine: 

const allRecipes = lowCalorieRecipes.concat(highProteinRecipes, lowFatRecipes)
console.log(`All recipes: `)
console.log(allRecipes)

const lessThan100Calories = allRecipes.filter(recipe => recipe.calories < 100)
console.log(`Recipes less then 100 calories:`)
console.log(lessThan100Calories)

const moreThan4Diners = allRecipes.filter(recipe => recipe.serving >= 4)
console.log(`Recipes for more than 4 people: `)
console.log(moreThan4Diners)


const AZRecipes =  allRecipes.sort((element1, element2) =>{
    if (element1.name > element2.name){
        return 1
    }else if(element1.name < element2.name){
        return -1
    }
    return 0
})
console.log(`Alphabetically (A-Z) ordered recipes: `)
console.log(AZRecipes)






