const mybutton = document.getElementById("myBtn");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 20) {
//     mybutton.classList.add("block");
//   } else {
//     mybutton.classList.remove("block");
//   }

// });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}