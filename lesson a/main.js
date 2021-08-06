const ul = document.querySelector(".collection");
const ol = document.querySelector(".collect");
const ul2 = document.querySelector(".roww");
const ol2 = document.querySelector(".coll");
const ul3 = document.querySelector(".item");
const col = document.querySelector(".collect_item")
const xarf = document.querySelector(".xarflar")
const xarf3 = document.querySelector(".xarflar2")
const xarf2 = document.querySelector(".xarflar3")
const leyy = document.querySelector(".lettr")
const raqam = document.querySelector(".raqam")
const num = document.querySelector(".num")
const users = [
    {
        username : "ABBOSXON",
        age : 21,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 26,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 20,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 28,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 28,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 27,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 24,
        experience : "middle dev" 
    },{
        username : "ABBOSXON",
        age : 21,
        experience : "middle dev" 
    },

]

// array metodlari
const cars = ["damas", "matiz", "tico", "malibu", "cobalt"]




//for loop workingl
for(let i = 0; i< users.length; i++){
    const li = document.createElement("li")
    li.innerHTML = users[i].username + " " + users[i].age;
    ul.appendChild(li)
}


const number = [6,3,5,4,8,9,7,1];
const sorted = number.sort()
const abs = ["abbb", "jbfjh","hbasbcds","fhufwe","ejfkrtk","gryegrgwekfw", 'sorted']
const sorted2 = abs.sort()
document.write(sorted2)

const users = [
    {
        username: "Abdullox",
        age: 26,
        hobbiy: "bascetboll"
    }, {
        username: "Usmon",
        age: 20,
        hobbiy: "tennis"
    }, {
        username: "Umar",
        age: 16,
        hobbiy: "chanfi"
    }, {
        username: "Ali",
        age: 15,
        hobbiy: "futball"
    },
]

for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li")
    li.innerHTML = `${users[i].username}   ${users[i].age}   ${users[i].hobbiy}`;
    ul.appendChild(li)
}


const users2 = [
    {
        name: "Abduvali",
        age: 25,
        adress: "qummozor"
    }, {
        name: "gayrat",
        age: 45,
        adress: "chek"
    }, {
        name: "xalim",
        age: 20,
        adress: "chek"
    }, {
        name: "kozim",
        age: 28,
        adress: "bogdod"
    }, {
        name: "rustam",
        age: 15,
        adress: "zarafshon"
    },
]

for (let i = 0; i < users2.length; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.innerHTML = `${users2[i].name}  ${users2[i].age} yosh  ${users2[i].adress}`
    li.appendChild(a)
    ol.appendChild(li)

}

const users3 = [
    {
        name: "Salohiddin",
        lastName: "sobirov",
        school: 25
    }, {
        name: "muxriddin",
        lastName: "adashov",
        school: 27
    }, {
        name: "Xusniddin",
        lastName: "Sattorov",
        school: 15
    }, {
        name: "Zuhriddin",
        lastName: "G'aipov",
        school: 14
    }, {
        name: "Jaloliddin",
        lastName: "Mamatov",
        school: 12
    },
]

for (let i = 0; i < users3.length; i++) {
    const li = document.createElement("li")
    li.innerHTML = `${users3[i].name}  ${users3[i].school} MAKTAB`
    ol2.appendChild(li)
}

const users4 = [
    {
        login: "Habibullo",
        parol: 12345846
    }, {
        login: "Nazirbek",
        parol: 11146656
    }, {
        login: "Raxmatullo",
        parol: 12345488
    }, {
        login: "Izzatillo",
        parol: 1234584677946
    },
]

for (let i = 0; i < users4.length; i++) {
    const li = document.createElement("li")
    li.innerHTML = `${users4[i].login}  ${users4[i].parol}`
    ul2.appendChild(li)
}


const users5 = [
    {
        parol: 165448894,
        login: "hizmatkor",
        email: "hizmatkor@gmail.com"
    }, {
        parol: 1654455,
        login: "assention",
        email: "assention@gmail.com"
    }, {
        parol: 165444444,
        login: "gaybulla",
        email: "gaybulla@gmail.com"
    }, {
        parol: 165111111,
        login: "Abdulhamid",
        email: "Abdulhamid@gmail.com"
    },
]

for (let i = 0; i < users5.length; i++) {
    const li = document.createElement("li")
    li.innerHTML = `${users5[i].login}  ${users5[i].parol}  ${users5[i].email}`
    ul3.appendChild(li)
}



const letter = ["Xabibullo", "Nazirbek", "Mirzohid", "Saidakbar", "Arabjon"]

for (let i = 0; i < letter.length; i++) {
    const sorted3 = letter.sort()
    const li = document.createElement("li")
    li.innerHTML = letter[i];
    col.appendChild(li)
    // console.log(sorted3)
    // document.write(letter)

}

const lettr = ["salom", "Alik", "olga","hayr"]

