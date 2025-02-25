document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const openModal = (modalName: string) => {
    const modal = document.querySelector(
      `[data-modal="${modalName}"]`,
    ) as HTMLElement;
    if (modal) {
      modal.setAttribute("data-open", "true");
      body.style.overflow = "hidden";
    }
  };

  const closeModal = (modal: HTMLElement) => {
    modal.setAttribute("data-open", "false");

    const anyOpenModal = document.querySelector(
      "[data-modal][data-open='true']",
    );
    if (!anyOpenModal) {
      body.style.overflow = "";
    }
  };

  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const modalName = button.getAttribute("data-modal-open");
      if (modalName) openModal(modalName);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("[data-modal]") as HTMLElement;
      if (modal) closeModal(modal);
    });
  });

  document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (event.target === modal) closeModal(modal as any);
    });
  });

  document.querySelectorAll("[data-modal-logout]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("[data-modal]") as HTMLElement;
      if (modal) closeModal(modal);
    });
  });
});
