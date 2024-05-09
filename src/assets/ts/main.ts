import { tns } from "tiny-slider";

(function () {
  "use strict";

  //===== Preloader

  // window.onload = function () {
  //   window.setTimeout(fadeout, 500);
  // }

  // function fadeout() {
  //   document.querySelector('#preloader').style.opacity = '0';
  //   document.querySelector('#preloader').style.display = 'none';
  // }

  /*=====================================
        Sticky
        ======================================= */
  window.onscroll = function () {
    const header_navbar: HTMLElement | null =
      document.querySelector(".navigation");
    const sticky = header_navbar?.offsetTop || 0;

    if (window.pageYOffset > sticky) {
      header_navbar!.classList.add("sticky");
    } else {
      header_navbar!.classList.remove("sticky");
    }

    // show or hide the back-to-top button
    const backToTop: HTMLElement | null =
      document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      if (backToTop !== null && backToTop !== undefined)
        backToTop.style.display = "flex";
    } else {
      if (backToTop !== null && backToTop !== undefined)
        backToTop.style.display = "none";
    }
  };

  // Get the navbar

  // for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const _href = elem.getAttribute("href") || "";
      document.querySelector(_href)?.scrollIntoView({
        behavior: "smooth",
        // offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      let currLink = sections[i];
      let val = currLink.getAttribute("href") || "";
      let refElement: HTMLElement | null = document.querySelector(val);
      let scrollTopMinus = scrollPos + 73;
      if (
        (refElement?.offsetTop || 0) <= scrollTopMinus &&
        (refElement?.offsetTop || 0) + (refElement?.offsetHeight || 0) >
          scrollTopMinus
      ) {
        document.querySelector(".page-scroll")?.classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      console.log(e, "test");
      if (navbarToggler !== null) {
        navbarToggler?.classList?.remove("active");
      }
      if (navbarCollapse !== null) {
        navbarCollapse?.classList?.toggle("hidden");
      }
    })
  );
  if (navbarToggler !== null) {
    navbarToggler.addEventListener("click", function () {
      console.log("test");

      navbarToggler?.classList?.toggle("active");

      if (navbarCollapse !== null) {
        navbarCollapse?.classList?.toggle("hidden");
      }
    });
  }

  const hero = document.getElementById("hero-area");

  if (hero !== null && hero !== undefined) {
    console.log(hero);
    tns({
      container: ".services-carousel",
      items: 3,
      slideBy: "page",
      lazyload: true,
      mouseDrag: true,
      gutter: 30,
      nav: true,
      navPosition: "bottom",
      controls: false,
      autoplay: true,
      autoplayButton: false,
      autoplayText: ["▶️ start", "⏹️ stop"],
      autoplayTimeout: 7500,
      responsive: {
        0: {
          items: 1,
        },
        765: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  //WOW Scroll Spy
  // const wow = new WOW({
  //   //disabled for mobile
  //   mobile: false,
  // });
  // wow.init();

  // AOS.init();
})();
