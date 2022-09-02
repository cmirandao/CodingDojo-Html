function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas){
    var pizza ={};
    pizza.tipoCorteza=tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.quesos=quesos;
    pizza.salsas=salsas;
    return pizza;
}
var newpizza=pizzaOven("estilo Chicago", "tradicional", ["mozzarella"] , ["pepperoni", "salchicha"]);
console.log(newpizza);
var newpizza2=pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(newpizza2);
var newpizza3=pizzaOven("a la piedra" , "alfredo" , ["parmesano", "mozzarella", "azul"], ["choclo", "tomate cherry", "carne mechada"]);
console.log(newpizza3);
var newpizza4=pizzaOven("orilla de queso" , "margarita" , ["mozzarella", "doble parmesano"], ["jamon", "piña", "pimenton"]);
console.log(newpizza4);