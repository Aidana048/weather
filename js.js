let btn = document.querySelector('button')
let input = document.querySelector('input')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let desc = document.querySelector('.desc')
let weather = document.querySelector('.weather')



btn.addEventListener('click',(e)=>{
    e.preventDefault()
    weather.innerHTML=''
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5867d88ceb8b86174a687db068ee442a`)
    .then((res)=>res.json())
    .then((data)=>{
       
        let back=data.weather[0].icon.slice(2)
        if(back==='n'){
            weather.style.background="url('https://c8.alamy.com/comp/2B23YW6/gorgeous-cloudscape-in-springtime-weather-background-with-dynamic-cloud-arrangement-on-a-blue-sky-sunny-and-windy-day-good-weather-forecast-concept-2B23YW6.jpg')center/cover"
        }
        else{
            weather.style.background="url('https://www.farmersalmanac.com/wp-content/uploads/2021/10/astronomy-as463981838-945x630.jpeg')center/cover"
        }
        // const sunriseTimestamp=data.sys.sunrise;
        // const sunriseSeconds=sunriseTimestamp % 60
        // const sunriseMinuts=Math.floor((sunriseTimestamp/60)%60)
        // const sunriseHours=Math.floor((sunriseTimestamp/3600)%24)


        // let GTM=data.timzone
        // let sunriseHoursGTM=(sunriseHours+GTM)%24
        // if(sunriseHoursGTM<0){
        //     sunriseHoursGTM+=24;
        // }
        // if(sunriseHoursGTM<10){
        //     sunriseHoursGTM`0${sunriseHoursGTM}`
        // }
        // let sunriseTimest=`${sunriseHoursGTM}${sunriseMinuts}`

        // const sunsetTimesTamp=data.sys.sunset;
        // const sunsetDate=new Date(sunsetTimesTamp *1000)
        // const sunsetHours=sunsetDate.getHours()
        // const sunsetMinutes=sunsetDate.getMinutes()
        // const sunsetSeconds=sunsetDate.getSeconds()
        // let sunsetHoursStr=sunsetHours<10?`0${sunsetHours}`:`${sunsetHours}`
        // let sunsetMinutesStr=sunsetMinutes<10?`0${sunsetMinutes}`:`${sunsetMinutes}`
        // let sunsetTime=`${sunsetHoursStr}${sunsetMinutesStr}`
        // console.log(sunsetTime);

        


        weather.innerHTML = `
        <div class="weather__top">
        <div class="weather__left">
            <h3>Current</h3>
            <h3 class="city">${data.name}</h3>
        </div>
        <h2 class="temp">${Math.round(data.main.temp - 273.15)} C</h2>
    </div>
    <h1 class="desc">${data.weather[0].description}</h1>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <div class="weather__bottom">
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
        <div class="weather__card">
            <p>Wind:${data.wind.speed}</p>
            <p>mph E</p>
        </div>
        <div class="weather__card">
            <p>High:</p>
            <p>Low:</p>
        </div>
    </div>
        `

    })
})
