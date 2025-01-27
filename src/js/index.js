document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark");
    toggleButton.innerText = "Light Mode";
  } else {
    toggleButton.innerText = "Dark Mode";
  }
});

const toggleButton = document.getElementById("toggleTheme");
toggleButton.addEventListener("click", (e) => {
  const isDarkMode = document.body.classList.toggle("dark");

  localStorage.setItem("darkMode", isDarkMode);
  e.target.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
});
