
//them change
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

//set active

// function setActive()
// {
//   const navbar = document.getElementById("navbar");
//   const a_tags = navbar.getElementsByTagName('a');
//   let path = document.location.href.split("/").pop().split("#").pop();
//   console.log(path);
//   for(let i = 0; i < a_tags.length; i++)
//   {
//     let file = a_tags[i].href.split("/").pop();
//     file_name = file.split("#").pop();

//     if(path == file_name)
//     {
//       a_tags[i].classList.add("active");
//       document.getElementById("first-child").classList.remove('active');
//     }
//   }
// }

// setInterval(setActive,1000);
