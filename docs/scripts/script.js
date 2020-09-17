const mainMenuLinks = document.querySelectorAll(".main-menu__link")
const mainMenuItems = document.querySelectorAll(".main-menu__item")
const dropdown = document.querySelector(".dropdown")

mainMenuItems.forEach((mainMenuItem) => {
	mainMenuItem.addEventListener("click", function() {
		if (dropdown.classList.contains("show") && mainMenuItem.classList.contains("highlight")) {
			dropdown.classList.remove("show")
			mainMenuItem.classList.remove("highlight")
		} else {
			dropdown.classList.add("show")
			mainMenuItem.classList.add("highlight")
		}
	})
})
