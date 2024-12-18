function calculateEllipseArea() {
    const base = getInputValueById('ellipse-base')
    const height = getInputValueById('ellipse-height')

    const area = 3.14159265359 * base * height;

    setInnerTextById('ellipse-area', area)
}

// function getInputValueById(inputFieldById) {
//     const inputField = document.getElementById(inputFieldById);
//     const inputValueText = inputField.value;
//     const value = parseFloat(inputValueText);
//     return value;
// }
// function setInnerTextById(elementId, area) {
//     const element = document.getElementById(elementId)
//     element.innerText = area;
// }
