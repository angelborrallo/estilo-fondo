function cambiaColor(fondo,texto){
    document.body.style.backgroundColor=fondo;
    document.body.style.color=texto;
}
function calculoRadius(){
    const PI=3.1416;
    let radio=Number(document.getElementById("radio").value);
    let circurferencia=2*radio*PI;
    let circulo=radio**2*PI;
    let esfera=(4*radio**3*PI)/3;
    document.getElementById("resultados").style.visibility="visible"
    document.getElementById("circunfe").innerHTML="La circunferencia  es :"+circurferencia+" cm";
    document.getElementById("circulo").innerHTML="El círculo es:"+circulo+" cm²"
    document.getElementById("esfera").innerHTML="La esfera es:"+esfera+" cm³";
}