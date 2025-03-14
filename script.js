function buttonClick() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let operation = document.getElementById("operation").value;
    let prev_result = document.getElementById("result").value;
    let result = "";

    a = parseFloat(a);
    if (isNaN(a)) {
        alert("Please enter a number to first field");
        document.getElementById("first").value = null;
        return;
    }

    b = parseFloat(b);
    if (isNaN(b)) {
        alert("Please enter a number to second field");
        document.getElementById("second").value = null;
        return;
    }

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (Math.abs(b - 0) < Number.EPSILON) {
                alert("Division by 0");
                return;
            }
            else {
                result = a / b;
            }
            break;
    }

    result = a + " " + operation + " " + b + " = " + result;
    document.getElementById("prev_result").value = prev_result;
    document.getElementById("result").value = result;
}
