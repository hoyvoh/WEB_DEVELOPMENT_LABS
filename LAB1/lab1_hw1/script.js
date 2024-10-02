document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("action-menu-toggle-0");
  const dropdownMenu = document.getElementById("action-menu-0-menu");

  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();

    const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", !isExpanded);

    if (isExpanded) {
      dropdownMenu.classList.remove("show");
    } else {
      dropdownMenu.classList.add("show");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
});
