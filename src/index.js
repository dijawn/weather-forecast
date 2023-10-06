import "./style.css";
import UI from "./UI";
import pageLoad from "./page-load";

function getLocation() {
  let location;
  const inputField = document.querySelector("#weather-search");
  location = inputField.value;
  return location;
}

pageLoad();

export async function getAstronomy() {
  try {
    const location = getLocation();
    const response = await fetch(
      `https://api.weatherapi.com/v1/astronomy.json?key=08504433308d4fa184f144145232909&q=${location}`
    );
    const astronomyData = await response.json();
    const astronomyObj = {
      sunrise: astronomyData.astronomy.astro.sunrise,
      sunset: astronomyData.astronomy.astro.sunset,
    };
    console.log;
    return astronomyObj;
  } catch (err) {
    console.log(err);
  }
}

export async function getForecast() {
  try {
    const location = getLocation();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=08504433308d4fa184f144145232909&q=${location}&days=4`
    );
    const forecast = await response.json();
    const forecastObj = {
      day_today: {
        rain_forecast:
          forecast.forecast.forecastday[1].day.daily_chance_of_rain,
      },
      day_one: {
        date: forecast.forecast.forecastday[1].date,
        hi_temp_f: forecast.forecast.forecastday[1].day.maxtemp_f,
        lo_temp_f: forecast.forecast.forecastday[1].day.mintemp_f,
        condition_text: forecast.forecast.forecastday[1].day.condition.text,
        condition_code: forecast.forecast.forecastday[1].day.condition.code,
      },
      day_two: {
        date: forecast.forecast.forecastday[2].date,
        hi_temp_f: forecast.forecast.forecastday[2].day.maxtemp_f,
        lo_temp_f: forecast.forecast.forecastday[2].day.mintemp_f,
        condition: forecast.forecast.forecastday[2].day.condition.text,
        condition_code: forecast.forecast.forecastday[2].day.condition.code,
      },
      day_three: {
        date: forecast.forecast.forecastday[3].date,
        hi_temp_f: forecast.forecast.forecastday[3].day.maxtemp_f,
        lo_temp_f: forecast.forecast.forecastday[3].day.mintemp_f,
        condition: forecast.forecast.forecastday[3].day.condition.text,
        condition_code: forecast.forecast.forecastday[3].day.condition.code,
      },
    };
    return forecastObj;
  } catch (err) {
    console.log(err);
  }
}

export async function getWeather() {
  try {
    const location = getLocation();
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=08504433308d4fa184f144145232909&q=${location}`
    );
    const weatherReport = await response.json();
    const weatherObj = {
      location: {
        city: weatherReport.location.name,
        state: weatherReport.location.region,
        country: weatherReport.location.country,
        latitude: weatherReport.location.lat,
      },
      current: {
        time: weatherReport.current.last_updated,
        cloud_cover: weatherReport.current.cloud,
        temp_f: weatherReport.current.temp_f,
        temp_c: weatherReport.current.temp_c,
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
    return weatherObj;
  } catch (err) {
    console.log(err);
  }
}

const searchForm = document.querySelector(".weather-search");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getAstronomy();
    getWeather();
    UI();
  }
});

// searchForm.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     getAstronomy();
//     getWeather();
//     UI();
//   }
// });
