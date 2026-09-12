/* =====================================================
   ELISA WEB STUDIO
   PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuBtn.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";

        });

    });

}


/* ================= TYPING ANIMATION ================= */

const typingText =
    document.querySelector(".typing-text");


if (typingText) {

    const words = [
        "Web Developer",
        "Creative Designer",
        "Website Builder",
        "Digital Creator"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


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

                wordIndex =
                    (wordIndex + 1) % words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 60 : 100
        );

    }


    typeEffect();

}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

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


            if (!name || !email || !message) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all fields.";

                }

                return;

            }


            const recipient =
                "elisawebstudio@gmail.com";


            const subject =
                encodeURIComponent(
                    "Website Contact from " + name
                );


            const body =
                encodeURIComponent(
                    "Hello Elisa Web Studio,\n\n" +
                    "Name: " + name + "\n" +
                    "Email: " + email + "\n\n" +
                    "Message:\n" + message
                );


            if (formMessage) {

                formMessage.textContent =
                    "Opening your email app...";

            }


            window.location.href =
                "mailto:" +
                recipient +
                "?subject=" +
                subject +
                "&body=" +
                body;

        }
    );

}


/* ================= SCROLL ANIMATIONS ================= */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .service-card, .info-box, .contact-item"
    );


animatedElements.forEach(function (element) {

    element.classList.add("scroll-hidden");

});


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "scroll-show"
                    );

                    entry.target.classList.remove(
                        "scroll-hidden"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* ================= HEADER SHADOW ================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);
