const btnScrollTop = document.querySelector(".btn-scroll-top");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? btnScrollTop.classList.add("show-btn-scroll-top")
    : btnScrollTop.classList.remove("show-btn-scroll-top");
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
