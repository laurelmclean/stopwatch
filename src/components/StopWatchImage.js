import React from "react";

export default function StopWatchImage() {
  return (
    <section>
      <img
        id="stopwatch-image"
        src={`${process.env.PUBLIC_URL}/images/stopwatch.jpeg`}
        alt="stopwatch icon"
      />
    </section>
  );
}
