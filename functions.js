// Local Storage include
const toggleSwitch = document.getElementById('theme-toggle');
const mainStyle = document.getElementById('main-style');
const alternateStyle = document.getElementById('alternate-style');

// Function to switch theme based on toggle state
function switchTheme(isAlternate) {
    if (isAlternate) {
        mainStyle.disabled = true;
        alternateStyle.disabled = false;
        localStorage.setItem('theme', 'alternate');
    } else {
        mainStyle.disabled = false;
        alternateStyle.disabled = true;
        localStorage.setItem('theme', 'default');
    }
}

// Load previously saved theme from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'alternate') {
        toggleSwitch.checked = true;  // Set toggle to 'on'
        switchTheme(true);  // Apply alternate theme
    } else {
        toggleSwitch.checked = false;  // Set the toggle to 'off'
        switchTheme(false);  // Apply the default theme
    }
});

// Listen for toggle changes and switch themes
toggleSwitch.addEventListener('change', function() {
    switchTheme(this.checked);
});
