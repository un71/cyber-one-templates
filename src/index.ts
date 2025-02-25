import "./index.css";
import "./menu";
import "./modal";
import "./password";

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("lang-switcher") as HTMLElement;
  if (!dropdown) return;

  const button = document.getElementById(
    "lang-switcher-trigger",
  ) as HTMLButtonElement;
  if (!button) return;

  const toggleDropdown = () => {
    const isOpen = dropdown.getAttribute("data-open") === "true";
    dropdown.setAttribute("data-open", isOpen ? "false" : "true");
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target as Node)) {
      dropdown.setAttribute("data-open", "false");
    }
  });
});
