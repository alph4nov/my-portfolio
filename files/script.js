//navbar hamburger icon
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

    // toggle menu visibility on click
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


// slideshow carousel
function initSlides() {
    let projectCards = document.querySelectorAll('.project-desc-content-container');
    
    projectCards.forEach((card, index) => {
        let slideIndex = 1;
        showSlides(slideIndex, card);

        // Assign event listeners to the buttons
        card.querySelector('.prev').addEventListener('click', () => plusSlides(-1, card));
        card.querySelector('.next').addEventListener('click', () => plusSlides(1, card));
    });
}

function plusSlides(n, card) {
    let slides = card.getElementsByClassName("mySlides");
    let slideIndex = Array.from(slides).findIndex(slide => slide.style.display === "block") + 1;
    
    slideIndex += n;
    showSlides(slideIndex, card);
}

function showSlides(n, card) {
    let slides = card.getElementsByClassName("mySlides");
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}

// Initialize the slides when the document is ready
document.addEventListener('DOMContentLoaded', initSlides);


//submit email
    function sendMessage() {
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var emailBody = "Message: " + message; // Combine subject and message
    var mailtoLink = "mailto:mahfuzizzat0@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
    window.location.href = mailtoLink;
    return false; // Prevent default form submission
    }

        
// //popup card
// document.addEventListener("DOMContentLoaded", () => {
//     const popupButton = document.getElementById("popup-button");
//     const popup = document.getElementById("popup");
//     const closeButton = document.getElementById("close-button");

//     //show popup when the button is clicked
//     popupButton.addEventListener("click", () => {
//         popup.style.display = "flex";
//     });

//     //hide popup on close button click
//     closeButton.addEventListener("click", () => {
//         popup.style.display = "none";
//     });

//     //hide popup on clicking outside the popup content
//     popup.addEventListener("click", (event) => {
//         if (event.target === popup) {
//         popup.style.display = "none";
//         }
//     });
// });
