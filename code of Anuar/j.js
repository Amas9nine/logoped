let key = "be2add44b9e84a6fab6d1b743df5e24e"
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&units=metric&lang=ru&appid=${key}`

$listOfDays = document.querySelector(`.listOfDays`)
$temp = document.querySelector(`.temp`)
$weatherMainImage = document.querySelector(`.weatherMainImage`)
$today = document.querySelector(`.Today`)
$description = document.querySelector(`.description`)
$wind = document.querySelector(`.wind`)
$rain = document.querySelector(`.rain`)
$listofHours = document.querySelector(`.listofHours`)

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
     $temp.innerHTML = data.current.temp + "°"
     $weatherMainImage.insertAdjacentHTML(`afterbegin`,`
     <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">
     `)
     $today.innerHTML = `Сегодня,${new Date().toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`})}`
     $description.innerHTML = `${data.current.weather[0].description}`
     $wind.innerHTML = `<img src="../weatherImages/wind.png">   <p>Ветер</p> | <p>${data.current.wind_speed} km/h</p>`
     $rain.innerHTML = `<img src="../weatherImages/rain.png"    <p>Дождь</p> <p class="pRain">|</p> <p>${data.current.humidity} %</p>`

     ////second page
     data.hourly.forEach((element , i) => {
        $listofHours.insertAdjacentHTML(`beforeend`,`
        <div class="day">
            <p>${element.temp}° </p>
            <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            <p>${new Date().getHours()+i}.00</p>
        </div>`)

     });
     data.hourly.forEach((element , i) => {
        $listOfDays.insertAdjacentHTML(`beforeend`,`
        <div class="day2">
        <p class="left">Июнь , ${(new Date().getDate()+i)}</p>
            <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            <p>${element.temp}° </p>
            </div>`)
    })
     
    })


let $btn = document.querySelector('#push')
let $current = document.querySelector('.current')
let $week = document.querySelector('.week')
let $btn2 = document.querySelector('#back')
$btn.addEventListener('click', function(){
    $current.style.display = 'none'
    $week.style.display = 'block'
})  
$btn2.addEventListener('click', function(){
    $current.style.display = 'block'
    $week.style.display = 'none'
})

