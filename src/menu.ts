document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu") as HTMLElement;
  const menuOpenTrigger = document.getElementById(
    "menu-trigger-open",
  ) as HTMLButtonElement;
  const menuCloseTrigger = document.getElementById(
    "menu-trigger-close",
  ) as HTMLButtonElement | null;

  if (!menu || !menuOpenTrigger) {
    console.error("Не найден элемент #menu или #menu-trigger-open");
    return;
  }

  const openMenu = () => {
    menu.setAttribute("data-menu-open", "true");
  };

  const closeMenu = () => {
    menu.setAttribute("data-menu-open", "false");
  };

  menuOpenTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    openMenu();
  });

  if (menuCloseTrigger) {
    menuCloseTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      closeMenu();
    });
  }
});
