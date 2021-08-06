const solary = document.querySelector("#salary")
const year = document.querySelector("#year")
const btn = document.querySelector("#btn")
const text = document.querySelector(".text")
const form = document.querySelector(".form")



form.addEventListener('submit', calculate)
function calculate(e) {
    let thisYear = new Date()
    thisYear = thisYear.getFullYear()
    const workedYear = thisYear - year.value
    if (workedYear < 10) {
        alert("you worked less than 10 yeras. You cannot get extra salary")
    }

    if (workedYear <= 20) {
        alert("you worked than 10 years. You can get 10% extra salars ")
        alert(salary.value * 1.1)
    }
    else if (workedYear <= 30) {
        alert("you worked than 20 years. You can get 20% extra salars ")
        alert(salary.value * 1.2)
    }
    else if (workedYear <= 40) {
        alert("you worked than 30 years. You can get 30% extra salars ")
        alert(salary.value * 1.3)
    }
    else {
        alert("you worked than 30 years. You can get 30% extra salars ")
        alert(salary.value * 1.3)
    }


    e.preventDefault()
}


const today = ""
switch (today) {
    case "Monday":
        console.log("Today is Monday")
        break
    case "Tuesday":
        console.log("Today is Tuesday")
        break
    case "Wendesday":
        console.log("Today is Wendesday")
        break
    case "Thursday":
        console.log("Today is Thursday")
        break
    case "Friday":
        console.log("Today is Friday")
        break
    case "Saturday":
        console.log("Today is Saturday")
        break
    case "Sunday":
        console.log("Today is Sunday")
        break
    default:
        console.log("today is a not day")

}



const friends = ""
switch (friends) {
    case "Sardor":
        console.log("This is my friend")
        break
    case "Sodirjon":
        console.log("THIS IS MY FRIEND")
        break
    case "ABDUVALI":
        console.log("this is my friend")
        break
    case "Jasur":
        console.log("this is my frinend")
        break
    case "Mirsoli":
        console.log("this is my frinend")
        break
    case "Abdullajon":
        console.log("this is my frinend")
        break
    case "Sardor":
        console.log("This is my friend")
        break
    case "Zuxriddin":
        console.log("THIS IS MY FRIEND")
        break
    case "Dilmurod":
        console.log("this is my friend")
        break
    case "Yaxyo":
        console.log("this is my frinend")
        break
    case "Alisher":
        console.log("this is my frinend")
        break
    case "Davron":
        console.log("this is my frinend")
        break
    case "Jumanazar":
        console.log("This is my friend")
        break
    case "Usmon":
        console.log("THIS IS MY FRIEND")
        break
    case "Akbarali":
        console.log("this is my friend")
        break
    case "Jamoliddin":
        console.log("this is my frinend")
        break
    case "Muxammadsodiq":
        console.log("this is my frinend")
        break
    case "Abdulla":
        console.log("this is my frinend")
        break
    case "Jakbar":
        console.log("This is my friend")
        break
    case "Sodiq":
        console.log("THIS IS MY FRIEND")
        break
    case "Abror":
        console.log("this is my friend")
        break
    case "Jo'raqo'zi":
        console.log("this is my frinend")
        break
    case "Mirzahmad":
        console.log("this is my frinend")
        break
    case "Abdunosir":
        console.log("this is my frinend")
        break
    case "Sarvar":
        console.log("This is my friend")
        break
    case "Sirojjin":
        console.log("THIS IS MY FRIEND")
        break
    case "Anvarbek":
        console.log("this is my friend")
        break
    case "Javlon":
        console.log("this is my frinend")
        break
    case "Mirzohid":
        console.log("this is my frinend")
        break
    case "Abduqodir":
        console.log("this is my frinend")
        break
    default:
        console.log("this is a not my friends")
}


const newUser =
{
    username: "Samandar",
    lastname: "Ho'jaqulov",
    hobby: "footbal",
    school: "45-maktab",
    age: 20,
    size: 168,
    telNumber: +998996552323,
    userParol: "1235sxscdc",
    userLogin: "Samandar2323@gmail.com",
    learning: 'IT'
}

const newUser1 = {
    username: "Saidakabr",
    lastname: "Hoshimov",
    hobby: "footbal" && "tennis",
    school: "8-maktab",
    age: 27,
    size: 158,
    telNumber: +998932552323,
    userParol: "12scdc",
    userLogin: "Saidakabr@gmail.com",
    learning: 'IT' && 'english'

}
const newUser2 = {
    username: "Sarvar",
    lastname: "Jumaniyozov",
    hobby: "playsition",
    school: "4-maktab",
    age: 18,
    size: 160,
    telNumber: +998992356323,
    userParol: "123wdwxsdddwc",
    userLogin: "Sarvar6323@gmail.com",
    learning: 'English'

}


const onlyValue = Object.values(newUser)
console.log(onlyValue)

const onlyKeys = Object.keys(newUser)
console.log(onlyKeys)

const onlyEntries = Object.entries(newUser)
console.log(onlyEntries)



const onlyValue1 = Object.values(newUser1)
console.log(onlyValue1)

const onlyKeys1 = Object.keys(newUser1)
console.log(onlyKeys1)

const onlyEntries1 = Object.entries(newUser1)
console.log(onlyEntries1)



const onlyValue2 = Object.values(newUser2)
console.log(onlyValue2)

const onlyKeys2 = Object.keys(newUser2)
console.log(onlyKeys2)

const onlyEntries2 = Object.entries(newUser2)
console.log(onlyEntries2)



const oshxonada = "choynak bor";
const choynak = "suv bor"
const gaz = "gaz bor"
const gugurt = "bor"
const qaynadi = "gazni o'chir"
const quruqChoy = "yo'q"
const quruqChoy1 = "bor"
const damlash = "choy dam olsin"
const pul = "yo'q"
const magazin = "ko'chada"
const dokonda = "bor"
const piyola = "bor"
const ichmoq = "piyola"

if (oshxonada === "choynak bor") {
    console.log("choynakni suvga to'ldir")
    if (choynak === "suv bor") {
        console.log(" choynakda suv bo'lsa gazga olib bor")
        if (gaz === "gaz bor") {
            console.log("gugurt top")
            if (quruqChoy === "yo'q") {
                console.log("quruqchoyga pul yo'q")
                if (pul === "yo'q") {
                    console.log(" agar pul bo'lmasa magazinga bor")
                    if (magazin === "ko'chada") {
                        console.log("magazin togriga 15m va chapga 35m uzoqlikda")
                        if (dokonda === "bor") {
                            console.log("dokondan qarzga bo'lsa xam olib kel")
                            if (gugurt === "bor") {
                                console.log("gugurt bilan gazni yo'q")
                                if (qaynadi === "gazni o'chir") {
                                    console.log("qaynagan bo'lsa suvni o'chir")
                                    if (quruqChoy1 === "bor") {
                                        console.log("qaynagan suvni ustiga quruqchoy sol")
                                        if (damlash === "choy dam olsin") {
                                            console.log("choy 30minut dam olsin")
                                            if(piyola=== "yo'q"){
                                                console.log("piyola toza bo'lsa ol")
                                                if (ichmoq === "piyola") {
                                                    console.log("endi miriqib damni olib ich")
                                                }
                                            }
                                            else{
                                                console.log("piyola toza bo'lsa ol")
                                                if (ichmoq === "piyola") {
                                                    console.log("endi miriqib damni olib ich")
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

