function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
} 
//Mueve el horario
function getHourHandAngle(s) {
    s %= 43200; // seconds in 12 hours
    return ((360 * s / 43200) + 180) % 360;
}
//mueve el minutero
function getMinuteHandAngle(s) {
s %= 3600; // seconds in an hour
return ((6 * s / 60) + 180) % 360;
}
//mueve el segundero
function getSecondHandAngle(s) {
s %= 60; // seconds in a minute
return ((6 * s) + 180) % 360;
}
//toma los elementos desde el html y los guarda en variables
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//le asigna a las variabes las funciones para moverse.
setInterval( () => {
    let s = getSecondsSinceStartOfDay();
    hour.style.transform = `rotate(${getHourHandAngle(s)}deg)`;
    minutes.style.transform = `rotate(${getMinuteHandAngle(s)}deg)`;
    seconds.style.transform = `rotate(${getSecondHandAngle(s)}deg)`;
}, 1000);