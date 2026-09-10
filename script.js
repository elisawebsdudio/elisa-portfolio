/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.querySelector(".typing-text");


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


    const currentWord =
        words[wordIndex];


    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentWord.substring(
            0,
            characterIndex
        );


    let speed =
        deleting ? 70 : 120;


    if (
        !deleting &&
        characterIndex ===
        currentWord.length
    ) {

        speed = 1500;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        wordIndex++;


        if (
            wordIndex >=
            words.length
        ) {

            wordIndex = 0;

        }


        speed = 400;

    }


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   SCROLL ANIMATIONS
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".section-title, " +
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".projects-cta, " +
        ".service-card, " +
        ".marketplace-cta, " +
        ".contact-container"
    );


animatedElements.forEach(
    function (element) {

        element.classList.add(
            "scroll-hidden"
        );

    }
);


/* =========================================
   INTERSECTION OBSERVER
========================================= */

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "scroll-show"
                                );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        function (element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            !navLinks ||
            !menuBtn
        ) {
            return;
        }


        const clickedInsideMenu =
            navLinks.contains(
                event.target
            );


        const clickedMenuButton =
            menuBtn.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navLinks.classList.remove(
                "active"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
