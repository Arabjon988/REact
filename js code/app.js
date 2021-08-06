// documentalniy hisoblashda umumiy hisoblash
// const numbers = [4, 5]
// const reduced = numbers.reduce((a, b) => a + b);
// console.log(reduced)
// 

// bunda kvadrat ishlab chiqarish



// // bu ildiz uchun ishlatiladi
// const num = 25;
// const result = Math.sqrt(num)
// console.log(result)

// function getData(){
//     console.log(e.target.value)
// }


// getData()

// const radius = 10
// const result = radius * Math.PI
// console.log(result)

const number = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < number.length; i++) {
    console.log(`${number[i]} ${' @'}`)
}

const nameDiv= document.querySelector('.name')
const ulList= document.querySelector('.list')


fetch('https://fortnite-api.com/v1/banners')
    .then(res => res.json())
    .then(take => takeData(take))
    .catch(err=> console.log(err))


fetch('https://fortnite-api.com/v1/playlists')
    .then(res => res.json())
    .then(proms => getData(proms))
    .catch(err=> console.log(err))


    function takeData(take){
        console.log(take)
        // take.forEach(xoxlagan => {
            const li = document.createElement("li")
            li.innerHTML = take.data[0].devName;
            ulList.appendChild(li)
        // })
    }
    function getData(proms){
        console.log(proms)
        // proms.forEach(xoxlagan => {
            const h1 = document.createElement("h1")    
            h1.innerHTML = proms.data[0].name;
            nameDiv.appendChild(h1)
        // })
    }

fetch("https://fortnite-api.com/v2/shop/br")
.then(res => res.json())
.then(prom => allData(prom))
.catch(err => console.log(err));

function allData(prom) {

    console.log(prom.data.daily.entries[0].newDisplayAsset.materialInstances[0].images.OfferImage)
    const img = document.createElement('img')
    img.forEach(xoxlagan => {
        img.setAttribute('src', xoxlagan.data.daily.entries[0].newDisplayAsset.materialInstances[0].images.OfferImage.url)
        document.body.appendChild(img)
    });

    console.log(prom)
}


fetch("https://fortnite-api.com/v2/shop/br")
.then(res => res.json())
.then(promise => allData(promise))
.catch(err => console.log(err));

function allData(promise) {
    console.log(promise.data.daily.entries[0].items[0].shopHistory)    
}


// fetch('https://fortnite-api.com/v1/playlists')
//     .then(malumot => malumot.json())
//     .then(malumotObject => getData(malumotObject)
//     )

// function getData(malumotObject) {
//     console.log(malumotObject)
//     malumotObject.forEach(xoxlagan => {
//         const h4 = document.createElement("h4")
//         h4.innerHTML = xoxlagan.status.data.name;
//         document.body.appendChild(h4)
//     });
// }



// const random = Math.floor(Math.random()*100000)
// console.log(random)

// const fixed = 56.15645
// const result = fixed.toFixed(2)
// console.log(result)


// topshiriq   


// const numbers = [1,5,4,56,986,15]
// const result = Math.min(... numbers)
// console.log(result)

// math xar bir 10ta, reduce 10ta, mapga 10ta, 100talik telefon nomer random

// const numbers7 = [4, 5]
// const reduced7 = numbers7.reduce((a, b) => a + b);
// console.log(reduced7)

// const numbers6 = [4, 5, 6, 2, 3, 15]
// const reduced6 = numbers6.reduce((a, b) => a + b);
// console.log(reduced6)

// const numbers5 = [4, 5, 45, 5, 456, 12, 3]
// const reduced5 = numbers5.reduce((a, b) => a - b);
// console.log(reduced5)

// const numbers3 = [4, 5, 12, 13, 45, 56, 10]
// const reduced3 = numbers3.reduce((a, b) => a + b);
// console.log(reduced3)

// const numbers4 = [4, 5, 21, 20, 23, 25, 26, 213]
// const reduced4 = numbers4.reduce((a, b) => a - b);
// console.log(reduced4)

// const numbers1 = [4, 5, 123, 126, 10, 10, 12, 32]
// const reduced1 = numbers1.reduce((a, b) => a - b);
// console.log(reduced1)

// const numbers2 = [4, 52, 22, 32, 21, 25]
// const reduced2 = numbers2.reduce((a, b) => a + b);
// console.log(reduced2)

// const numberse = [4, 5, 544, 54, 54, 5444, 5454]
// const reducede = numberse.reduce((a, b) => a - b);
// console.log(reducede)

// const numbersa = [4, 521, 21, 33, 31, 34, 35, 63]
// const reduceda = numbersa.reduce((a, b) => a + b);
// console.log(reduceda)

// const numbers10 = [4, 12, 123, 10, 200, 100, 12, 5]
// const reduced10 = numbers10.reduce((a, b) => a - b);
// console.log(reduced10)



