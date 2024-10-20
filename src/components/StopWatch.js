import React, { useEffect, useState } from "react";
import Lap from "./Lap";
import '../App.css';

export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [lapArray, setLapArray] = useState([]);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running && interval !== null) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  function formatTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = (time % 60000) / 1000;
    return `${minutes}:${("0" + seconds).slice(-2)}`;
  }

  return (
    <section>
      <div id="timer">{formatTime(timer)}</div>
      <div id="buttons">
        {!running ? (
          <button
            className="button"
            type="button"
            id="start"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
        ) : (
          <button
            className="button"
            type="button"
            id="lap"
            onClick={() => setLapArray([...lapArray, formatTime(timer)])}
          >
            Lap
          </button>
        )}
        <button
          className="button"
          type="button"
          id="stop"
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button
          className="button"
          type="button"
          id="reset"
          onClick={() => {
            setTimer(0);
            setRunning(false);
            setLapArray([]);
          }}
        >
          Reset
        </button>
      </div>
      <Lap times={lapArray}></Lap>
    </section>
  );
}
