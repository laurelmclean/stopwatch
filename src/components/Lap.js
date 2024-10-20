import React from "react";
import '../App.css';

export default function Lap(props) {
  const { times } = props;

  return (
    <div id="laps">
      {times.map((lapTime, index) => (
        <h2 key={index}>
          Lap {index + 1}: {lapTime}
        </h2>
      ))}
    </div>
  );
}
