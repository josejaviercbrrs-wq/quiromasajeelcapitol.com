```javascript
/* =====================================================
   EL CAPITOL BIENESTAR
   PREMIUM WEBSITE SCRIPT
===================================================== */

let selectedRating = 0;


/* =====================================================
   DOM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const navbar =
        document.getElementById("navbar");

    const menuButton =
        document.getElementById("menuButton");

    const mobileNavigation =
        document.getElementById("mobileNavigation");

    const topBtn =
        document.getElementById("topBtn");

    const pageLoader =
        document.getElementById("pageLoader");

    const stars =
        document.querySelectorAll("#starRating i");

    const reviewName =
        document.getElementById("reviewName");

    const reviewText =
        document.getElementById("reviewText");

    const reviewsCount =
        document.getElementById("reviewsCount");

    const emptyReviews =
        document.getElementById("emptyReviews");


    /* =================================================
       PAGE LOADER
    ================================================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {

                pageLoader.classList.add("loaded");

            }

            body.classList.remove("loading");

        }, 550);

    });


    /* =================================================
       NAVBAR
    ================================================= */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 70) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuButton && mobileNavigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                menuButton.classList.toggle("active");

            mobileNavigation.classList.toggle(
                "active",
                isOpen
            );

            body.classList.toggle(
                "menu-open",
                isOpen
            );

        });

    }


    /* CLOSE MOBILE MENU */

    document
        .querySelectorAll(".mobile-navigation a")
        .forEach(link => {

            link.addEventListener("click", () => {

                menuButton?.classList.remove("active");

                mobileNavigation?.classList.remove(
                    "active"
                );

                body.classList.remove(
                    "menu-open"
                );

            });

        });


    /* =================================================
       STAR RATING
    ================================================= */

    function resetStars() {

        stars.forEach(star => {

            star.classList.remove(
                "active",
                "hovered"
            );

        });

    }


    function paintStars(number) {

        stars.forEach((star, index) => {

            if (index < number) {

                star.classList.add("active");

            }

        });

    }


    stars.forEach((star, index) => {


        star.addEventListener(
            "mouseenter",
            () => {

                resetStars();

                for (
                    let i = 0;
                    i <= index;
                    i++
                ) {

                    stars[i].classList.add(
                        "hovered"
                    );

                }

            }
        );


        star.addEventListener(
            "mouseleave",
            () => {

                resetStars();

                paintStars(
                    selectedRating
                );

            }
        );


        star.addEventListener(
            "click",
            () => {

                selectedRating =
                    index + 1;

                resetStars();

                paintStars(
                    selectedRating
                );

            }
        );

    });


    /* =================================================
       ADD REVIEW
    ================================================= */

    window.addReview = function () {

        const name =
            reviewName?.value.trim();

        const text =
            reviewText?.value.trim();


        if (
            !name ||
            !text ||
            selectedRating === 0
        ) {

            showToast(
                "Completa todos los campos y selecciona una valoración."
            );

            return;

        }


        let reviews =
            JSON.parse(
                localStorage.getItem("reviews")
            ) || [];


        reviews.push({

            name: name,

            text: text,

            rating: selectedRating,

            time: Date.now()

        });


        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );


        reviewName.value = "";

        reviewText.value = "";

        selectedRating = 0;

        resetStars();

        loadReviews();


        showToast(
            "Gracias por compartir tu experiencia."
        );

    };


    /* =================================================
       LOAD REVIEWS
    ================================================= */

    window.loadReviews = function () {

        const container =
            document.getElementById(
                "reviewsContainer"
            );


        if (!container) return;


        let reviews =
            JSON.parse(
                localStorage.getItem("reviews")
            ) || [];


        reviews.sort(
            (a, b) => b.time - a.time
        );


        container.innerHTML = "";


        if (reviewsCount) {

            reviewsCount.textContent =
                reviews.length;

        }


        if (emptyReviews) {

            emptyReviews.style.display =
                reviews.length === 0
                    ? "flex"
                    : "none";

        }


        reviews.forEach(review => {

            const card =
                document.createElement("article");

            card.className =
                "review-card";


            const header =
                document.createElement("div");

            header.className =
                "review-card-header";


            const name =
                document.createElement("h4");

            name.textContent =
                review.name;


            const starsWrapper =
                document.createElement("div");

            starsWrapper.className =
                "review-stars";


            for (
                let i = 0;
                i < 5;
                i++
            ) {

                const star =
                    document.createElement("i");


                if (i < review.rating) {

                    star.className =
                        "fa-solid fa-star";

                } else {

                    star.className =
                        "fa-regular fa-star";

                }


                starsWrapper.appendChild(
                    star
                );

            }


            header.appendChild(name);

            header.appendChild(
                starsWrapper
            );


            const paragraph =
                document.createElement("p");

            paragraph.textContent =
                review.text;


            const date =
                document.createElement("span");

            date.className =
                "review-date";

            date.textContent =
                formatDate(review.time);


            card.appendChild(header);

            card.appendChild(paragraph);

            card.appendChild(date);


            container.appendChild(card);

        });

    };


    /* =================================================
       DATE
    ================================================= */

    function formatDate(timestamp) {

        return new Date(
            timestamp
        ).toLocaleDateString(
            "es-ES",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

    }


    /* =================================================
       TOAST
    ================================================= */

    function showToast(message) {

        const oldToast =
            document.querySelector(
                ".site-toast"
            );


        if (oldToast) {

            oldToast.remove();

        }


        const toast =
            document.createElement("div");


        toast.className =
            "site-toast";


        toast.innerHTML = `

            <i class="fa-solid fa-circle-check"></i>

            <span></span>

        `;


        toast.querySelector(
            "span"
        ).textContent = message;


        document.body.appendChild(
            toast
        );


        requestAnimationFrame(() => {

            toast.classList.add("visible");

        });


        setTimeout(() => {

            toast.classList.remove(
                "visible"
            );


            setTimeout(() => {

                toast.remove();

            }, 350);

        }, 3000);

    }


    /* =================================================
       BACK TO TOP
    ================================================= */

    window.scrollTopSmooth = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };


    window.addEventListener(
        "scroll",
        () => {

            if (!topBtn) return;


            if (window.scrollY > 600) {

                topBtn.classList.add(
                    "visible"
                );

            } else {

                topBtn.classList.remove(
                    "visible"
                );

            }

        },
        { passive: true }
    );


    /* =================================================
       REVEAL ANIMATIONS
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".statement-main, " +
            ".statement-description, " +
            ".treatment, " +
            ".section-top, " +
            ".price, " +
            ".booking-copy, " +
            ".booking-visual, " +
            ".review-form, " +
            ".review-list, " +
            ".location-header, " +
            ".map-wrapper"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                observer.unobserve(
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
            (element, index) => {

                element.style.setProperty(
                    "--reveal-delay",
                    `${Math.min(index * 0.06, 0.3)}s`
                );

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const navObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                navLinks.forEach(
                                    link => {

                                        link.classList.remove(
                                            "current"
                                        );

                                    }
                                );


                                const active =
                                    document.querySelector(
                                        `.main-nav a[href="#${entry.target.id}"]`
                                    );


                                active?.classList.add(
                                    "current"
                                );

                            }

                        }
                    );

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );


        sections.forEach(
            section =>
                navObserver.observe(section)
        );

    }


    /* =================================================
       TREATMENT IMAGE MOUSE EFFECT
    ================================================= */

    if (
        window.innerWidth > 900
    ) {

        document
            .querySelectorAll(
                ".treatment-image"
            )
            .forEach(image => {

                image.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            image.getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width -
                            0.5;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height -
                            0.5;


                        image.style.setProperty(
                            "--mouse-x",
                            `${x * 8}px`
                        );


                        image.style.setProperty(
                            "--mouse-y",
                            `${y * 8}px`
                        );

                    }
                );


                image.addEventListener(
                    "mouseleave",
                    () => {

                        image.style.setProperty(
                            "--mouse-x",
                            "0px"
                        );

                        image.style.setProperty(
                            "--mouse-y",
                            "0px"
                        );

                    }
                );

            });

    }


    /* =================================================
       HERO PARALLAX
    ================================================= */

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (
        heroImage &&
        window.innerWidth > 768
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (
                    scroll <
                    window.innerHeight
                ) {

                    heroImage.style.transform =
                        `translateY(${scroll * 0.10}px) scale(1.04)`;

                }

            },
            { passive: true }
        );

    }


    /* =================================================
       INITIAL LOAD
    ================================================= */

    loadReviews();

});
```
