/* =========================================
   ELISA WEB STUDIO
   MAIN JAVASCRIPT
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

            menuBtn.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );
        }
    });


    /* Close menu after selecting a link */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );
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
    let letterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    letterIndex + 1
                );

            letterIndex++;

            if (letterIndex === currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    letterIndex - 1
                );

            letterIndex--;

            if (letterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 60 : 100
        );
    }


    typeEffect();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please fill in all fields.";

                return;
            }


            formMessage.textContent =
                "Thank you! Your message has been received.";


            contactForm.reset();

        }
    );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .service-card, .skill-card, .info-box"
    );


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show-element"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(element);

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

        }
