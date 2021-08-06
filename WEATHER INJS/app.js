const api = {
    key: '2e89ba88c6e9af566298550e650c739f',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector(".search_box")
searchBox.addEventListener('keypress', setQuery)

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResult(searchBox.value)
    }
} 

function getResult (query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather=>{
        return weather.json()
    }).then(displayResult)
}

function displayResult(weather){
    // console.log(weather)
    let city = document.querySelector(" .city")
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    let now = new Data()
    let data = document.querySelector(' .data')
    data.innerHTML = dataBuilder(now)

    let temp = document.querySelector(".current .temp")
    temmp.innerHTML = `${Math.round(weather.main.temp)} <span>&#176C</span>`


    let weather_el =document.querySelector(".current .weather")

    weather_el.innerText= weather.weather[0].main

    let hiLow= document.querySelector(".hi_low")
    hiLow.innerText=`${Math.round(weather.main.temp.min)}&#176C / ${Math.round(weather.main.temp.max)}&#176C `

}

    function dataBuilder(d)
        {
            let months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
            let days = ["sunday", "monday", "tuesday", "wendesday", "thursday", "friday", "saturday"]
    
            let day = days [d.getday()]
            let data = d.getData()
            let month = months [d.getMonth()]
            let year = d.getFullYear()


            return `${day}  ${data}  ${month}   ${year}`
        }
    

