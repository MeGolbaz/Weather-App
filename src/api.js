const API_URL = 'https://api.openweathermap.org/data/2.5'

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: Location " + (response.statusText).toLowerCase());
    }
}

export function getWeather(city) {
    return fetch(
        `${API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
        .then(res => handleResponse(res))
        .then(weather => {
            if (Object.entries(weather).length) {
                const mappedData = mapDataToWeatherInterface(weather);
                return mappedData;
            }
        });
}

export function getForecast(city) {
    return fetch(
        `${API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
        .then(res => handleResponse(res))
        .then(result => {
            if (Object.entries(result).length) {
                const forecast = [];
                for (let i = 0; i < result.list.length; i += 8) {
                    forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
                }
                return forecast;
            }
        });
}

function mapDataToWeatherInterface(data) {
    const mapped = {
        city: data.name,
        country: data.sys.country,
        date: data.dt * 1000,
        icon_id: data.weather[0].id,
        temperature: data.main.temp,
        description: data.weather[0].description,
        wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
        condition: data.cod
    };

    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
        mapped.dt_txt = data.dt_txt;
    }

    if (data.weather[0].icon) {
        mapped.icon = data.weather[0].icon;
    }

    if (data.main.temp) {
        mapped.temp = data.main.temp;
    }

    // remove undefined fields
    Object.keys(mapped).forEach(
        key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
}