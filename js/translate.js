// Define the translations variable at a higher scope
let translations = {};

// Define the languageOptions variable to store language option elements
const languageOptions = document.querySelectorAll('.dropdown-content a');
const languageSwitcher = document.querySelector('.language-switcher'); // You need to define this element

// Function to load translations from a JSON file
function loadTranslations(callback) {
  fetch('locale/translations.json') // Replace with the correct path to your translations file
    .then((response) => response.json())
    .then((data) => {
      translations = data; // Store the loaded translations in the global variable
      callback();
    })
    .catch((error) => {
      console.error('Translation file load error:', error);
    });
}

// Function to translate content based on the selected language
function translateContent(selectedLang) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute('data-translate');
    const translatedText = translations[selectedLang][translationKey];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });
}

// Add click event listeners to language options in the dropdown
languageOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedLang = option.getAttribute('data-lang');

    // Update the selected language and translate content
    languageSwitcher.setAttribute('data-selected-lang', selectedLang);
    translateContent(selectedLang);
  });
});

// Initial translation based on the selected language
const initialSelectedLang = languageSwitcher.getAttribute('data-selected-lang');
loadTranslations(() => {
  translateContent(initialSelectedLang);
});
