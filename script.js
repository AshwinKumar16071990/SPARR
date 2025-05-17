document.addEventListener('DOMContentLoaded', function () {
  // Contact form handler
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.reset();
      alert('Thank you for contacting SPARR! We will get back to you soon.');
    });
  }

  // Hero background rotator
  const heroBg = document.querySelector('.hero-bg');
  const bgImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
  ];
  let idx = 0;
  const body = document.body;
  setInterval(() => {
    idx = (idx + 1) % bgImages.length;
    if (body) {
      body.style.backgroundImage = `url('${bgImages[idx]}')`;
      body.style.backgroundAttachment = "fixed";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundPosition = "center";
    }
  }, 2000);
});
