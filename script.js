const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")
const modal = document.getElementById("modal")

menu.addEventListener("click", () => modal.classList.add("modal--show"))

closeMenu.addEventListener("click", () => modal.classList.remove("modal--show"))
