//https://api.openweathermap.org/data/2.5/weather?q=baguio&appid=7174116bd9b1b14367d25bedda042162&units=metric

// const apiKey = "7174116bd9b1b14367d25bedda042162";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=baguio";

async function checkWeather(){
    // const response = await fetch(apiUrl + `appid=${apiKey}` );
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=baguio&appid=7174116bd9b1b14367d25bedda042162&units=metric")
    var data = await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();