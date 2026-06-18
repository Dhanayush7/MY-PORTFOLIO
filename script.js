/* =====================================
   AOS ANIMATION
===================================== */

AOS.init({
    duration: 1000,
    once: true
});

/* =====================================
   PRELOADER
===================================== */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

    }, 2500);

});

/* =====================================
   TYPING EFFECT
===================================== */

const typingText =
    document.getElementById("typing-text");

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "JavaScript Enthusiast",
    "CSE Student",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,
        deleting ? 50 : 100);
}

typeEffect();

/* =====================================
   DARK MODE
===================================== */

const themeBtn =
    document.getElementById("theme-toggle");

if (
    localStorage.getItem("theme")
    === "light"
) {
    document.body.classList.add("light");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {
        localStorage.setItem(
            "theme",
            "light"
        );
    } else {
        localStorage.setItem(
            "theme",
            "dark"
        );
    }
});

/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor =
    document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";
    }
);

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
            +counter.getAttribute(
                "data-target"
            );

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                `${Math.ceil(
                    current + increment
                )}`;

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
                target;
        }
    };

    updateCounter();

});

/* =====================================
   BACK TO TOP BUTTON
===================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener(
    "scroll",
    () => {

        if (
            document.documentElement
                .scrollTop > 300
        ) {
            topBtn.style.display =
                "block";
        } else {
            topBtn.style.display =
                "none";
        }
    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);

/* =====================================
   PARTICLES JS
===================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        }
    }
});

/* =====================================
   MOBILE NAVBAR
===================================== */

const hamburger =
    document.querySelector(
        ".hamburger"
    );

const navLinks =
    document.querySelector(
        ".nav-links"
    );

hamburger.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "mobile-menu"
        );
    }
);

/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
    document.querySelectorAll(
        "section"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                pageYOffset >=
                sectionTop - 200
            ) {
                current =
                    section.getAttribute(
                        "id"
                    );
            }
        });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href")
                === `#${current}`
            ) {
                link.classList.add(
                    "active"
                );
            }
        });
    }
);

/* =====================================
   GITHUB API
===================================== */
/*
Replace YOUR_GITHUB_USERNAME
with your username
*/

const username =
    "YOUR_GITHUB_USERNAME";

fetch(
    `https://api.github.com/users/${username}`
)
.then(response =>
    response.json()
)
.then(data => {

    document.getElementById(
        "repo-count"
    ).innerText =
        data.public_repos;

    document.getElementById(
        "followers-count"
    ).innerText =
        data.followers;

    document.getElementById(
        "following-count"
    ).innerText =
        data.following;
})
.catch(error =>
    console.log(error)
);

/* =====================================
   EMAILJS
===================================== */
/*
Replace these values
from EmailJS dashboard
*/

emailjs.init(
    "YOUR_PUBLIC_KEY"
);

const form =
    document.getElementById(
        "contact-form"
    );

form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )
        .then(() => {

            alert(
                "Message Sent Successfully!"
            );

            form.reset();

        })
        .catch(() => {

            alert(
                "Failed To Send Message"
            );

        });

    }
);

/* =====================================
   PROJECT CARD HOVER EFFECT
===================================== */

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${(y - rect.height/2)/20}deg)
                rotateY(${-(x - rect.width/2)/20}deg)
                scale(1.03)
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    );
});

/* =====================================
   VISITOR COUNTER
===================================== */

fetch(
"https://api.countapi.xyz/hit/dhanayush-portfolio/visits"
)
.then(res => res.json())
.then(data => {

    console.log(
        "Visitors:",
        data.value
    );
});

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(`
=====================================
Welcome To Dhanayush Portfolio
Built with HTML CSS JavaScript
=====================================
`);