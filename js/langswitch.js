// Get references to the language switcher and dropdown content
const languageSwitcher = document.querySelector('.language-switcher');
const languageDropdown = document.querySelector('.language-switcher + .dropdown-content');
const languageSwitcherContainer = document.querySelector('.language-switcher-container');

// Function to toggle the visibility of the dropdown content
function toggleDropdown(dropdown) {
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
}

// Function to position the language switcher container
function positionLanguageSwitcher() {
  // Calculate the new top position based on the viewport's scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const newTopPosition = 80; // Adjust this value as needed

  // Set the new top position for the language switcher container
  languageSwitcherContainer.style.top = `${newTopPosition}px`;
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

// Add click event listeners to language options
const languageOptions = document.querySelectorAll('.dropdown-content a');
const flagIcon = document.querySelector('.language-flag');

languageOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLang = option.getAttribute('data-lang');
    const flagImg = option.querySelector('.flag-icon');

    // Update the flag icon with the selected language's flag
    flagIcon.src = flagImg.src;

    // You can also handle language-specific actions here

    // Hide the dropdown
    languageDropdown.style.display = 'none';
  });
});

// Initial positioning of the language switcher container
positionLanguageSwitcher();
