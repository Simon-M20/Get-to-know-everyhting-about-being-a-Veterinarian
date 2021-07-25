const scrollBtn = document.querySelector(".btn")
// console.log(scrollBtn);

window.addEventListener("scroll", e => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 450) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }

  document.addEventListener("click", e => {
    if (e.target.matches(".btn") || e.target.matches(".btn *")) {
      window.scroll({
        behavior: "smooth",
        top: 0
      })
    }
  })
})

