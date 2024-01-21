//selector
const searchInput = document.getElementById("locationInput");
const Btn = document.getElementById("submitBtn");

const wetherImage = document.querySelector(".weather-image");
const weatherTem = document.querySelector(".weather-tem");
const countryName = document.querySelector(".weather-country-name");

const humidity = document.getElementById("humi");
const windSpeed = document.getElementById("win");


const getWeatherData = (e) =>{
    e.preventDefault();
    const location = searchInput.value;
    console.log(location.length);

   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=08c3dcab746be97008e104647a133b0b&units=metric`)
    .then(response => response.json())
    .then((data) => {

        weatherTem.innerHTML = `${Math.round(data.main.temp)}°C`;
        countryName.innerHTML = `${data.name},${data.sys.country}`;
        humidity.innerHTML = `${data.main.humidity}% Humidity`;
        windSpeed.innerHTML = `${data.wind.speed} km/h`;
        
        if (data.weather[0].main === "Clouds") {
            wetherImage.src = "images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            wetherImage.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            wetherImage.src = "images/rain.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            wetherImage.src = "images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            wetherImage.src = "images/mist.png";
        }
        else if (data.weather[0].main === "Haze") {
            wetherImage.src = "images/haza.png";
        }
        else{
            wetherImage.src = "images/clouds.png"
        }

    })
}




//add Event Listener
Btn.addEventListener("click",getWeatherData);
