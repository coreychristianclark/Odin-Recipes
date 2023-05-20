  let nav = document.querySelector(".navContainer");

fetch("navBar.html")
    .then((response) => response.text())
        .then((data) => {
            nav.innerHTML = data;
        })
