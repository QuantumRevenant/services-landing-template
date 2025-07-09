document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const heroType = heroSection.dataset.heroType;
  const imagePath = getRandomHeroImagePath(); // Usamos el mismo origen

  if (heroType === "hero") {
    heroSection.style.backgroundImage = `url('${imagePath}')`;
  } else if (heroType === "banner") {
    const img = heroSection.querySelector('.hero-banner-img');
    if (img) img.src = imagePath;
  }
  
  const logoImg = document.querySelector('.logo-img');
  const logoText = document.querySelector('.logo-text');

  if (logoImg && logoText) {
    // Verifica si ya falló (por ejemplo, carga muy rápida)
    if (!logoImg.complete || logoImg.naturalWidth === 0) {
      fallbackToTextLogo();
    } else {
      logoImg.addEventListener("error", fallbackToTextLogo);
    }
  }

  function fallbackToTextLogo() {
    logoImg.style.display = "none";
    logoText.style.display = "inline-block";
  }
});

function getRandomHeroImagePath() {
  const totalImages = 5;
  const index = String(Math.floor(Math.random() * totalImages) + 1).padStart(2, '0');
  return `./resources/hero_images/hero-${index}.jpg`;
}

