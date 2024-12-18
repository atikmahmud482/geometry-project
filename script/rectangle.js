//get rectangle width value
function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    // console.log(width)

    //get rectangle Length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    // console.log(rectangleLengthText)
    const length = parseFloat(rectangleLengthText)
    // console.log(length)

    //calculate rectangle
    const area = width * length;

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