for (let i = 0; i<lettr.length; i++){
    const sorted4 = lettr.sort()
    const li = document.createElement("li")
    li.innerHTML = lettr[i];
    leyy.appendChild(li)
}

const xat = ["annyong", "xaseyo", 5, 6, 1, 3,  "chumoseyo", "xallamadrid"]

for (let i = 0; i< xat.length; i++){
    const sorted5 = xat.sort()
    const li = document.createElement("li")
    li.innerHTML = xat[i]
    xarf.appendChild(li)
}
const xatir =  [ "chumoseyo", "xallamadrid","annyong", "xaseyo", 5, 6, 1, 3,  ]

for (let i = 0; i< xatir.length; i++){
    const sorted6 = xatir.sort()
    const li = document.createElement("li")
    li.innerHTML = xatir[i]
    xarf2.appendChild(li)
}
const xater = [2, 6, 8, 3,  "chumoseyo", "annyong", "xaseyo","xallamadrid"]

for (let i = 0; i< xater.length; i++){
    const sorted7 = xater.sort()
    const li = document.createElement("li")
    li.innerHTML = xater[i]
    xarf3.appendChild(li)
}

const number = [1,2,3,5,6,8,9,12,16,19,20]

for (let i= 0; i<number.length; i++){
    const sorted10 = number.sort()
    const li = document.createElement("li")
    li.innerHTML = number[i]
    raqam.appendChild(li)
}

const number2 = [1,5,9,30]

for (let i = 0; i<30; i++){
    const sortedll = number2.sort()
    const li = document.createElement("li")
    li.innerHTML = number2[i]
    num.appendChild(li)
    console.log(number2)
}



const obekt = [2, 5, 8, 6, 9, 9, 9, 9, 8, 5, 2, 5, 7, 565, 9945, 1213, 2121, 55, 45, 4]


obekt.forEach(function(obt){
    console.log(obt)
})


 const ages = [1, 56, 45, 58, 23, 24, 25, 28, 29]
let canDrink = []     //funksiya ishlashi 1a
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}

const canDrink = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})

const canDrink = ages.filter(age => age >= 25  && age <= 45)

const myNumbers = [-5, 6, 1]
const scaer = myNumbers.filter((age) =>{
    if (age>=0)
    return true

})

const twoFullNumber = [4, 5];

const sorted =  twoFullNumber.sort((a, b) => b - a);
console.log(sorted[0]);
setTimeout(() => {
    console.log(sorted[1])
}, 2000)

const ages = [1, 56, 45, 58, 23, 24, 25, 28, 29]
let canDrink = []     //funksiya ishlashi 1a
for (let i = 0; i < number.length; i++) {
    if (number[i] >= 0) {
        can.push(can[i])
    }
}

const num = number.filter(num => num >= 0)
const can = number.filter(function (age) {
    if (age >= 0) {
        return true;
    }
})

console.log(scaer)


const students = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const student = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const studentlar = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const study = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const studies = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const children = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]
const custer = [
    {
        id: 1,
        firstName: "Xabibullo",
        age: 16,
        school: 25,
        hobby: ["play games", "futbal"],
        level: "junior"
    }, {
        id: 2,
        firstName: "Saidakbar",
        age: 18,
        school: 22,
        hobby: ["tennis", "futbal"],
        level: "senior"
    }, {
        id: 3,
        firstName: "Xurmatoy",
        age: 22,
        school: 19,
        hobby: ["play games", "futbal"],
        level: "middle"
    }, {
        id: 4,
        firstName: "Abbos",
        age: 17,
        school: 20,
        hobby: ["basketbol", "futbaljjjlllllj"],
        level: "middle"
    }
]

obekt.forEach(function (age) {

    if (age => age =>18){
    return true
}

})


const num = students.filter(level => level.level === "middle")
num.forEach((level)=> {
console.log(`${level.school}  ${level.firstName}`)

})


const can = number.filter(function (age) {
    if (age >= 0) {
        return true;
    }
})




students.forEach(s => console.log(s.firstName))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName)
}


student.forEach(s => console.log(s.firstName))
for (let i = 0; i < student.length; i++) {
    console.log(student[i].firstName)
}

students.forEach(s => console.log(s.id))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].id)
}

students.forEach(s => console.log(s.school))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].school)
}

student.forEach(s => console.log(s.id))
for (let i = 0; i < student.length; i++) {
    console.log(student[i].id)
}

student.forEach(s => console.log(s.school))
for (let i = 0; i < student.length; i++) {
    console.log(student[i].school)
}

students.forEach(s => console.log(s.hobby))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].hobby)
}

student.forEach(s => console.log(s.hobby))
for (let i = 0; i < student.length; i++) {
    console.log(student[i].hobby)
}

study.forEach(s => console.log(s.firstName))
for (let i = 0; i < study.length; i++) {
    console.log(study[i].firstName)
}

