document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelectorAll(".toggleBtn");
  toggleBtn.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", (event) => {
      event.target.classList.toggle("rotated");
      const clickedFAQDiv = event.target.parentNode.parentNode;
      const faqText = clickedFAQDiv.children[1];
      faqText.classList.toggle("show");
    });
  });
});
