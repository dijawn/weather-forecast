import { getAstronomy, getWeather, getForecast } from ".";

export default function setConditionIcon(conditionCode) {
  try {
    let icon;
    if (conditionCode == "1000") {
      icon = "sunny";
      return icon;
      console.log("Sunny");
    } else if (conditionCode == "1003") {
      icon = "partly_cloudy_day";
      return icon;
      console.log("Partly Cloudy");
    } else if (conditionCode == "1009" || conditionCode == "1006") {
      icon = "cloud";
      return icon;
      console.log("Cloudy & Overcast");
    } else if (
      conditionCode == "1030" ||
      conditionCode == "1135" ||
      conditionCode == "1147"
    ) {
      icon = "foggy";
      return icon;
      console.log("Mist & Fog");
    } else if (
      conditionCode == "1150" ||
      conditionCode == "1063" ||
      conditionCode == "1153" ||
      conditionCode == "1168" ||
      conditionCode == "1180" ||
      conditionCode == "1183" ||
      conditionCode == "1186" ||
      conditionCode == "1240"
    ) {
      icon = "rainy";
      return icon;
      console.log("Light Rain");
    } else if (conditionCode == "1189" || conditionCode == "1243") {
      icon = "rainy";
      return icon;
      console.log("Rain");
    } else if (
      conditionCode == "1192" ||
      conditionCode == "1195" ||
      conditionCode == "1246"
    ) {
      icon = "rainy";
      return icon;
      console.log("Heavy Rain");
    } else if (
      conditionCode == "1069" ||
      conditionCode == "1072" ||
      conditionCode == "1198" ||
      conditionCode == "1204" ||
      conditionCode == "1237" ||
      conditionCode == "1249" ||
      conditionCode == "1261"
    ) {
      icon = "weather_hail";
      return icon;
      console.log("Light Freezing Precipitation");
    } else if (
      conditionCode == "1171" ||
      conditionCode == "1201" ||
      conditionCode == "1207" ||
      conditionCode == "1252" ||
      conditionCode == "1264"
    ) {
      icon = "weather_mix";
      return icon;
      console.log("Freezing Precipitation");
    } else if (
      conditionCode == "1066" ||
      conditionCode == "1210" ||
      conditionCode == "1213" ||
      conditionCode == "1216" ||
      conditionCode == "1255"
    ) {
      icon = "cloudy_snowing";
      return icon;
      console.log("Light Snow");
    } else if (
      conditionCode == "1087" ||
      conditionCode == "1273" ||
      conditionCode == "1276"
    ) {
      icon = "thunderstorm";
      return icon;
      console.log("Thunder");
    } else if (
      conditionCode == "1114" ||
      conditionCode == "1117" ||
      conditionCode == "1219" ||
      conditionCode == "1222" ||
      conditionCode == "1225" ||
      conditionCode == "1258"
    ) {
      icon = "ac_unit";
      return icon;
      console.log("Heavy Snow");
    } else if (conditionCode == "1279" || conditionCode == "1282") {
      icon = "bolt" + "ac_unit";
      return icon;
      console.log("Thunder Snow");
    }
  } catch (err) {
    console.log("err");
  }
}
