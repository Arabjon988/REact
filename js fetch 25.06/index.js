const result =document.querySelector('.result')

fetch('https://api.spacexdata.com/v3/launches/latest?pretty=true')
    .then(spaceXdata => spaceXdata.json())
    .then(data => takeData(data))
    .catch(error => console.log('error'))

function takeData(spaceXdata){
    // console.log(spaceXdata)
    const p = document.createElement('p')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    p.innerHTML= spaceXdata.flight_number
    li.innerHTML= spaceXdata.mission_name
    li2.innerHTML= spaceXdata.launch_date_utc
    li3.innerHTML= spaceXdata.launch_year
    result.appendChild(p)
    result.appendChild(ul)
    ul.appendChild(li)
    ul.appendChild(li2)
    ul.appendChild(li3)
    console.log(spaceXdata)
}