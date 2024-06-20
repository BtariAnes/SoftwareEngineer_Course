function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius-input').value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit-input').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}

function resetFields() {
    document.getElementById('celsius-input').value = "";
    document.getElementById('fahrenheit-input').value = "";
    document.getElementById('calculation').value = "";
}

function reverseConversion() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit-input').value);
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number");
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius-input').value = celsius.toFixed(2);
    document.getElementById('calculation').value = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}
