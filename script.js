/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });
}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.querySelector(".typing-text");

const words = [
    "Web Developer",
    "Website Designer",
    "Creative Coder",
    "Digital Creator"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 70 : 120;

    if (!deleting && characterIndex === currentWord.length) {

        speed = 1500;
        deleting = true;

    }

    else if (deleting && characterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================
   CURRENT YEAR
========================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Message received! Thank you for contacting me. 💚";

            }

            contactForm.reset();

        }
    );
}


/* =========================================
   SCROLL ANIMATIONS
========================================= */

const animatedElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .service-card, .contact-container"
);

animatedElements.forEach(function (element) {

    element.classList.add("scroll-hidden");

});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("scroll-show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    observer.observe(element);

});