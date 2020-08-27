import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Weather from "../components/Weather";
import { getForecast, getWeather } from '../api'

const Home = () => {
    const [city, setCity] = useState("Salzburg");
    const [error, setError] = useState(null);
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        getWeather(city)
            .then(weather => {
                setCurrentWeather(weather);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [city, error]);

    useEffect(() => {
        getForecast(city)
            .then(data => {
                setForecast(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [city, error]);

    const handleCityChange = city => {
        setCity(city);
    };
    if (
        (currentWeather && Object.keys(currentWeather).length) ||
        (forecast && Object.keys(forecast).length)
    ) {
        return (
            <Container >
                <Weather
                    city={city}
                    currentWeather={currentWeather}
                    forecast={forecast}
                    onCityChange={handleCityChange}
                    error={error}
                />
            </Container>
        )
    } else {
        return (
            <div>
                <CircularProgress color={error ? "secondary" : "primary"} />
                {error ? <p>{error}</p> : ""}
            </div>
        );
    }
}

export default Home