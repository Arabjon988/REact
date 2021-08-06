// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(malumot => malumot.json())
//     .then(malumotObject => getData(malumotObject)
//     )

// function getData(malumotObject) {
//     console.log(malumotObject)
//     malumotObject.forEach(xoxlagan => {
//         const h4 = document.createElement("h4")
//         h4.innerHTML = xoxlagan.title;
//         document.body.appendChild(h4)
//     });
// }


fetch('https://jsonplaceholder.typicode.com/photos')
    .then(malumot => malumot.json())
    .then(malumotObject => getData(malumotObject)
    )


function getData(malumotObject) {
    console.log(malumotObject)
    const tengimg = malumotObject.slice(0, 2)
    tengimg.forEach(xoxlagan => {
        const img1 = document.createElement("img")
        img1.setAttribute('src', xoxlagan.url)
        document.body.appendChild(img1)
    });
}


// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(malumot => malumot.json())
//     .then(malumotObject => getData(malumotObject))

// function getData(malumotObject) {
//     console.log(malumotObject)
//     const img = malumotObject.slice(12, 15)
//     img.forEach(xoxlagan => {
//         const img2 = document.createElement("img")
//         img2.setAttribute('src', xoxlagan.url)
//         document.body.appendChild(img2)
//     })
// }


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(malumot => malumot.json)
//     .then(malumotObject => getData(malumotObject))

// function getData(malumotObject) {
//     console.log(malumotObject)
//     const h4last = malumotObject.slice(0, 10)
//     h4last.forEach(xoxlagan => {
//         const h4 = document.createElement("h4")
//         h4.innerHTML = xoxlagan.title
//         document.body.appendChild(h4)

//     });
// }


fetch('https://jsonplaceholder.typicode.com/users')
    .then(malumot => malumot.json())
    .then(json => getMalumot(json));

function getMalumot(json) {
    json.forEach(element => {
        // const h1 = document.createElement('h1');
        const ul = document.createElement('ul')
        const li1 = document.createElement('li')
        const li2 = document.createElement('li')
        const li3 = document.createElement('li')
        const li4 = document.createElement('li')
        li1.innerHTML = element.id;
        li2.innerHTML = element.name;
        li3.innerHTML = element.username;
        li4.innerHTML = element.email;
        // document.body.appendChild(h1)
        document.body.appendChild(ul)
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        // console.log(h1)
    });
    console.log(json)
}


// const telegramData = {
//     users: [
//         {
//             username: "Otabek",
//             age: 20,
//             gender: "male",
//             email: "otabeksadriddinov02@mail.ru",
//             hobbies: ["sleeping", "drinking", "smoking"],
//             isMarried: true,
//             hasOwnCar: null,
//         },
//         {
//             username: "Boburmirzo",
//             age: 23,
//             gender: "male",
//             email: "nimadurnimadur@mail.ru",
//             hobbies: ["feeding chicks", "learning IT", "farqiyoq"],
//             isMarried: false,
//             hasOwnCar: null,
//         },
//         {
//             username: "Asadbek",
//             age: 16,
//             gender: "male",
//             email: "nimadurnimadur2@mail.ru",
//             hobbies: ["feeding dogs", "learning IT", "cs go"],
//             isMarried: false,
//             hasOwnCar: null,
//         },
//         {
//             username: "Zafarbek",
//             age: 25,
//             gender: "male",
//             email: "nimadurnimadur3@mail.ru",
//             hobbies: ["sleeping", "breaking pc", "sledushi"],
//             isMarried: true,
//             hasOwnCar: true,
//         },
//         {
//             username: "Jamshid",
//             age: 17,
//             gender: "male",
//             email: "nimadurnimadur4@mail.ru",
//             hobbies: [
//                 "Football",
//                 "Swimming",
//                 [
//                     {
//                         address: {
//                             city: "Namangan"
//                         },
//                         lattitude: {
//                             long: "3953783759383"
//                         }
//                     },
//                     {
//                         addressLat: {
//                             city: "Namangan"
//                         },
//                         lattitude: {
//                             lat: [
//                                 {
//                                     name: "Habibulloh",
//                                     interest: ["Football", "Flutter", {
//                                         mobile: [
//                                             {
//                                                 ios: "Iphone"
//                                             },
//                                             {
//                                                 android: {
//                                                     version: "11"
//                                                 }
//                                             }
//                                         ]
//                                     }]
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             ],
//             isMarried: false,
//             hasOwnCar: null,
//         },
//     ],
// };

// //   const cars = ["asjbvjsab", "sajcjkbasc", "absjksabcbas", "nnnnsncsacnasvb"];
// console.log(telegramData.users[telegramData.users.length - 1].hobbies[telegramData.users[telegramData.users.length - 1].hobbies.length - 1][telegramData.users[telegramData.users.length - 1].hobbies[telegramData.users[telegramData.users.length - 1].hobbies.length - 1].length - 1].lattitude.lat)





