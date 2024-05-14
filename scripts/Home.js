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



  