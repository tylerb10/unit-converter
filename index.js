const lengthEl = document.getElementById("length-field")
const volumeEl = document.getElementById("volume-field")
const massEl = document.getElementById("mass-field")
const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-btn")

convertEl.addEventListener("click", function() {
    input = inputEl.value
    lengthConv()
    volumeConv()
    massConv()
})

function lengthConv() {
    const meterConv = (input * 3.281).toFixed(2)
    const feetConv = (input / 3.281).toFixed(2)
    lengthEl.innerHTML = `${input} meters = ${meterConv} feet | ${input} feet = ${feetConv} meters`
}

function volumeConv() {
    const literConv = (input * 0.264).toFixed(2)
    const gallonConv = (input / 0.264).toFixed(2)
    volumeEl.innerHTML = `${input} liters = ${literConv} gallons | ${input} gallons = ${gallonConv} liters`
}

function massConv() {
    const kilogramConv = (input * 2.204).toFixed(2)
    const poundConv = (input / 2.204).toFixed(2)
    massEl.innerHTML = `${input} kilograms = ${kilogramConv} pounds | ${input} pounds = ${poundConv} kilograms`
}