import "./style.css";
import UI from "./UI";

function getLocation() {
  let location;
  const inputField = document.querySelector("#weather-search");
  location = inputField.value;
  return location;
}

export async function getWeather() {
  try {
    const location = getLocation();
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=08504433308d4fa184f144145232909&q=${location}`
    );
    const weatherReport = await response.json();
    const weatherObj = {
      location: {
        city: weatherReport.location.name,
        state: weatherReport.location.region,
        time: weatherReport.location.localtime,
        country: weatherReport.location.country,
        latitude: weatherReport.location.lat,
      },
      current_weather: {
        cloud_cover: weatherReport.current.cloud,
        condition: weatherReport.current.condition.text,
        feelslike_c: weatherReport.current.feelslike_c,
        feelslike_f: weatherReport.current.feelslike_f,
        windgust_kph: weatherReport.current.gust_kph,
        windgust_mph: weatherReport.current.gust_mph,
        humidity: weatherReport.current.humidity,
        precip_in: weatherReport.current.precip_in,
        precip_mm: weatherReport.current.precip_mm,
        uv_index: weatherReport.current.uv,
        vis_km: weatherReport.current.vis_km,
        vis_miles: weatherReport.current.vis_miles,
        wind_dir: weatherReport.current.wind_dir,
        wind_kph: weatherReport.current.wind_kph,
        wind_mph: weatherReport.current.wind_mph,
      },
    };
    console.log(weatherObj);
  } catch (err) {
    console.log(err);
  }
}

const searchForm = document.querySelector(".weather-search");
// searchForm.onsubmit = getWeather;
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});
