import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CurrentWeather from "./CurrentDay";
import { getForecastData, getFormattedWeatherData } from "Services/WeatherAPI";
import Card from "./muicard";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

function SearchBox() {
  const fetchWeather = async (loc) => {
    const data = await getFormattedWeatherData({
      q: loc,
      units: "metric",
    });
    return data;
  };

  const fetchforecastWeather = async (loc) => {
    const data = await getForecastData({
      q: loc,
      cnt: "5",
      units: "metric",
    });
    return data;
  };
  const [temp, setTemp] = useState("");
  const [info, setInfo] = useState({});
  const [forecast, setForecast] = useState([]);

  function handleClick() {
    setTemp("");
    fetchWeather(temp).then((res) => setInfo(res));
    fetchforecastWeather(temp).then((res) => {
      let obj = [];
      for (let i = 0; i < 5; i++) {
        let temperoary = {
          weather: res.weather[i],
          humidity: res.humidity[i],
          temperature: res.temperature[i],
        };
        obj.push(temperoary);
      }
      setForecast(obj);
    });
  }

  const handleChange = (event) => {
    setTemp(event.target.value);
  };

  function createCard(options) {
    return (
      <Card
        weather={options.weather}
        humidity={options.humidity}
        temperature={options.temperature}
      />
    );
  }

  return (
    <div style={{ marginTop: "5rem" }}>
      <TextField
        id="standard-basic"
        onChange={handleChange}
        variant="standard"
        value={temp}
      />
      <Button onClick={handleClick} variant>
        Submit
      </Button>
      <CurrentWeather
        weather={info.main}
        humidity={info.humidity}
        feels_like={info.feels_like}
        name={info.name}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        minWidth="150px"
        marginTop="8rem"
      >
        <Stack direction="row" spacing={2}>
          {forecast.map(createCard)}
        </Stack>
      </Box>
    </div>
  );
}

export { SearchBox };
