// Define the translations variable at a higher scope
let translations = {};

// Define the languageLinks variable to store language option elements
const languageLinks = document.querySelectorAll('.dropdown-content a');

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
  console.log('Translating to:', selectedLang); // Debug
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute('data-translate');
    
    // Check if translations[selectedLang] and translations[selectedLang][translationKey] are defined
    if (translations[selectedLang] && translations[selectedLang][translationKey]) {
      element.textContent = translations[selectedLang][translationKey];
    }
  });
}

// Add click event listeners to language options in the dropdown
languageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Ensure that the clicked element has the data-lang attribute
    if (event.target.getAttribute('data-lang')) {
      const selectedLang = event.target.getAttribute('data-lang');
      translateContent(selectedLang);
    }
  });
});

// Initial translation based on the selected language
const initialSelectedLang = languageSwitcher.getAttribute('data-selected-lang');
loadTranslations(() => {
  translateContent(initialSelectedLang);
});
