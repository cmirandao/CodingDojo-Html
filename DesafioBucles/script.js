// imprimir impares 1-20
console.log("impares 1-20: ");
for (var i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
    }
}
// disminuir multiplos de 3, 100-0
console.log("disminuir multiplos de 3, 100-0: ");
for(var j=100;j>=0;j--){
    if(j%3==0){
        console.log(j);
    }
}
//Imprime la secuencia
console.log("Imprime la secuencia: ");
for(var a=4;a>=-4;a-=1.5){
    console.log(a);
}
// Sigma
console.log("Sigma: ");
var sum=0;
var bb="";
for(var b=0;b<=100;b++){
    if(b<100){
        bb=bb+b+"+";
    }else{
        bb=bb+b;
    }
    sum+=b;
}
console.log(bb);
console.log("Suma total: ",sum);
// Factorial
console.log("Factorial: ");
var product=1;
var prod="";
for(var c=1;c<=12;c++){
    if(c<12){
        prod=prod+c+"*";
    }else{
        prod=prod+c;
    }
    product*=c;
}
console.log(prod);
console.log("Producto total: ",product);