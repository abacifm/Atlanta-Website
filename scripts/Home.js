const slider = document.querySelector('.slider'); // Select the slider element
const slides = document.querySelectorAll('.slide'); // Select all slide elements

let currentSlide = 0; // Keeps track of the current slide index

// Function to show the next slide
function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Remove active class from current slide
    currentSlide = (currentSlide + 1) % slides.length; // Increment current slide index (loop back to first if needed)
    slides[currentSlide].classList.add('active'); // Add active class to new slide
}

// Start the image change interval
setInterval(showNextSlide, 5000); // Change image every 5 seconds (5000 milliseconds)

const slider1 = document.querySelector('.poster-slider');
const slides1 = document.querySelectorAll('.poster');

const activeSlide = document.querySelector('.poster.active');

let currentSlideIndex = 0;

const nextSlide = () => {
  slides1[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides1.length;
  slides1[currentSlideIndex].classList.add('active');
};

const startSlider = setInterval(nextSlide, 20000); // Change 2000 to adjust interval (in milliseconds)

// Optional: Add functionality for pausing the slider on hover
slider1.addEventListener('mouseover', () => clearInterval(startSlider));
slider1.addEventListener('mouseout', () => startSlider = setInterval(nextSlide, 9000));


  