// function calculatePentagonArea() {
//     const base = getPentagonBase();
//     console.log(base)
// }

// function getPentagonBase() {
//     const baseInput = document.getElementById('pentagon-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function calculatePentagonArea() {
    const base = getInputValueById('pentagon-base')

    const height = getInputValueById('pentagon-height')

    const area = base * height;

    setInnerTextById('pentagon-area', area)
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area;
}