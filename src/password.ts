document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const toggleButton = document.getElementById(
    "togglePassword",
  ) as HTMLButtonElement;

  if (!passwordInput || !toggleButton) {
    console.error("Не найден `#password` или `#togglePassword`");
    return;
  }

  const togglePasswordVisibility = () => {
    const isPasswordVisible =
      toggleButton.getAttribute("data-password-view") === "true";

    passwordInput.type = isPasswordVisible ? "password" : "text";

    toggleButton.setAttribute(
      "data-password-view",
      isPasswordVisible ? "false" : "true",
    );
  };

  toggleButton.addEventListener("click", togglePasswordVisibility);
});
