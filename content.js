// Function to check the URL and redirect if it includes '/shorts/'
function checkForShorts() {
  if (window.location.href.includes("/shorts/")) {
    // Redirect to homepage or another page of your choice
    window.location.replace("https://www.youtube.com");
  }
}

// Run the check immediately on page load
checkForShorts();

// Monkey-patch history methods to catch SPA navigation
(function (history) {
  const pushState = history.pushState;
  history.pushState = function () {
    pushState.apply(history, arguments);
    checkForShorts();
  };

  const replaceState = history.replaceState;
  history.replaceState = function () {
    replaceState.apply(history, arguments);
    checkForShorts();
  };

  window.addEventListener("popstate", checkForShorts);
})(window.history);
