const output = document.getElementById('output');

function alertDumb(msg){
    output.innerHTML = msg;
}

function tabuada(){
    
    let msg = ""
    let value = document.getElementById("input").value; 
    if(!value){
        alertDumb("Digite um número!");
        return;
    }
    for(let ind = 1; ind <= 10; ind++){
        msg += `${value} x ${ind} = ${value * ind} <br>`
    }
    output.innerHTML = msg;
}

function limpar(){
    output.innerHTML = "";
}