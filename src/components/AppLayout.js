import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

import Forecast from "./Forecast";
import WeatherCardSubheader from "./WeatherCardSubheader";
import { buildDescription } from "../utils";

const useStyles = makeStyles(theme => ({
  atmospheric: {
    fontSize: "30px",
    padding: "7px"
  },
  buttons: {
    color: "f05515"
  },
  card: {
    minWidth: 600,
    minHeight: 600
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  error: {
    color: "f05515",
    padding: "10px"
  },
  fullList: {
    width: "auto"
  },
  layout: {
    marginTop: "20px"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center"
  },
  root: {
    flexiGrow: 1,
    color: "black"
  },
  search: {
    marginTop: "100px"
  },
  wi: {
    color: "#f05515"
  }
}));

export default function AppLayout(props) {
  const classes = useStyles();
  const { currentWeather, forecast, icon } = props;

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
          />
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
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
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