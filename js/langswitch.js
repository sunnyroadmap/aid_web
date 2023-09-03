// Get references to the language switcher and dropdown content
const languageSwitcher = document.querySelector('.language-switcher');
const languageDropdown = document.querySelector('.language-switcher + .dropdown-content');

// Function to toggle the visibility of the dropdown content
function toggleDropdown(dropdown) {
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
}

// Add a click event listener to the language switcher
languageSwitcher.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  // Toggle the visibility of the language dropdown
  toggleDropdown(languageDropdown);
});

// Add a click event listener to the document to close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (languageDropdown.style.display === 'block' && !event.target.closest('.language-switcher-container')) {
    languageDropdown.style.display = 'none';
  }
});
