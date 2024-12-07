function getHistory() {
    return document.getElementById("history-value").innerTEXT;
}

function printHistory(num) {
    document.getElementById("history-value").innerTEXT = num;
}

function getOutput() {
    return document.getElementById("output-value").innerTEXT;
}

function getFormattedNumber(num) {
    if (num == "") {
        return ""
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementByClassName("operator");
for (var i=0; i<operator.length;i++) {
    operator[i].addEventListener('click',function () {
        if (this.id=="backspace") {
            printHistory = "";
            printOutput = "";
        }
        else if (this.id=="backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
    })
}