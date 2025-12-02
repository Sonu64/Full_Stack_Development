document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#toggleBtn");
  btn.addEventListener("click", () => {
    let currentTheme = sessionStorage.getItem("theme");
    console.log(currentTheme);
    if (currentTheme !== null) {
      document.querySelector("body").classList.toggle("dark");
      if (currentTheme === "light") {
        sessionStorage.setItem("theme", "dark");
        btn.innerText = "Switch to Light Mode";
      } else if (currentTheme === "dark") {
        sessionStorage.setItem("theme", "light");
        btn.innerText = "Switch to Dark Mode";
      } else return;
    } else {
      sessionStorage.setItem("theme", "light");
      btn.innerText = "Switch to Dark Mode";
    }
  });
});
