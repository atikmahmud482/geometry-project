//get rhombus base value
function calculateRhombusArea() {
    const rhombusBaseInput = document.getElementById('d1-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText)

    const rhombusHeightInput = document.getElementById('d2-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height = parseFloat(rhombusHeightText)

    const area = base * height;

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}