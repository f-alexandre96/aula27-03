function lerNumero1(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1;
}

function lerNumero2(){
    var numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2;
}


function somar(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 + numero2;

    document.getElementById('resultado').innerText = resultado.toString();
}

function subtrair(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 - numero2;

    document.getElementById('resultado').innerText = resultado.toString();
}
function dividir(){
   
    if(lerNumero2() === 0){
        document.getElementById('resultado').innerText = "Erro! Divisão por zero";
    }else{
        let resultado = lerNumero1() / lerNumero2();
        document.getElementById('resultado').innerText = resultado;
    }


}