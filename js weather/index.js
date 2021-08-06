const container = document.querySelector(".container")
const generalTime = document.querySelector('.general_location__time')
const generalLocation = document.querySelector(".general__location")
const primaryContent = document.querySelector(".primary__location")
const weatherLocation = document.querySelector(".weather__location")
const latLong = document.querySelector(".lat-long")
const latCon = document.querySelector(".lat__con")
const lat = document.querySelector(".lat")
const long = document.querySelector(".long")
const reg = document.querySelector(".reg")
const localTime = document.querySelector(".local__time")
const latLongMarker = document.querySelector(".lat-long_mark")
const allTemprature = document.querySelector(".all__temprature")
const mainTemprature = document.querySelector(".main__temprature")
const inCelsus = document.querySelector(".in__celsus")
const inKalvin = document.querySelector(".in__kalvin")
const tempIn = document.querySelector(".temp__in")
const forecast = document.querySelector(".forecast")
const myChart = document.querySelector(".mychart")

function loadData() {

    fetch("https://api.weatherapi.com/v1/forecast.json?key=608a9b2ecb4d482ca4d191701212203&q=namangan&days=7&aqi=yes&alerts=yes")
        .then(weatherInfo => weatherInfo.json())
        .then(result => allData(result))
        .catch(error => console.log(error));

}
function allData(result) {
    generalLocation.innerHTML = `${result.location.name}, ${result.location.country}`
    const ctx = document.querySelector("#myChart").getContext("2d")
    let myChart = new Chart(ctx,{
        type: "line",
        data:{
            

        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // localTime.innerHTML = `${result.location.localtime}`
    // const img = document.createElement('img')
    // img.setAttribute('src', result.current.condition.icon)
    // allTemprature.appendChild(img)
    // img.className = 'picture'
    // weatherLocation.innerHTML = `${result.location.name}`
    // lat.innerHTML = `${result.location.lat}`
    // long.innerHTML = `${result.location.lon}`
    // reg.innerHTML = `${result.location.name}`
    // inCelsus.innerHTML = `${result.current.temp_c}&#176C`
    // inKalvin.innerHTML = `${result.current.temp_f}&#176K `
    // localTime.style.color = "red"

    // result.forecast.forecastday.forEach(day => {
    //     const bosh = document.createElement("div")
    //     const h3 = document.createElement('h3')
    //     const h5 = document.createElement('h5')
    //     h5.innerHTML = `${day.astro.sunrise}  ${day.astro.sunset}`
    //     const img2 = document.createElement('img')
    //     img2.setAttribute('src', result.current.condition.icon)
    //     allTemprature.appendChild(img2)
    //     img2.className = 'picture'
    //     const img3 = document.createElement('img')
    //     img3.setAttribute('src', result.current.condition.icon)
    //     allTemprature.appendChild(img3)
    //     img3.className = 'picture'
    //     img2.style.width= '20%'
    //     img2.style.height= 'auto'
    //     img3.style.width= '20%'
    //     img3.style.height= 'auto'
    //     h3.innerHTML = `${day.date}`
    //     bosh.appendChild(h3)
    //     bosh.appendChild(h5)
    //     bosh.appendChild(img2)
    //     bosh.appendChild(img3)
    //     h5.className = 'head5'
    //     bosh.className = 'head';
    //     forecast.appendChild(bosh)
    //     bosh.style.width = '300px'
    //     bosh.style.height = '400px'
    //     bosh.style.textAlign = 'center'
    //     bosh.style.backgroundColor = 'green'
    //     bosh.style.alignItems = 'center'

    // })

    // console.log(result)
}