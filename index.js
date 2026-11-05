const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
}

const typingElement = document.getElementById("typing");

if (typingElement) {
  const words = ["Medium.", "Design.", "Brand.", "Art."];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    typingElement.textContent = "Design.";
  } else {
    let wordIndex = 0;
    let characterIndex = 0;

    function typeNextCharacter() {
      const word = words[wordIndex];
      typingElement.textContent = word.slice(0, characterIndex);
      characterIndex += 1;

      if (characterIndex > word.length) {
        window.setTimeout(() => {
          characterIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typeNextCharacter();
        }, 1400);
        return;
      }

      window.setTimeout(typeNextCharacter, 130);
    }

    typeNextCharacter();
  }
}
