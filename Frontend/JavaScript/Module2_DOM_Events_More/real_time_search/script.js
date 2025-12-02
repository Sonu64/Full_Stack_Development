document.addEventListener("DOMContentLoaded", () => {
  const terms = [
    "Victoria Memorial",
    "Howrah Bridge (Rabindra Setu)",
    "Dakshineswar Kali Temple",
    "Belur Math",
    "Indian Museum",
    "Jorasanko Thakur Bari",
    "Eden Gardens",
    "Science City",
    "Darjeeling",
    "Darjeeling Himalayan Railway (Toy Train)",
    "Tiger Hill",
    "Kalimpong",
    "Kurseong",
    "Dooars",
    "Gorumara National Park",
    "Siliguri",
    "Sunderbans National Park",
    "Digha",
    "Mandarmani",
    "Tajpur",
    "Bishnupur (Terracotta Temples)",
    "Shantiniketan (Visva-Bharati University)",
    "Murshidabad (Hazarduari Palace)",
    "Cooch Behar Palace (Rajbari)",
  ];

  const termsList = document.querySelector("#termsList");

  // Fill Up the UL with Data
  terms.forEach((term) => {
    const listItem = document.createElement("li");
    listItem.innerText = term;
    listItem.classList.add("visible");
    termsList.appendChild(listItem);
  });

  const searchBox = document.querySelector("#searchBox");

  // Make the UL empty and then fill up again only with matching terms
  searchBox.addEventListener("input", () => {
    // termsList.innerHTML = "";

    const listElements = document.querySelectorAll("li");
    console.log(listElements);
    listElements.forEach((term) => {
      let lowerCaseTerm = term.textContent.toLowerCase();
      let lowerCaseSearchTerm = searchBox.value.toLowerCase();
      if (
        lowerCaseTerm.startsWith(lowerCaseSearchTerm) ||
        lowerCaseTerm.includes(lowerCaseSearchTerm)
      ) {
        // const listItem = document.createElement("li");
        // listItem.innerText = term;
        // termsList.appendChild(listItem);
        term.classList.remove("hidden");
        term.classList.add("visible");
      } else {
        term.classList.add("hidden");
        term.classList.remove("visible");
      }
    });
  });
});
