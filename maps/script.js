window.onload = function() {
	document.body.className = "";
}

function setThemeColor() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", getComputedStyle(document.body).getPropertyValue("--background"));
}

setThemeColor();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setThemeColor);