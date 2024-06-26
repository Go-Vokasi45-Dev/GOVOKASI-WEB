// SCROLL
// Add a scroll event listener to reset navbar height
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".overlap-group");
  var scrollPosition = window.scrollY;

  // Check if the scroll position is at the top of the page
  if (scrollPosition === 0) {
    // Reset navbar height
    navbar.style.height = "108px";
  }
});
function scrollToFooter() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  resetNavbarHeight();
}

function scrollToService() {
  document.getElementById("service").scrollIntoView({ behavior: "smooth" });
  resetNavbarHeight();
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  resetNavbarHeight();
}

// Function to reset navbar height
function resetNavbarHeight() {
  var navbar = document.querySelector(".overlap-group");
  navbar.style.height = "200px";
}

// WA
function redirectToWhatsApp() {
  whatsappUrl = "https://wa.me/6281316653083";
  window.open(whatsappUrl, "_blank");
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");
    const arrow = item.querySelector(".vuesax-outline-arrow");

    // Memastiakan semua jawaban disembunyikan
    answer.classList.remove("show");
    arrow.classList.remove("rotate");

    question.addEventListener("click", function () {
      const isOpen = answer.classList.contains("show");

      // Menutup semua pertanyaan dan reset margins
      faqItems.forEach((i) => {
        i.querySelector(".answer").classList.remove("show");
        i.querySelector(".vuesax-outline-arrow").classList.remove("rotate");
        i.style.marginBottom = "20px"; // Reset margin-bottom untuk semua items
        i.style.marginTop = "0px"; // Reset margin-top untuk semua items
      });

      // Logic, ketika tidak diclick
      if (!isOpen) {
        answer.classList.add("show");
        arrow.classList.add("rotate");

        // Penyesuaian margin semua items
        let heightToAdd = answer.scrollHeight + 20;
        let nextItem = item.nextElementSibling;
        while (nextItem) {
          nextItem.style.marginTop = `${heightToAdd}px`;
          nextItem = nextItem.nextElementSibling;
        }
      } else {
        // Reset the margin of all question items
        let nextItem = item.nextElementSibling;
        while (nextItem) {
          nextItem.style.marginTop = "0px";
          nextItem = nextItem.nextElementSibling;
        }
      }
    });
  });
});
