'use strict';

const secondsHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutes = now.getMinutes();
  const minutesDegress = (minutes / 60) * 360 + 90;
  const hours = now.getHours();
  const hoursDegress = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegress}deg)`;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
