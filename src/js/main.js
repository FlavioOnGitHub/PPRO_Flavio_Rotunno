window.onload = function () {
  var initialLoad = true;

  setTimeout(function () {
    console.log("Scrolling to top");
    window.scrollTo(0, 0);

    // Add scroll event listener to trigger reload only after the initial load
    window.addEventListener("scroll", reloadAfterScroll);
  }, 100); // Adjust delay as needed

  function reloadAfterScroll() {
    if (initialLoad && window.scrollY === 0) {
      // Check if scrolled to the top after initial load
      console.log("Scrolled to top, reloading page again");
      initialLoad = false; // Set initialLoad to false to prevent further reloads
      location.reload(); // Reload the page

      // Remove the scroll event listener after reloading to prevent further checks
      window.removeEventListener("scroll", reloadAfterScroll);
    }
  }
};
