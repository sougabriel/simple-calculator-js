window.onload = function () {

    var bts = document.getElementsByClassName("bt");
    var display = document.getElementById("display");
    var number1 = "";
    var number2 = "";
    var operator = "";

    function calculate(number1, number2, operator) {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                return "0";
        }
    }

}