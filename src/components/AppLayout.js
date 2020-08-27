import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

import Day from "../pages/Day"
import Forecast from "./Forecast";
import WeatherCardSubheader from "./WeatherCardSubheader";
import { buildDescription } from "../utils";

import { useStyles } from "../styles"

export default function AppLayout(props) {
  const classes = useStyles();
  const { currentWeather, forecast, icon } = props;

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Switch>
            <Route path="/:day" render={() =>
              <Day
                currentWeather={currentWeather}
                forecast={forecast}
              />

            } />
            <Route path="/" render={() =>
              <WeatherCard
                currentWeather={currentWeather}
                forecast={forecast}
                icon={icon}
              />
            } />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

const WeatherCard = props => {
  const classes = useStyles();
  const strongWind = "wi wi-strong-wind";
  const { currentWeather, forecast, icon } = props;
  const description = buildDescription(currentWeather.description || "")

  return (
    <Card className={classes.card}>
      <CardHeader
        title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader date={currentWeather.date} />}
      />
      <CardContent>
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {Math.round(currentWeather.temperature)}&deg;C
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
          {currentWeather.wind_speed} km/h Winds{" "}


          <span
            className={`${classes.wi} ${icon}`}
            style={{ fontSize: "24px", marginLeft: "10px" }}
          ></span>
          {description}
        </Typography>

        <Divider variant="middle" />
        <Forecast forecast={forecast} />
      </CardContent>
    </Card>
  );
};
