import React, { useRef, useState} from "react";


//과연 여기서 var를 쓰는게 맞을까?? setInterval 쓰면서 잘 생각해봐
//여기다가 useRef랑 setInterval 쓰는거야
const useClock = () => {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millisecond = date.getMilliseconds();
  var saw = `${hour} : ${minute} : ${second} (${millisecond})`;

  return {saw}
}

export default useClock;