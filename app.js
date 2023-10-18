


const bulbImage = document.getElementById('bulbImage');
const toggleButton = document.getElementById('toggleButton');

let isBulbOn = true;


toggleButton.addEventListener('click', function() {
    isBulbOn = !isBulbOn;

    if (isBulbOn) {
        bulbImage.src = 'Bulb img/bulb1.png';
        bulbImage.alt = 'On';
        toggleButton.textContent = 'Turn Off';
    } else {
        bulbImage.src = 'Bulb img/bulb-33238_1280.png';
        bulbImage.alt = 'Off';
        toggleButton.textContent = 'Turn On';
    }
});
