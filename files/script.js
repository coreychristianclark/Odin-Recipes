const URL = "../html-files/navBar.html";

async function loadNavbarContent() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const html = await response.text();
    const navbarPlaceholder = document.querySelector("#navbar-placeholder");
    navbarPlaceholder.innerHTML = html;

    window.scrollTo(0, 0);
  } catch (error) {
    console.error("Error fetching navbar content:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadNavbarContent();
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
