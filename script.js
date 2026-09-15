/* =========================================
   ELISA WEB STUDIO
   PROFESSIONAL JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.textContent = "✕";
            menuBtn.setAttribute("aria-label", "Close menu");

        } else {

            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-label", "Open menu");

        }

    });


    /* Close menu after selecting a link */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-label", "Open menu");

        });

    });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.querySelector(".typing-text");

if (typingText) {

    const words = [
        "Web Developer",
        "Web Designer",
        "Creative Developer"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord = words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;


            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }


        const speed = deleting ? 55 : 90;

        setTimeout(typeEffect, speed);

    }


    typeEffect();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        formMessage.textContent =
            "Thank you! Your message has been received.";


        contactForm.reset();


        setTimeout(function () {

            formMessage.textContent = "";

        }, 5000);

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card, .service-card, .services-cta, .contact-content"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-element");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal-element");

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show-element");

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.querySelector("[data-year]");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
