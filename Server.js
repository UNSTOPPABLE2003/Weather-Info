const express = require("express");
const app = express();
const port = 6000;

const weatherData = [
  { city: "Lagos", temperature: 30, condition: "Sunny" },
  { city: "Abuja", temperature: 27, condition: "Cloudy" },
  { city: "Kano", temperature: 33, condition: "Hot" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Weather Info API!");
});

app.get("/weather", (req, res) => {
  res.json(weatherData);
});

app.get("/weather/:city", (req, res) => {
  const city = req.params.city.toLowerCase();
  const info = weatherData.find(
    (item) => item.city.toLowerCase() === city
  );
  if (info) res.json(info);
  else res.status(404).json({ message: "City not found" });
});

app.listen(port, () => {
  console.log(`Weather API running on http://localhost:${port}`);
});
