(function () {
  var toggle = document.querySelector("[data-theme-toggle]");
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!toggle) {
    return;
  }

  function getStoredTheme() {
    try {
      var storedTheme = localStorage.getItem("theme");
      return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    } catch (error) {
      return null;
    }
  }

  function updateToggle(theme) {
    var nextTheme = theme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    toggle.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
    toggle.setAttribute("title", "Switch to " + nextTheme + " theme");
  }

  function applyTheme(theme, persist) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateToggle(theme);

    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        // The theme still applies when storage is unavailable.
      }
    }
  }

  updateToggle(document.documentElement.dataset.theme);

  toggle.addEventListener("click", function () {
    var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  systemTheme.addEventListener("change", function (event) {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? "dark" : "light", false);
    }
  });
}());