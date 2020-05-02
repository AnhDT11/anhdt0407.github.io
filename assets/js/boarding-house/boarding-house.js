/*!
 * js
 */

function display() {
  var refresh = 1000;
  setTimeout('startTime()', refresh)
}

function startTime() {
  var x = new Date().toLocaleString();
  document.getElementById('clock').innerHTML = x;
  display();
}

$(document).ready(function() {

  // Smooth Scrolling
  $(".nav-bar a, #sub-nav a, .entry-footer a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})

// Open the Modal
function openModal() {
  document.getElementById("my-modal").style.display = "flex";
}

// Close the Modal
function closeModal() {
  document.getElementById("my-modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}