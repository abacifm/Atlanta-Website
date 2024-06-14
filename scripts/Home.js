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
setInterval(showNextSlide, 7000); // Change image every 5 seconds (5000 milliseconds)

const slider1 = document.querySelector('.poster-slider');
const slides1 = document.querySelectorAll('.poster');

const activeSlide = document.querySelector('.poster.active');

let currentSlideIndex = 0;

const nextSlide = () => {
  slides1[currentSlideIndex].classList.remove('active');
  currentSlideIndex = (currentSlideIndex + 1) % slides1.length;
  slides1[currentSlideIndex].classList.add('active');
};

const startSlider = setInterval(nextSlide, 10000); // Change 2000 to adjust interval (in milliseconds)



const targetDate = new Date("July 4, 2024 00:00:00 EST");

function updateCountdown() {
// Get the current date and time
const currentDate = new Date();
      
// Calculate the time difference between target and current date
const timeDifference = targetDate.getTime() - currentDate.getTime();
      
// Check if the target date has passed
if (timeDifference <= 0) {
  // Target date has passed, display 0 for all units
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    return;
  }
      
  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
  // Update the display with leading zeros for aesthetics
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
  }
      
  // Call the updateCountdown function initially to display the time difference
  updateCountdown();
      
  // Call the updateCountdown function every second to keep it updated
  setInterval(updateCountdown, 1000);


  
  