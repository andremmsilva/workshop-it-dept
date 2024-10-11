function handleMouseClick() {
  document
    .querySelectorAll(".bg-blue-500, .bg-blue-600, .text-blue-600")
    .forEach((element) => {
      element.classList.replace("bg-blue-500", "bg-green-500");
      element.classList.replace("bg-blue-600", "bg-green-600");
      element.classList.replace("text-blue-600", "text-green-600");
    });
}

window.onload = () => {
  document
    .getElementById("changeTheme")
    .addEventListener("click", handleMouseClick);
};
