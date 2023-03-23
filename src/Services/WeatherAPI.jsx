import { DateTime } from "luxon";

const API_KEY = "e5f185aedb3d94dba0849f799b103e07";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/forecast?q=london&cnt=5&appid=e5f185aedb3d94dba0849f799b103e07

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return await fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main, description, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    main,
    description,
    icon,
    speed,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

const getForecastData = async (searchParams) => {
  const forecastData = await getWeatherData("forecast", searchParams);
  const { list } = forecastData;
  let forecast = list.map((x) => x.weather[0].main);
  let obj = {};
  obj["weather"] = forecast;
  let temperature = list.map((x) => x.main.temp);
  obj["temperature"] = temperature;
  let humidity = list.map((x) => x.main.humidity);
  obj["humidity"] = humidity;
  return obj;
};

export { getFormattedWeatherData, getForecastData, formatCurrentWeather };
