document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#toggleBtn");
  btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
    if (btn.innerText === "Switch to Light Mode")
      btn.innerText = "Switch to Dark Mode";
    else if (btn.innerText === "Switch to Dark Mode")
      btn.innerText = "Switch to Light Mode";
    else return;
  });
});
