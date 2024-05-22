document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-links').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = sliderTrack.querySelectorAll('.slide');
    const numSlides = slides.length;

    // Duplicate slides for infinite scrolling effect
    for (let i = 0; i < numSlides; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    // Adjust the width of the slider track after duplication
    sliderTrack.style.width = `calc(100% * ${numSlides * 2})`;
});


