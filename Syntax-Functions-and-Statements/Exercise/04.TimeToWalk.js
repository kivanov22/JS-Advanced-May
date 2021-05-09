function solve(steps,footprint,speedKm){
const speed = speedKm * 1000/3600;
const distance = steps * footprint;

const rest = Math.floor(distance/500)*60;
const time = distance/speed+rest;

const hours = Math.floor(time/60/60).toFixed(0).padStart(2,"0");
const minutes = Math.floor(time/60).toFixed(0).padStart(2,"0");
const seconds = Math.floor(time%60).toFixed(0).padStart(2,"0");

return `${hours}:${minutes}:${seconds}`
}
console.log(solve(4000,0.60,5))