const light = document.getElementById("light");
const dark = document.getElementById("dark");
const theme = document.getElementById("theme");
const mod = document.getElementById("mod");

mod.addEventListener("change", () => {
  if (light.checked) {
    theme.href = "../Style/light.css";
  } else {
    theme.href = "";
  }
});
