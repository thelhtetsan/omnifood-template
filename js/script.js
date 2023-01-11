/*--- mobile nav --- */
// document
//   .querySelector(".btn-mobile-nav")
//   .addEventListener("click", function () {
//     document.querySelector(".header").classList.toggle("nav-open");
//   });
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
/*--- menu link --- */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const selectEl = document.querySelector(href);
      selectEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/*--- sticky nav --- */
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    //console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
      //   document.querySelector(".header").style.backgroundColor = "red";
    }
  },
  {
    //in the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
/*--- menu hide --- */
