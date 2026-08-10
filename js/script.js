/* =========================================================
   SANTHOSH M - PROFESSIONAL PORTFOLIO
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    const navLinks = document.querySelectorAll("#navbar a");

    const themeToggle =
        document.getElementById("themeToggle") ||
        document.getElementById("darkModeToggle") ||
        document.getElementById("modeToggle");

    const scrollTopBtn = document.getElementById("scrollTop");

    const typingElement =
        document.querySelector(".typing") ||
        document.getElementById("typing");

    const revealElements =
        document.querySelectorAll(".reveal");

    const contactForm =
        document.getElementById("contactForm");

    const yearElement =
        document.getElementById("currentYear");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const isOpen =
                navbar.classList.contains("active");

            menuBtn.innerHTML =
                isOpen ? "✕" : "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU
       WHEN NAVIGATION LINK IS CLICKED
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.innerHTML = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU
       WHEN ESCAPE KEY IS PRESSED
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuBtn) {
                menuBtn.innerHTML = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }

    });


    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function headerScrollEffect() {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        headerScrollEffect
    );


    headerScrollEffect();


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    function updateThemeIcon() {

        if (!themeToggle) {
            return;
        }

        const isDark =
            document.body.classList.contains("dark");

        const icon =
            themeToggle.querySelector("i");


        if (icon) {

            if (isDark) {

                icon.classList.remove(
                    "fa-moon"
                );

                icon.classList.add(
                    "fa-sun"
                );

            } else {

                icon.classList.remove(
                    "fa-sun"
                );

                icon.classList.add(
                    "fa-moon"
                );

            }

        } else {

            themeToggle.innerHTML =
                isDark ? "☀️" : "🌙";

        }

    }


    function setTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark");

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            document.body.classList.remove("dark");

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }

        updateThemeIcon();

    }


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }


    updateThemeIcon();


    /* Theme button */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const isDark =
                    document.body.classList.contains(
                        "dark"
                    );

                setTheme(
                    isDark ? "light" : "dark"
                );

            }
        );

    }


    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    if (typingElement) {

        const roles = [

            "Full Stack Developer",

            "MERN Stack Developer",

            "React.js Developer",

            "Web Application Developer",

            "AI Enthusiast"

        ];


        let roleIndex = 0;

        let characterIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1800
                    );

                    return;

                }

            } else {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    roleIndex++;

                    if (
                        roleIndex >=
                        roles.length
                    ) {

                        roleIndex = 0;

                    }

                }

            }


            const typingSpeed =
                deleting ? 50 : 90;


            setTimeout(
                typeEffect,
                typingSpeed
            );

        }


        typeEffect();

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealElements.forEach(
            (element) => {

                const elementTop =
                    element.getBoundingClientRect()
                        .top;


                if (
                    elementTop <
                    windowHeight - 100
                ) {

                    element.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();


    /* =====================================================
       SCROLL TOP BUTTON
    ===================================================== */

    if (scrollTopBtn) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY >
                    500
                ) {

                    scrollTopBtn.classList.add(
                        "show"
                    );

                } else {

                    scrollTopBtn.classList.remove(
                        "show"
                    );

                }

            }
        );


        scrollTopBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    );

                const email =
                    document.getElementById(
                        "email"
                    );

                const subject =
                    document.getElementById(
                        "subject"
                    );

                const message =
                    document.getElementById(
                        "message"
                    );


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    return;

                }


                const nameValue =
                    name.value.trim();

                const emailValue =
                    email.value.trim();

                const messageValue =
                    message.value.trim();


                /* Validation */

                if (!nameValue) {

                    alert(
                        "Please enter your name."
                    );

                    name.focus();

                    return;

                }


                if (!emailValue) {

                    alert(
                        "Please enter your email."
                    );

                    email.focus();

                    return;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(
                        emailValue
                    )
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;

                }


                if (!messageValue) {

                    alert(
                        "Please enter your message."
                    );

                    message.focus();

                    return;

                }


                /*
                 * Opens user's email application.
                 */

                const emailTo =
                    "msanthosha46@gmail.com";


                const subjectValue =
                    subject
                        ? subject.value.trim()
                        : "Portfolio Contact";


                const mailSubject =
                    encodeURIComponent(
                        subjectValue ||
                        "Portfolio Contact"
                    );


                const mailBody =
                    encodeURIComponent(
                        `Name: ${nameValue}\n\n` +
                        `Email: ${emailValue}\n\n` +
                        `Message:\n${messageValue}`
                    );


                window.location.href =
                    `mailto:${emailTo}` +
                    `?subject=${mailSubject}` +
                    `&body=${mailBody}`;


                /* Clear form */

                contactForm.reset();

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PROJECT LINKS
    ===================================================== */

    const projectButtons =
        document.querySelectorAll(
            ".project-buttons a"
        );


    projectButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "clicked"
                );

                setTimeout(() => {

                    button.classList.remove(
                        "clicked"
                    );

                }, 300);

            }
        );

    });


    /* =====================================================
       EXTERNAL LINKS
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach((link) => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       RESIZE HANDLING
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            /*
             * Close mobile navigation
             * when switching back to desktop.
             */

            if (
                window.innerWidth > 768
            ) {

                if (navbar) {
                    navbar.classList.remove(
                        "active"
                    );
                }

                if (menuBtn) {

                    menuBtn.innerHTML =
                        "☰";

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       PREVENT HASH JUMP ON PAGE LOAD
    ===================================================== */

    if (
        window.location.hash &&
        document.querySelector(
            window.location.hash
        )
    ) {

        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 0);

    }


    /* =====================================================
       INITIAL PAGE LOAD
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "Santhosh M Portfolio loaded successfully."
    );

});