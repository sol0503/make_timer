import { useEffect, useState } from "react";

const Clock = () => {
  // var clockTarget = document.getElementById("clock");
  const [time, setTime] = useState(new Date());
  // useEffect(() => {
  //   <h1>{saw}</h1>;
  // }, [time]);
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millisecond = date.getMilliseconds();
  var saw = `${hour} : ${minute} : ${second} (${millisecond})`;
  // clockTarget.innerText = `${hour} ${minute} ${second} ${millisecond}`;
  return <>{saw}</>;
};
export default Clock;
