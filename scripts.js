// scripts.js

// Function to save inputs (construction, research, training, resources)
function saveInputs() {
    console.log("Save button clicked");
    const construction = {
        day: document.getElementById('construction-day').value,
        hour: document.getElementById('construction-hour').value,
        minute: document.getElementById('construction-minute').value,
        second: document.getElementById('construction-second').value,
        bonus: document.getElementById('construction-bonus').value
    };

    const research = {
        day: document.getElementById('research-day').value,
        hour: document.getElementById('research-hour').value,
        minute: document.getElementById('research-minute').value,
        second: document.getElementById('research-second').value,
        bonus: document.getElementById('research-bonus').value
    };

    const training = {
        day: document.getElementById('training-day').value,
        hour: document.getElementById('training-hour').value,
        minute: document.getElementById('training-minute').value,
        second: document.getElementById('training-second').value,
        bonus: document.getElementById('training-bonus').value
    };

    const resources = {
        meat: document.getElementById('resource-meat').value,
        wood: document.getElementById('resource-wood').value,
        coal: document.getElementById('resource-coal').value,
        iron: document.getElementById('resource-iron').value,
        steel: document.getElementById('resource-steel').value,
        fireCrystals: document.getElementById('resource-fire-crystals').value
    };

    // Save to localStorage
    localStorage.setItem('speedup-construction', JSON.stringify(construction));
    localStorage.setItem('speedup-research', JSON.stringify(research));
    localStorage.setItem('speedup-training', JSON.stringify(training));
    localStorage.setItem('resources', JSON.stringify(resources));

    console.log("Inputs saved to localStorage");
    alert('Inputs saved!');
}

// Function to load saved inputs (if available in localStorage)
function loadInputs() {
    const construction = JSON.parse(localStorage.getItem('speedup-construction'));
    const research = JSON.parse(localStorage.getItem('speedup-research'));
    const training = JSON.parse(localStorage.getItem('speedup-training'));
    const resources = JSON.parse(localStorage.getItem('resources'));

    if (construction) {
        document.getElementById('construction-day').value = construction.day;
        document.getElementById('construction-hour').value = construction.hour;
        document.getElementById('construction-minute').value = construction.minute;
        document.getElementById('construction-second').value = construction.second;
        document.getElementById('construction-bonus').value = construction.bonus;
    }

    if (research) {
        document.getElementById('research-day').value = research.day;
        document.getElementById('research-hour').value = research.hour;
        document.getElementById('research-minute').value = research.minute;
        document.getElementById('research-second').value = research.second;
        document.getElementById('research-bonus').value = research.bonus;
    }

    if (training) {
        document.getElementById('training-day').value = training.day;
        document.getElementById('training-hour').value = training.hour;
        document.getElementById('training-minute').value = training.minute;
        document.getElementById('training-second').value = training.second;
        document.getElementById('training-bonus').value = training.bonus;
    }

    if (resources) {
        document.getElementById('resource-meat').value = resources.meat;
        document.getElementById('resource-wood').value = resources.wood;
        document.getElementById('resource-coal').value = resources.coal;
        document.getElementById('resource-iron').value = resources.iron;
        document.getElementById('resource-steel').value = resources.steel;
        document.getElementById('resource-fire-crystals').value = resources.fireCrystals;
    }
}

// Bind the save button to the saveInputs function on page load
window.onload = function() {
    console.log("Page is loaded");

    loadInputs(); // Load inputs when the page loads

    // Attach the saveInputs function to the Save button
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        console.log("Save button found, adding event listener");
        saveButton.addEventListener('click', saveInputs);
    } else {
        console.error("Save button not found");
    }
};
