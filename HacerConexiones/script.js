var conreq=2;
var yourcn=418;
var aceptarcr = document.querySelector("div.con_req h4");
var agregar = document.querySelector("div.your_con h4");
var saca1 = document.querySelector("div.usrs2");
var saca11 = document.querySelector("div.usrs2_2");
var saca2 = document.querySelector("div.usrs");
var saca22 = document.querySelector("div.usrs_2");
var nmore = document.querySelector("div.barra_blanca2");

var chname = document.querySelector("div.desc h1");
function chnm() {
    chname.innerText = "Carolina Miranda";
}
// Todd E
function aceptar1(){
    if(conreq>0){
        aceptarcr.innerText= --conreq;
        agregar.innerText= ++yourcn;
        saca2.remove();
        saca22.remove(); 
    }
    if(conreq==0){
        nmore.innerText="No hay más solicitudes";
    } 
}
function rechazar1(){
    if(conreq>0){
        aceptarcr.innerText= --conreq;
        saca2.remove();
        saca22.remove();
    }
    if(conreq==0){
        nmore.innerText="No hay más solicitudes";
    }
}
// Phill K
function aceptar2(){
    if(conreq>0){
        aceptarcr.innerText= --conreq;
        agregar.innerText= ++yourcn;
        saca1.remove();
        saca11.remove();
    }
    if(conreq==0){
        nmore.innerText="No hay más solicitudes";
    }
}
function rechazar2(){
    if(conreq>0){
        aceptarcr.innerText= --conreq;
        saca1.remove();
        saca11.remove();
    }
    if(conreq==0){
        nmore.innerText="No hay más solicitudes";
    }
}