let getWeather = async function (cities, infoType = "all") {
  // normalize cities input to array
  let cityArray = Array.isArray(cities) ? cities : [cities];

  // fetch data for each city
  for (let city of cityArray) {
    let url = `http://localhost:3000/weather?city=${city}`;

    if (infoType && infoType !== "all") {
      url += `&info=${infoType}`;
    }

    try {
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();

      if (!data.city) {
        throw new Error("Invalid response data");
      }

      console.log(`CITY: ${data.city}`);

      if (data.weather) {
        // display wind if present
        if (data.weather.wind) {
          console.log(
            `WIND: ${data.weather.wind.speed} m/s, ${data.weather.wind.deg} deg`,
          );
          if (data.weather.wind.speed > 15) {
            console.log("WARNING! Wind speed over 15 m/s");
          }
        }

        // display clouds if present
        if (data.weather.clouds !== undefined) {
          console.log(`CLOUDS: ${data.weather.clouds} %`);
        }

        // display temp if present
        if (data.weather.temp !== undefined) {
          console.log(`TEMP: ${data.weather.temp} C`);
          if (data.weather.temp < -20) {
            console.log("WARNING! Temperature below -20 degrees");
          }
        }

        // display precipitation if present
        if (data.weather.precipitation !== undefined) {
          console.log(`PRECIPITATION: ${data.weather.precipitation} %`);
        }
      }

      console.log("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
};

//! TEST CASES, DO NOT MODIFY
let weather1 = getWeather("Berlin", "wind");
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(["Oslo", "Yakutsk"], "all");
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %
