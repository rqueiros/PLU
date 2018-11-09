
// Versão não refatorizada

function soma() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const res = document.querySelector("#res")
    res.value = num1 + num2
}

function subtracao() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const res = document.querySelector("#res")
    res.value = num1 - num2
}

function multiplicacao() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const res = document.querySelector("#res")
    res.value = num1 * num2
}

function divisao() {
    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const res = document.querySelector("#res")
    res.value = num1 / num2
}