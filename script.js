function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

function openWhatsApp() {
  window.open("https://wa.me/234XXXXXXXXXX", "_blank");
}

function sendMessage(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}

/* SCROLL ANIMATION */
window.addEventListener("scroll", function () {
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});