// // mapga 10ta 
// const number1 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped1 = number1.map(a => a * 10)
// console.log(mapped1)
// const number2 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped2 = number2.map(a => a * 100)
// console.log(mapped2)
// const number3 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped3 = number3.map(a => a * 50)
// console.log(mapped3)
// const number4 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped4 = number4.map(a => a / 100)
// console.log(mapped4)
// const number5 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped5 = number5.map(a => a / 50)
// // console.log(mapped5)
// const numbera = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mappeda = numbera.map(a => a/3)
// console.log(mappeda)
// const numberw = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mappedw = numberw.map(a => a / 10)
// console.log(mappedw)
// const number6 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped6 = number6.map(a => a / a / a)
// console.log(mapped6)
// const number7 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped7 = number7.map(a => a / a)
// console.log(mapped7)
// const number8 = [1, 2, 3, 4, 5, 6, 7, 12, 35, 45];
// const mapped8 = number8.map(a => a * a * a)
// console.log(mapped8)


// const telefon = ["+998955072104","+998955042104","+998955652104","+998955752104","+998951162104","+998952002104","+998955052194","+998955052304","+998955057104","+998955452104","+998955852104","+998951092104","+998951002104","+998955052184","+998955052004","+998955058104","+998955352104","+998955952104","+998951082104","+998953002104","+998955052174","+998955052204","+998955059104","+998955252104","+998944052104","+998951072104","+998954002104","+998955052144","+998955052134","+998955054104","+998955152104","+998977052104","+998951062104","+998954402104","+998955052114","+998955052164","+998955055104","+998950052104","+998999052104","+998951042104","+998956002104","+998955052101","+998955052154","+998955056104","+998959052104","+998988052104","+998951032104","+998957002104","+998955052100","+998735052104","+998955051104","+998958052104","+998933052104","+998951022104","+998958002104","+998955052109","+998985052104","+998955053104","+998957052104","+998911052104","+998957772104","+998959002104","+998955052107","+998955052104","+998955172104","+998956052104","+998951252104","+998958882104","+998951012104","+998955052108","+998995052104","+998955092104","+998954052104","+998952252104","+998959992104","+998952022104","+998955052105","+998945552104","+998955082104","+998953052104","+998952352104","+998957752104","+998952032104","+998955051107","+998935052104","+998955062104","+998952052104","+998953352104","+998958852104","+998952042104","+998955052102","+998975052104","+998955012104","+998951052104","+998951152104","+998959952104","+998955555104","+998955052103","+998905052104",]
// const random = Math.floor(Math.random()*10)
// console.log(telefon[random])



// const num = 21;
// const result = Math.sqrt(num)
// console.log(result)
// const num = 21;
// const result = Math.floor(num)
// console.log(result)

//RESULT  0 end
// const num = 2
// const result = Math.imul(num)
// console.log(result)
//result 1 end
// const num1 = 818;
// const result1 = Math.tanh(num1)
// console.log(result1)


// const num = 21;
// const result = Math.expm1(num)
// console.log(result)
// const num = 21;
// const result = Math.exp(num)
// console.log(result)
// const num = 21;
// const result = Math.cosh(num)
// console.log(result)
// const num = 21;
// const result = Math.cos(num)
// console.log(result)
// const num = 5;
// const result = Math.clz32(num)
// console.log(result)
// const num = 21;
// const result = Math.cbrt(num)
// console.log(result)

// const num = 21;
// const result = Math.atan(num)
// console.log(result)
// const num = 21;
// const result = Math.asinh(num)
// console.log(result)

// const num = 21;
// const result = Math.sqrt(num)
// console.log(result)
// const num = 21;
// const result = Math.acosh(num)
// console.log(result)

// NaN NUMBER
// const num = 21;
// const result = Math.asin(num)
// console.log(result)
// const num = 21;
// const result = Math.acos(num)
// console.log(result)

// const num = 21;
// const result = Math.PI(num)
// console.log(result)

// math.e, math.ln10 +ln2 function not  

// const num = 21;
// const result = Math.trunc(num)
// console.log(result)
// const numberu = 221;
// const result1 = Math.round(numberu)
// console.log(result1)
// const num = 2155;
// const result = Math.abs(num)
// console.log(result)
// const num = 214;
// const result = Math.fround(num)
// console.log(result)
// const num = 2144;
// const result = Math.hypot(num)
// console.log(result)


// const num = 1;
// const result = Math.tan(num)
// console.log(result)

// const num = 21;
// const result = Math.random(num)
// console.log(result)

// const num = 1;
// const result = Math.sinh(num)
// console.log(result)

// const num = 255;
// const result = Math.sign(num)
// console.log(result)
// const num = 80;
// const result = Math.sin(num)
// console.log(result)
// const num = 0;
// const result = Math.pow(num)
// console.log(result)
// const num = 21;
// const result = Math.log2(num)
// console.log(result)
// const num = 21;
// const result = Math.log1p(num)
// console.log(result)
// const num = 105;
// const result = Math.log10(num)
// console.log(result)
// const num = 21;
// const result = Math.log(num)
// console.log(result)



// const num = 21;

// const result = Math.min(num)
// console.log(result)

// const num = 21;
// const result = Math.max(num)
// console.log(result)

