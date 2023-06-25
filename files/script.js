const navContainer = document.querySelector("#navContainer");
// const navBar = document.querySelector("navBar.html")

fetch(navContainer)
  .then((response) => response.text())
  .then((data) => {
    navContainer.innerHTML = data
  });
