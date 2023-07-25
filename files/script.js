document.addEventListener("DOMContentLoaded", function () {
    fetch('/files/html-files/navBar.html')
      .then(response => response.text())
      .then(html => {
        const navbarPlaceholder = document.querySelector('#navbar-placeholder');
        navbarPlaceholder.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching navbar content:', error);
      })
  })
