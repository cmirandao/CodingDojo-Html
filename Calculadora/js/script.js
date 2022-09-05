var disnum = document.querySelector("div#display");
var num1 = 0;
var num2 = 0;
var ope = '';
var resultado = 0;
function press(num){
    if(disnum.textContent=='/' || disnum.textContent=='+' || disnum.textContent=='-' || disnum.textContent=='*'){
        disnum.textContent="";
    }
    if(disnum.textContent.length<10){
        if(disnum.textContent==0 && disnum.textContent.length==1){
            disnum.textContent = num;
        }else{
            disnum.textContent += num;
        }
    }
}
function clr(){
    disnum.textContent = 0;
}
function setOP(operador){
    num1=disnum.textContent;
    disnum.textContent=operador;
    ope = disnum.textContent;
}
function calculate(){
    num2 = disnum.textContent;
    if(ope=='+'){
        resultado = parseFloat(num1)+parseFloat(num2);
        disnum.textContent=resultado;
    }
    if(ope=='-'){
        resultado = parseFloat(num1)-parseFloat(num2);
        disnum.textContent=resultado;
    }
    if(ope=='/'){
        resultado = parseFloat(num1)/parseFloat(num2);
        disnum.textContent=resultado;
    }
    if(ope=='*'){
        resultado = parseFloat(num1)*parseFloat(num2);
        disnum.textContent=resultado;
    }
    console.log(resultado);
}