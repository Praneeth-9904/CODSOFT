function appendInput(value) {
    document.getElementById('output').value += value;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

function calculate() {
    try {
        document.getElementById('output').value = eval(document.getElementById('output').value);
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}