study.forEach(s => console.log(s.hobby))
for (let i = 0; i < study.length; i++) {
    console.log(study[i].hobby)
}

children.forEach(s => console.log(s.firstName))
for (let i = 0; i < children.length; i++) {
    console.log(children[i].firstName)
}

studentlar.forEach(s => console.log(s.firstName))
for (let i = 0; i < studentlar.length; i++) {
    console.log(studentlar[i].firstName)
}

studentlar.forEach(s => console.log(s.hobby))
for (let i = 0; i < studentlar.length; i++) {
    console.log(studentlar[i].hobby)
}

students.forEach(s => console.log(s.level))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].level)
}

students.forEach(s => console.log(s.age))
for (let i = 0; i < students.length; i++) {
    console.log(students[i].age)
}

studies.forEach(s => console.log(s.firstName))
for (let i = 0; i < studies.length; i++) {
    console.log(studies[i].firstName)
}

custer.forEach(s => console.log(s.hobby))
for (let i = 0; i < custer.length; i++) {
    console.log(custer[i].hobby)
}

custer.forEach(s => console.log(s.firstName))
for (let i = 0; i < custer.length; i++) {
    console.log(custer[i].firstName)

}



// filter 20
// for 10
// forEach 15
// sort 20

const number = [2, 3, 5, 20, 24, 320, 11, 30]
const sorted = number.sort((a, b) => (a - b))
console.log(sorted)
const numbera = [2, 3, 5, 20, 24, 320, 11, 30]
const sorteda = numbera.sort((a, b) => (b - a))
console.log(sorteda)
const numbers = [2, 3, 5, 20, 24, 23, 54, 213, 31, 22, 320, 11, 30]
const sorteds = numbers.sort((a, b) => (a - b))
console.log(sorteds)
const numberq = [2, 3, 5, 20, 24, 144, 454, 4646, 4646, 646, 320, 11, 30]
const sortedq = numberq.sort((a, b) => (a - b))
console.log(sortedq)
const numberw = [2, 3, 5, 20, 24, 320, 87, 987, 998, 894, 444446, 11, 30]
const sortedw = numberw.sort((a, b) => (a - b))
console.log(sortedw)
const numberr = [2, 3, 5, 20, 24, 320, 5465, 464, 5546, 55, 11, 30]
const sortedr = numberr.sort((a, b) => (a - b))
console.log(sortedr)
const number1 = [2, 3, 5, 20, 24, 320, 11, 30, 465, 6464, 4654, 5446]
const sorted1 = number1.sort((a, b) => (a - b))
console.log(sorted1)
const number2 = [2, 3, 5, 20, 24, 320, 65464, 64646, 564, 646464654, 646, 46546, 46464, 646, 464, 11, 30]
const sorted2 = number2.sort((a, b) => (a - b))
console.log(sorted2)
const number4 = [2, 3, 5, 20, 24, 320, 11, 45646, 4646, 46, 4646, 464, 64, 6464, 30]
const sorted4 = number4.sort((a, b) => (a - b))
console.log(sorted4)
const number3 = [2, 3, 5, 20, 24, 161, 6, 16, 161, 1131, 313, 1, 3, 2, , 320, 11, 30]
const sorted3 = number3.sort((a, b) => (a - b))
console.log(sorted3)
const number5 = [2, 3, 5, 20, 24, 64464, 5, 661, 31, 31, 51, 5, 64, 66, 654, 6464, 44, 4444, 320, 11, 30]
const sorted5 = number5.sort((a, b) => (a - b))
console.log(sorted5)
const number6 = [2, 3, 5, 20, 24, 320, 1113, 13, 132132, 131, 31, 313, 13, 1, 11, 30]
const sorted6 = number6.sort((a, b) => (a - b))
console.log(sorted6)
const number7 = [2, 3, 5, 20, 24, 320, 11, 13, 31, 13131, 31, 31, 31, 1, 1, 30]
const sorted7 = number7.sort((a, b) => (a - b))
console.log(sorted7)
const number8 = [2, 3, 5, 20, 24, 320, 11, 30, 21, 31, 31, 3131, 3131, 31, 31, 313]
const sorted8 = number8.sort((a, b) => (a - b))
console.log(sorted8)
const number9 = [2, 3, 5, 20, 24, 320, 11, 30, 3132, 13, 13, 1, 1, 31313, 131, 31]
const sorted9 = number9.sort((a, b) => (a - b))
console.log(sorted9)


const tree = ["#", "##","###","####","#####", "######", "#######"]
j

for (let i = 0; i < tree.length; i++) {
        if (tree[i] >= 0) {
            can.push(can[i])
       document.write(tree[i])

       }
}


var i, j;
for (i = 1; i <= 15; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*&nbsp;&nbsp;&nbsp;");
    }
    document.write("<br>")
}

let number = 5

if(number){
}