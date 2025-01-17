# Encriptador de Texto

Este proyecto es una página web que permite encriptar y desencriptar texto utilizando un conjunto específico de reglas. La página está desarrollada con HTML, CSS y JavaScript.

## Funciones

- **Encriptar Texto**: Convierte las vocales en una secuencia específica de caracteres.
  - `e` -> `enter`
  - `i` -> `imes`
  - `a` -> `ai`
  - `o` -> `ober`
  - `u` -> `ufat`
- **Desencriptar Texto**: Revierte el texto encriptado a su forma original.
- **Copiar Texto**: Copia el texto encriptado o desencriptado al portapapeles.
- **Validación de Texto**: Solo permite la entrada de letras minúsculas sin acentos y espacios. Si se ingresan caracteres no permitidos, muestra una alerta.
- **Visualización Condicional**: Muestra una imagen con el mensaje "Ningún mensaje fue encriptado" cuando no hay texto encriptado o desencriptado, y muestra el resultado en un `textarea` cuando se realiza una encriptación o desencriptación.

## Estructura del Proyecto

- `index.html`: El archivo HTML principal que contiene la estructura de la página.
- `styles/style.css`: Archivo CSS que define los estilos de la página.
- `script.js`: Archivo JavaScript que contiene la lógica para encriptar, desencriptar, copiar y validar el texto.

## Cómo Funciona

1. **Ingreso de Texto**: 
   - Escribe el texto que deseas encriptar o desencriptar en el área de texto ubicada en la sección "Ingrese el texto aquí!".
   - El texto debe contener solo letras minúsculas y espacios. No se permiten acentos ni caracteres especiales.

2. **Encriptar Texto**:
   - Haz clic en el botón "Encriptar".
   - Si el texto es válido, se mostrará el texto encriptado en el área de resultado.
   - Si el texto no es válido, se mostrará una alerta pidiendo que se ingrese solo letras minúsculas sin acentos ni caracteres especiales.

3. **Desencriptar Texto**:
   - Haz clic en el botón "Desencriptar".
   - Si el texto es válido, se mostrará el texto desencriptado en el área de resultado.
   - Si el texto no es válido, se mostrará una alerta pidiendo que se ingrese solo letras minúsculas sin acentos ni caracteres especiales.

4. **Copiar Texto**:
   - Haz clic en el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.

5. **Visualización Condicional**:
   - Cuando no hay texto encriptado o desencriptado, se muestra una imagen con el mensaje "Ningún mensaje fue encriptado".
   - Cuando se realiza una encriptación o desencriptación, se muestra el área de resultado con el texto correspondiente y el botón "Copiar".
