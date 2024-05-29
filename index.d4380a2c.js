function setFavoriteButtonState(e){var t=localStorage.getItem("favoriteCity"),n=document.getElementById("favoriteBtn");t===e?(n.innerText="Favorited",n.disabled=!0):(n.innerText="Favorite",n.disabled=!1)}function getSelectedUnit(){return document.querySelector('input[name="unit"]:checked').value}function fetchCurrentWeather(e){var t=getSelectedUnit(),n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("f1a7f601f87c9d97579ef8237cc83ff1","&units=").concat(t);fetch(n).then((function(e){return e.json()})).then((function(n){var a=n.weather[0].description,r=n.main.temp,c=n.weather[0].icon,o=new Date(1e3*n.sys.sunrise).toLocaleTimeString(),i=new Date(1e3*n.sys.sunset).toLocaleTimeString(),u="metric"===t?"°C":"°F",d='\n                <img src="https://openweathermap.org/img/wn/'.concat(c,'@2x.png" alt="Weather icon">\n                <p>Weather: ').concat(a,"</p>\n                <p>Temperature: ").concat(r).concat(u,"</p>\n                <p>Sunrise | ").concat(o,"</p>\n                <p>Sunset | ").concat(i,"</p>\n            ");document.getElementById("currentforecast").innerHTML=d,document.getElementById("cityName").innerText=e;var m=(new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"});document.getElementById("currentdate").innerText="Date: ".concat(m),setFavoriteButtonState(e)})).catch((function(e){console.error("Error fetching weather data:",e),document.getElementById("currentforecast").innerText="Error fetching weather data",document.getElementById("currentdate").innerText=""}))}document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("favoriteCity")||"Balanga";fetchCurrentWeather(e),setFavoriteButtonState(e)})),document.getElementById("searchForm").addEventListener("submit",(function(e){e.preventDefault(),fetchCurrentWeather(document.getElementById("cityInput").value)})),document.getElementById("favoriteBtn").addEventListener("click",(function(){var e=document.getElementById("cityName").innerText;localStorage.setItem("favoriteCity",e),alert("".concat(e," has been added to your favorites!")),setFavoriteButtonState(e)})),document.querySelectorAll('input[name="unit"]').forEach((function(e){e.addEventListener("change",(function(){fetchCurrentWeather(document.getElementById("cityInput").value||localStorage.getItem("favoriteCity")||"Balanga")}))}));
//# sourceMappingURL=index.d4380a2c.js.map
