window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

// скопировать

document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;

    inputField.addEventListener("focus", () => inputField.select());

    copyButton.addEventListener("click", () => {
        inputField.select();
        navigator.clipboard.writeText(text);

        inputField.value = "Copied! Thank You!";
        setTimeout(() => (inputField.value = text), 1000);
    });
});
