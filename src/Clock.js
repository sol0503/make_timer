import React from "react";
import useClock from "./useClock";

const Clock = () => {
  const { saw }= useClock();

  return (
    <>
      <span>{saw}</span>
    </>
  );
};
export default Clock;
