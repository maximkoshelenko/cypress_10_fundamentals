import React, { useState, useEffect } from "react";
import { useSudokuContext } from "../context/SudokuContext";
import moment from "moment";

export const formatTime = (
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0
) => {
  let stringTimer = "";

  stringTimer += hours ? "" + hours + ":" : "";
  stringTimer += minutes ? (minutes < 10 ? "0" : "") + minutes + ":" : "00:";
  stringTimer += seconds < 10 ? "0" + seconds : seconds;

  return stringTimer;
};

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every minute.
 */
export const Timer = () => {
  let [currentTime, setCurrentTime] = useState(moment());
  let { timeGameStarted, won } = useSudokuContext();

  useEffect(() => {
    if (!won) setTimeout(() => tick(), 1000);
  });

  function tick() {
    setCurrentTime(moment());
  }

  function getTimer() {
    let secondsTotal = currentTime.diff(timeGameStarted, "seconds");
    if (secondsTotal <= 0) return "00:00";
    let duration = moment.duration(secondsTotal, "seconds");
    let hours = duration.hours();
    let minutes = duration.minutes();
    let seconds = duration.seconds();

    const timerStringForReturn = formatTime(hours, minutes, seconds);

    return timerStringForReturn;
  }

  return <div className="status__time">{getTimer()}</div>;
};
