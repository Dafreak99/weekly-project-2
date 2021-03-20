let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar-wrapper");
let maincontent = document.querySelector(".maincontent");
let eachslide = document.querySelector(".each-slide");

document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("appear");
    console.log("OK");
  });
});

// document.addEventListener("scroll", () => {
//   let sidebar2 = document.querySelector(".sidebar-wrapper.appear") || null;
//   sidebar2.classList.remove("appear");
// });
