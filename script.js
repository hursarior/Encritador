const mensaje = document.querySelector(".mensajes");
const textarea = document.querySelector(".text-area");
 
function btnEncritar(){
    const textencritado = encritar(textarea.value);
    mensaje.value = textencritado;
    textarea.value = "";
    mensaje.style.background = "none";
    
}

function btnDesencritar(){
    const textencritado = desencritar(textarea.value);
    mensaje.value = textencritado;
    textarea.value = "";
    mensaje.style.background = "none";
    
}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    mensaje.blur();
  }

function encritar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }

    return stringEncriptada
}

function desencritar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }

    }

    return stringEncriptada
}
