const openMenuIcon = document.getElementById("menu");
const closeMenuIcon = document.getElementById("close-icon");
const navBar = document.getElementById("nav");

// opens the side menu in mobile
openMenuIcon.addEventListener("click", () => {
  navBar.style.right = "0px";
  openMenuIcon.style.display = "none";
  closeMenuIcon.style.display = "block";
});

// closes the side menu in mobile
closeMenuIcon.addEventListener("click", () => {
  navBar.style.right = "-200px";

  // delays for 300ms before showing the menu icon, allowing the side bar to slide away
  setTimeout(() => {
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  }, 300);
});
