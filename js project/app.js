const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const h1 = document.querySelector(".pragraf")
const banner = document.querySelector(".banner")

btn.addEventListener('click', showInputValue);
function showInputValue(e){
    // console.log(input.value);
    e.preventDefault();
    h1.innerHTML = input.value
}





// const nameOne = ['Habibullo', 'nazirbek', 'saidakbar']
// const nameTwo = ['arabjon', 'samandar', 'muxammadjon']

// const nameOneAndTwo= nameOne.concat(nameTwo)
// console.log(nameOneAndTwo)

// let word = 'Javascript'
// let word2 = word.substr(0,8)
// console.log(word2)

// let fullDate = new Date();
// console.log(fullDate)

// let today = fullDate.getDate()
// let tuday = fullDate.getDay()
// let year = fullDate.getUTCFullYear()
// console.log('bugun', year)
// console.log('bugun', today)
// console.log('bugun', tuday)
                        
const newUser={
    username:'samandar',
    age:18,
    learning:'IT',
    hobby:'futbal'
}

const onlyValue = Object.values(newUser)
console.log(onlyValue)

const onlyKeys = Object.keys(newUser)
console.log(onlyKeys)

const entries = Object.entries(newUser)
console.log(entries)

Object.seal(newUser)
delete newUser.username
console.log(newUser.username)

// let number = 10
// if (number * 5 === 5) {
//     console.log('10 5da katta')
// }
// if (number * 2 === 25) {
//     console.log("10 kopaygan 2ga teng 20")
// }
// else{
//     console.log('raqam nechchi')
// }

// const today = "juma"
// const weather = "sunny"
// if(today === "juma"){
//     console.log('bugun curs bor')
// }

// if (today ==="juma"){
//     if(weather ==="sunny"){
//         prompt("kursga bormiman")
//     }

//     else{
//         alert("kursga boraman")
//     }
// }


