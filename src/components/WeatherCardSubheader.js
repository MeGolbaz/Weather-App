import React from "react";
import dayjs from "dayjs";

export default function WeatherCardSubHeader(props) {
  const { date: time, showTime = true } = props;
  const date = dayjs().isValid(time) ? time : "";

  return (
    <>
      <span>
        {dayjs(date).format("dddd")} {showTime ? `,${dayjs(date).format("h:mm")} ${dayjs(date).format("A")}` : ""}
      </span>
    </>
  );
}
