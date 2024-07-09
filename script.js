// script.js

function encriptarTexto() {
    const inputText = document.getElementById('valorUsuario').value;
    if (!validarTexto(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    const encryptedText = inputText.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
    
    mostrarResultado(encryptedText);
}

function desencriptarTexto() {
    const inputText = document.getElementById('valorUsuario').value;
    if (!validarTexto(inputText)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }

    const decryptedText = inputText.replace(/enter/g, 'e')
                                   .replace(/imes/g, 'i')
                                   .replace(/ai/g, 'a')
                                   .replace(/ober/g, 'o')
                                   .replace(/ufat/g, 'u');
    
    mostrarResultado(decryptedText);
}

function copiarTexto() {
    const textoResultado = document.getElementById('textoResultado');
    textoResultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function mostrarResultado(texto) {
    const textoResultado = document.getElementById('textoResultado');
    const noMessageImg = document.getElementById('no-message');
    const copiarBtn = document.getElementById('copiarBtn');

    if (texto) {
        textoResultado.value = texto;
        textoResultado.style.display = 'block';
        noMessageImg.style.display = 'none';
        copiarBtn.style.display = 'inline-block';
    } else {
        textoResultado.style.display = 'none';
        noMessageImg.style.display = 'block';
        copiarBtn.style.display = 'none';
    }
}

// Inicializar con la imagen visible
document.getElementById('no-message').style.display = 'block';
document.getElementById('textoResultado').style.display = 'none';
document.getElementById('copiarBtn').style.display = 'none';