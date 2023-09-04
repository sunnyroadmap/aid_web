function loadTranslations(callback) {
    fetch('locale/translations.json')
      .then((response) => response.json())
      .then((data) => {
        translations = data;
        callback();
      })
      .catch((error) => {
        console.error('Translation file load error:', error);
      });
  }
  
  function translateContent(selectedLang) {
    console.log('Translating to:', selectedLang); // Debug
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute('data-translate');
      const translatedText = translations[selectedLang][translationKey];
  
      if (translatedText) {
        element.textContent = translatedText;
      }
    });
  }
  
  // ...
  
  // Add click event listeners to language options in the dropdown
  languageOptions.forEach((option) => {
    option.addEventListener('click', (event) => {
      event.preventDefault();
      const selectedLang = option.getAttribute('data-lang');
      languageSwitcher.setAttribute('data-selected-lang', selectedLang);
      translateContent(selectedLang);
    });
  });
  