let inputValue = []
const convertBtn = document.getElementById("convertBtn")
const resetBtn = document.getElementById("resetBtn")
const inputEl = document.getElementById("input-el")
let lengthContainerEl = document.getElementById("length-container")
let volumeContainerEl = document.getElementById("volume-container")
let massContainerEl = document.getElementById("mass-container")

convertBtn.addEventListener("click", function() {
    inputValue.push(inputEl.value)
    inputEl.value = ""
    renderContainers(inputValue, 3)
    inputValue.pop()
    inputEl.style.height = "60px";
    inputEl.style.width = "90px";
})

resetBtn.addEventListener("click", function() {
    inputValue = [0]
    inputEl.value = ""
    renderContainers(inputValue, 0)
    inputValue.pop()
})

inputEl.addEventListener('input', resizeInput)
resizeInput.call(inputEl)

function resizeInput() {
  this.style.width = this.value.length + "ch"
}

function renderContainers(inputValue, tofixedNum) {
    if(inputValue > "") {
        let input = ""
        for(let i = 0; i < inputValue.length; i++) {
            input += `<div id="length-container">
                      <h3>Length (Meter/Foot)</h3>
                      <h5>${inputValue} meters = ${(inputValue * 3.281).toFixed(tofixedNum)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(tofixedNum)} meters</h5>
                      </div>`
        }
        lengthContainerEl.innerHTML = input
        let input2 = ""
        for(let i = 0; i < inputValue.length; i++) {
            input2 += `<div id="volume-container">
                      <h3>Volume (Liters/Gallons)</h3>
                      <h5>${inputValue} liters = ${(inputValue * 0.264).toFixed(tofixedNum)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(tofixedNum)} liters</h5>
                      </div>`
        }
        volumeContainerEl.innerHTML = input2
        let input3 = ""
        for(let i = 0; i < inputValue.length; i++) {
            input3 += `<div id="volume-container">
                      <h3>Mass (Kilograms/Pounds)</h3>
                      <h5>${inputValue} kilos = ${(inputValue * 2.204).toFixed(tofixedNum)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(tofixedNum)} kilos</h5>
                      </div>`
        }
        massContainerEl.innerHTML = input3
    }
}
