import { getAstronomy, getWeather, getForecast } from ".";
import backgroundRender from "./background";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import setConditionIcon from "./condition";

export default async function UI() {
  try {
    backgroundRender();
    setConditionIcon();

    const weatherData = await getWeather();
    const astronomyData = await getAstronomy();
    const forecastData = await getForecast();

    const currentWeatherLeft = document.querySelector(".current-weather-left");
    const currentWeatherRight = document.querySelector(
      ".current-weather-right"
    );
    const futureWeather = document.querySelector(".future-weather");

    if (currentWeatherLeft.hasChildNodes()) {
      currentWeatherLeft.innerHTML = "";
      currentWeatherRight.innerHTML = "";
      futureWeather.innerHTML = "";
    }

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");
    const locationName = document.createElement("h1");
    locationName.textContent = `${weatherData.location.city}`.toUpperCase();
    const locationCondition = document.createElement("small");
    locationCondition.textContent = `${weatherData.current.condition}`;

    const tempAndHumidityContainer = document.createElement("div");
    tempAndHumidityContainer.classList.add("temp-and-humidity");
    const currentTemp = document.createElement("span");
    currentTemp.textContent = Math.floor(`${weatherData.current.temp_f}`) + "°";
    currentTemp.classList.add("current-temp");

    const tempAndHumidityContainerRight = document.createElement("div");
    tempAndHumidityContainerRight.classList.add("right");
    const humidity = document.createElement("span");
    humidity.classList.add("humidity");
    humidity.textContent = `Humidity: ${weatherData.current.humidity}` + "%";
    const wind = document.createElement("span");
    wind.classList.add("wind-data");
    wind.textContent =
      `Wind: ${weatherData.current.wind_mph} ` +
      " MPH " +
      `${weatherData.current.wind_dir}`;
    const feelsLike = document.createElement("span");
    feelsLike.classList.add("feels-like");
    feelsLike.textContent = `Feels Like: ${weatherData.current.feelslike_f}`;

    locationContainer.appendChild(locationName);
    locationContainer.appendChild(locationCondition);

    tempAndHumidityContainer.appendChild(currentTemp);
    tempAndHumidityContainerRight.appendChild(feelsLike);
    tempAndHumidityContainerRight.appendChild(wind);
    tempAndHumidityContainerRight.appendChild(humidity);
    tempAndHumidityContainer.appendChild(tempAndHumidityContainerRight);

    currentWeatherLeft.appendChild(locationContainer);
    currentWeatherLeft.appendChild(tempAndHumidityContainer);

    const rainIcon = document.createElement("span");
    rainIcon.classList.add("material-symbols-outlined");
    rainIcon.classList.add("rain-chance-icon");
    rainIcon.textContent = "rainy";
    const rainChance = document.createElement("span");
    rainChance.classList.add("rain-chance");
    rainChance.textContent = `Chance of Rain: ${forecastData.day_today.rain_forecast}%`;

    const uvIcon = document.createElement("span");
    uvIcon.classList.add("material-symbols-outlined");
    uvIcon.classList.add("uv-index-icon");
    uvIcon.textContent = "beach_access";
    const uvIndex = document.createElement("span");
    uvIndex.classList.add("uv-index");
    uvIndex.textContent = `UV Index: ${weatherData.current.uv_index}`;

    const precipIcon = document.createElement("span");
    precipIcon.classList.add("material-symbols-outlined");
    precipIcon.classList.add("precip-icon");
    precipIcon.textContent = "water_drop";
    const precipInches = document.createElement("span");
    precipInches.classList.add("precip-in");
    precipInches.textContent = `Daily Precipitation: ${weatherData.current.precip_in}`;

    const visibilityIcon = document.createElement("span");
    visibilityIcon.classList.add("material-symbols-outlined");
    visibilityIcon.classList.add("vis-miles-icon");
    visibilityIcon.textContent = "visibility";
    const visibilityMiles = document.createElement("span");
    visibilityMiles.classList.add("vis-miles");
    visibilityMiles.textContent = `Visibility (Miles): ${weatherData.current.vis_miles}`;

    const sunriseIcon = document.createElement("span");
    sunriseIcon.classList.add("material-symbols-outlined");
    sunriseIcon.classList.add("sunrise-icon");
    sunriseIcon.textContent = "sunny";
    const sunrise = document.createElement("span");
    sunrise.classList.add("sunrise-data");
    sunrise.textContent = `Sunrise: ${astronomyData.sunrise}`;

    const sunsetIcon = document.createElement("span");
    sunsetIcon.classList.add("material-symbols-outlined");
    sunsetIcon.classList.add("sunset-icon");
    sunsetIcon.textContent = "wb_twilight";
    const sunset = document.createElement("span");
    sunset.classList.add("sunset-data");
    sunset.textContent = `Sunset: ${astronomyData.sunset}`;

    currentWeatherRight.appendChild(rainIcon);
    currentWeatherRight.appendChild(rainChance);
    currentWeatherRight.appendChild(uvIcon);
    currentWeatherRight.appendChild(uvIndex);
    currentWeatherRight.appendChild(precipIcon);
    currentWeatherRight.appendChild(precipInches);
    currentWeatherRight.appendChild(visibilityIcon);
    currentWeatherRight.appendChild(visibilityMiles);
    currentWeatherRight.appendChild(sunriseIcon);
    currentWeatherRight.appendChild(sunrise);
    currentWeatherRight.appendChild(sunsetIcon);
    currentWeatherRight.appendChild(sunset);

    const dayOneContainer = document.createElement("div");
    dayOneContainer.classList.add("day-one");
    const dayOneWeekday = document.createElement("span");
    dayOneWeekday.classList.add("day-of-week");
    const formatteddayOneWeekday = format(
      parseISO(forecastData.day_one.date),
      "eeee"
    );
    dayOneWeekday.textContent = `${formatteddayOneWeekday}`;
    const dayOneIcon = document.createElement("span");
    dayOneIcon.classList.add("weather-icon");
    dayOneIcon.classList.add("material-symbols-outlined");
    const dayOneCode = forecastData.day_one.condition_code;
    dayOneIcon.textContent = setConditionIcon(dayOneCode);
    const dayOneHiTempF = document.createElement("span");
    dayOneHiTempF.classList.add("hi-temp-f");
    dayOneHiTempF.textContent = `H: ${forecastData.day_one.hi_temp_f}`;
    const dayOneLoTempF = document.createElement("span");
    dayOneLoTempF.classList.add("lo-temp-f");
    dayOneLoTempF.textContent = `L: ${forecastData.day_one.lo_temp_f}`;

    const dayTwoContainer = document.createElement("div");
    const dayTwoWeekday = document.createElement("span");
    dayTwoWeekday.classList.add("day-of-week");
    const formatteddayTwoWeekday = format(
      parseISO(forecastData.day_two.date),
      "eeee"
    );
    dayTwoWeekday.textContent = `${formatteddayTwoWeekday}`;
    const dayTwoIcon = document.createElement("span");
    dayTwoIcon.classList.add("material-symbols-outlined");
    dayTwoIcon.classList.add("weather-icon");
    const dayTwoCode = forecastData.day_two.condition_code;
    dayTwoIcon.textContent = setConditionIcon(dayTwoCode);
    const dayTwoHiTempF = document.createElement("span");
    dayTwoHiTempF.classList.add("hi-temp-f");
    dayTwoHiTempF.textContent = `H: ${forecastData.day_two.hi_temp_f}`;
    const dayTwoLoTempF = document.createElement("span");
    dayTwoLoTempF.classList.add("lo-temp-f");
    dayTwoLoTempF.textContent = `L: ${forecastData.day_two.lo_temp_f}`;

    const dayThreeContainer = document.createElement("div");
    const dayThreeWeekday = document.createElement("span");
    dayThreeWeekday.classList.add("day-of-week");
    const formatteddayThreeWeekday = format(
      parseISO(forecastData.day_three.date),
      "eeee"
    );
    dayThreeWeekday.textContent = `${formatteddayThreeWeekday}`;
    const dayThreeIcon = document.createElement("span");
    dayThreeIcon.classList.add("weather-icon");
    dayThreeIcon.classList.add("material-symbols-outlined");
    const dayThreeCode = forecastData.day_three.condition_code;
    dayThreeIcon.textContent = setConditionIcon(dayThreeCode);
    const dayThreeHiTempF = document.createElement("span");
    dayThreeHiTempF.classList.add("hi-temp-f");
    dayThreeHiTempF.textContent = `H: ${forecastData.day_three.hi_temp_f}`;
    const dayThreeLoTempF = document.createElement("span");
    dayThreeLoTempF.classList.add("lo-temp-f");
    dayThreeLoTempF.textContent = `L: ${forecastData.day_three.lo_temp_f}`;

    dayOneContainer.appendChild(dayOneWeekday);
    dayOneContainer.appendChild(dayOneIcon);
    dayOneContainer.appendChild(dayOneHiTempF);
    dayOneContainer.appendChild(dayOneLoTempF);

    dayTwoContainer.appendChild(dayTwoWeekday);
    dayTwoContainer.appendChild(dayTwoIcon);
    dayTwoContainer.appendChild(dayTwoHiTempF);
    dayTwoContainer.appendChild(dayTwoLoTempF);

    dayThreeContainer.appendChild(dayThreeWeekday);
    dayThreeContainer.appendChild(dayThreeIcon);
    dayThreeContainer.appendChild(dayThreeHiTempF);
    dayThreeContainer.appendChild(dayThreeLoTempF);

    futureWeather.appendChild(dayOneContainer);
    futureWeather.appendChild(dayTwoContainer);
    futureWeather.appendChild(dayThreeContainer);
  } catch (err) {
    console.log(err);
  }
}
