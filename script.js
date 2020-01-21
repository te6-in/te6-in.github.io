const media = window.matchMedia('(prefers-color-scheme: dark)');

/*
function hideWhenTransparent() {
	if (document.getElementById("fadeout").style.opacity >= 0) {
		document.getElementById("fadein").style.display = "none";
	}
	else {
		document.getElementById("fadein").style.display = "flex";
	}
	if (document.getElementById("fadein").style.opacity <= 0) {
		document.getElementById("fadeout").style.display = "flex";
	}
	else {
		document.getElementById("fadeout").style.display = "none";
	}
}
*/

function getScrollPercent() {
    var h = document.documentElement;
    var b = document.body;
    var st = 'scrollTop';
    var sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

function fade() {
	if (getScrollPercent() < 0.25) {
		document.getElementById("fadeout").style.opacity = 1 - (getScrollPercent() * 4);
		document.getElementById("fadein").style.opacity = 0;	
	} else if (getScrollPercent() > 0.87) {
		document.getElementById("fadeout").style.opacity = 0;
		document.getElementById("fadein").style.opacity = ((getScrollPercent()) - 0.87) * 13;
	} else {
		document.getElementById("fadeout").style.opacity = 0;
		document.getElementById("fadein").style.opacity = 0;
	}
}

function randomColor() {
	var randomH = Math.floor(Math.random() * 360);
	var randomColor = "hsl(x,54%,54%)".replace('x', randomH);
	var randomColorHSLA = "hsla(x,54%,54%, 0.2)".replace('x', randomH);
	document.getElementById("randomColor1").style.color = randomColor;
	document.getElementById("randomColor2").style.color = randomColor;
	document.documentElement.style.setProperty('--randomcolor', randomColor);
	document.documentElement.style.setProperty('--selection-bg', randomColorHSLA);
}

function isDarkMode() {
	return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function showDarkModeText() {
	if (isDarkMode() == 1) {
		document.getElementById("darktxt").innerHTML += "다크 모드 🌙　";
	} else {
		document.getElementById("darktxt").innerHTML = "　";
	}
}

//hideWhenTransparent();

showDarkModeText();
media.addListener(() => {
	showDarkModeText();
});

randomColor();

window.onunload = function() {
	window.scrollTo(0, 0);
};

window.onscroll = function() {
	fade();
};

window.onresize = function() {
	fade();
}