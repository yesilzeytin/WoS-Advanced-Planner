// scripts.js

// Example function to save inputs (used in main-inputs.html)
function saveInputs() {
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

    localStorage.setItem('speedup-construction', JSON.stringify(construction));
    localStorage.setItem('speedup-research', JSON.stringify(research));
    alert('Inputs saved!');
}

// Other shared functions can go here (e.g., for loading data, filtering items, handling the Plan)
