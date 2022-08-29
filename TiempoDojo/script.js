function city_alert(){
    alert("Loading weather report...");
}
function diss_button(){
    var sacar = document.querySelector("div.cookie_time");
    sacar.remove();
}
// convertir a °F
// Esta funcion convierte la temperatura 
// descrita en cada label a celsius cuando
// se encuentra en farenheit (0°C son 32°F)
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}
// Esta funcion convierte la temperatura 
// descrita en cada label a farenheit cuando
// se encuentra en celsius
function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        // toma cada valor de temperatura y le asigna el numero
        // correspondiente al indice
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}