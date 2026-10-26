
function addValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (typeof result === "number" && isFinite(result)) {
            display.value = result;
        } else {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}
