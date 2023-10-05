import { getAstronomy, getWeather } from ".";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import clearNight from "./images/clear-night.jpg";
import afternoon from "./images/afternoon.jpg";
import sunrise from "./images/sunrise.jpg";

export default async function backgroundRender() {
  try {
    const weatherData = await getWeather();
    const astronomyData = await getAstronomy();
    const body = document.querySelector("body");

    const formattedTime = format(parseISO(weatherData.current.time), "HH");

    if (formattedTime > 4 && formattedTime < 12) {
      console.log("Good morning, sunshine");
      body.style.backgroundImage = `url(${sunrise})`;
      body.style.backgroundSize = "cover";
    } else if (formattedTime >= 12 && formattedTime <= 18) {
      console.log("Good afternoon, bub");
      body.style.backgroundImage = `url(${afternoon})`;
      body.style.backgroundSize = "cover";
    } else if (formattedTime > 18 || formattedTime <= 5) {
      console.log("Good night, moon");
      body.style.backgroundImage = `url(${clearNight})`;
      body.style.backgroundSize = "cover";
    }
  } catch (err) {
    console.log(err);
  }
}
