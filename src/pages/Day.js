import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
} from "@material-ui/core";
import dayjs from "dayjs";
import WeatherCardSubheader from "../components/WeatherCardSubheader";
import { useStyles } from "../styles"
import * as weatherIcons from "../icons";
import { buildDescription } from "../utils";

const Day = (props) => {
    const classes = useStyles();
    const strongWind = "wi wi-strong-wind";
    const { day } = useParams();
    const { currentWeather, forecast } = props;
    const date = forecast.find(currentDay => {
        const currDate = dayjs(dayjs().isValid(currentDay.date) ? currentDay.date : "").format("dddd")
        return day.toLowerCase() === currDate.toLowerCase()
    })

    if (!date) return null

    const description = buildDescription(date.description || "")
    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[date.icon_id].icon;

    return <Card>
        <CardHeader
            title={currentWeather.city + ", " + currentWeather.country}
            subheader={<WeatherCardSubheader date={date?.date} showTime={false} />}
        />
        <CardContent>
            <Typography
                variant="h2"
                className="big-temp"
                color="textPrimary"
                component="h2"
                style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
            >
                {Math.round(date.temperature)}&deg;C
        </Typography>

            <Typography
                variant="subtitle2"
                className="atmospheric-conditions"
                color="textSecondary"
                gutterBottom
                style={{ paddingTop: "40px" }}
            >
                <span
                    className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
                ></span>
                {date.wind_speed} km/h Winds{" "}


                <span
                    className={`${classes.wi} ${icon}`}
                    style={{ fontSize: "24px", margin: "10px" }}
                ></span>
                {description}
            </Typography>

        </CardContent>
    </Card>
}

export default Day