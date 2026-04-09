// Banner Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll('.hero-banner .slide');
  let dots = document.querySelectorAll('.banner-dots .dot');
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[slideIndex-1].classList.add('active');
  dots[slideIndex-1].classList.add('active');
}

// Auto slideshow
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);

