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

// Function to handle language selection
function handleLanguageSelection(event) {
  event.preventDefault();
  event.stopPropagation();

  // Check if a language data attribute is present
  const selectedLang = event.target.getAttribute('data-lang');

  if (selectedLang) {
    // Change the selected flag to the chosen language
    const selectedFlag = languageSwitcher.querySelector('.flag-selected');
    selectedFlag.src = `img/${selectedLang}.png`;

    // Close the dropdown
    toggleDropdown(languageDropdown);
  }
}

// Add a click event listener to the language switcher
languageSwitcher.addEventListener('click', (event) => {
  handleLanguageSelection(event);
  // Toggle the visibility of the language dropdown
  toggleDropdown(languageDropdown);
});

// Add click event listeners to language options in the dropdown
const languageOptions = languageDropdown.querySelectorAll('a');
languageOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    handleLanguageSelection(event);
  });
});

// Add a click event listener to the document to close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (languageDropdown.style.display === 'block' && !event.target.closest('.language-switcher-container')) {
    languageDropdown.style.display = 'none';
  }
});
