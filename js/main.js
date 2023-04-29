
//render calculate button to calculate the IBM
const calculateButton = document.getElementById("calculateButton");

//action when the calculate button is clicked
calculateButton.addEventListener("click", ()=>{
    
    //get values - DOM
    let emailUser = document.getElementById("emailUser").value
    let gender = document.querySelector("#genderInput").value
    const age = parseInt(document.getElementById("ageInput").value)
    const height = parseInt(document.getElementById("heightInput").value)
    const weight = parseInt(document.getElementById("weightInput").value)
    let activityLevel = document.querySelector("#activityLevelInput").value

    //initialize isValid to true
    let isValid = true; 

    //clear previous messages:
    //error menssage:
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "";
    //result message:
    let message = document.getElementById("resultTotal")
    message.innerHTML = ""

    //rules for values
    if((isNaN(age)) || ((age < 0)) || (age == null)){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* You must insert a positive number for age.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)
    }else if(age < 18){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* You must to be over 18 years old to access to the calculator.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)
    }else if((isNaN(weight)) || (weight < 0) || (weight == null)){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* You must insert a positive number for weight.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)
    }else if((isNaN(height)) || (height < 0) || (height == null)){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* You must insert a positive number for height.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)
    }else if(emailUser == "" || emailUser.includes("@" && ".") == false){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* You must insert a valid email.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)   
    }else if(gender == "none" || activityLevel == "none"){
        isValid = false;
        const errorMessage = document.createElement("p")
        errorMessage.innerHTML = `
        <p>* Make sure you select your gender and activity level.</p>`
        document.getElementById("errorMessage").appendChild(errorMessage)   
    }
    errorMessage.className = "errorMessage"

    //if there are no errors in the inputs:
    if (isValid) {
        //choose gender value
        if(gender == "female"){
            gender = -161
        }else if(gender == "male"){
            gender = 5
        }else if(gender == "other"){
            gender = -80
        }
        //choose activity value
        if(activityLevel == "1"){
            activityLevel = 500
        }else if(activityLevel == "2"){
            activityLevel = 300
        }else if(activityLevel == "3"){
            activityLevel = 150
        }else if(activityLevel == "4"){
            activityLevel = 0
        }

        //calculator
        let result = parseInt(((10 * weight) + (6.65 * height) - (5 * age) + gender)+activityLevel)
        //show result
        let message = document.getElementById("resultTotal")
        message.innerHTML = `➡️ Your TBM is ${result}. It means that you should consume ${result} calories as maximum per day if you want to lose weight.`
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerHTML = "";
        message.className = "resultMessage"
        //show reset button to reset the calculator
        let resetButton = document.getElementById("resetButton")
        resetButton.innerHTML = `RESET ↺`
        resetButton.className = "resetButton"

        //clear input values after calculation
        document.getElementById("emailUser").value = ""
        gender.value = ""
        document.getElementById("ageInput").value = ""
        document.getElementById("heightInput").value = ""
        document.getElementById("weightInput").value = ""
        activityLevel.value = ""

        //create new user object
        class User{
            constructor(emailUser, gender, age, height, weight, activityLevel){
                this.emailUser = emailUser;
                this.gender = gender;
                this.age = age;
                this.height = height;
                this.weight = weight;
                this.activityLevel = activityLevel
            }
        }
        const newUser = new User (emailUser, gender, age, height, weight, activityLevel)

        //add user object to usersArray
        usersArray.push(newUser)

        //save usersArray to localStorage
        localStorage.setItem("usersArray", JSON.stringify(usersArray))
    }
})

//get usersArray from localStorage 
const usersArray = JSON.parse(localStorage.getItem("usersArray")) || []

console.log(usersArray)