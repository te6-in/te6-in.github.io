let main1 = document.getElementById("main-1");
let main2 = document.getElementById("main-2");

window.isMobile = function() { // include tablets
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function setFixedViewportHeights() {
	if (isMobile()) {
		let vh = window.innerHeight * 0.01; // initial viewport height in pixels * 0.01
		document.getElementById("fixed-viewport-height-1").style.marginBottom = 18 * vh + "px";
		document.getElementById("fixed-viewport-height-2").style.marginTop = 90 * vh + "px";
		document.getElementById("fixed-viewport-height-2").style.marginBottom = 90 * vh + "px";
	}
}

function isDarkMode() {
	return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function getScrollPercent() {
	var h = document.documentElement;
	var b = document.body;
	var st = 'scrollTop';
	var sh = 'scrollHeight';
	return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
}

function hslToHex(h, s, l) {
	l /= 100;
	const a = s * Math.min(l, 1 - l) / 100;
	const f = n => {
	  const k = (n + h / 30) % 12;
	  const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	  return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

function setThemeColor() {
	document.querySelector('meta[name="theme-color"]').setAttribute("content", getComputedStyle(document.body).getPropertyValue("--background"));
}

function setRandomColor() {
	var randomH = Math.floor(Math.random() * 360);
	var randomColorHSL = "hsl(x,54%,54%)".replace('x', randomH);
	var randomColorHSLA = "hsla(x,54%,54%, 0.2)".replace('x', randomH);
	var randomColorHEX = hslToHex(randomH, 54, 54).toUpperCase();
	document.getElementById("accent-color-title").style.color = randomColorHSL;
	document.getElementById("accent-color-description").style.color = randomColorHSL;
	document.documentElement.style.setProperty('--selection', randomColorHSLA);
}

function fade() {
	scrollAmount = getScrollPercent();
	if (scrollAmount < 0.25) {
		main1.style.opacity = 1 - (scrollAmount * 4);
		main2.style.opacity = 0;
	} else if (0.25 <= scrollAmount && scrollAmount <= 0.75) {
		main1.style.opacity = 0;
		main2.style.opacity = 0;
	} else if (0.75 < scrollAmount && scrollAmount < 0.95) {
		main1.style.opacity = 0;
		main2.style.opacity = (scrollAmount - 0.75) * 5;
	} else if (0.95 <= scrollAmount) {
		main1.style.opacity = 0;
		main2.style.opacity = 1;
	}
}

function hide() {
	if (main1.style.opacity > 0) {
		main1.classList.remove("screen-readable");
	} else {
		main1.classList.add("screen-readable");
	}

	if (main2.style.opacity > 0) {
		main2.classList.remove("screen-readable");
	} else {
		main2.classList.add("screen-readable");
	}
}

function showDarkModeText() {
	let darkModeText = document.getElementById("dark-mode");
	if (isDarkMode()) {
		darkModeText.innerHTML = "💡 다크 모드 켜짐";
		darkModeText.style.userSelect = "auto";
	} else {
		darkModeText.innerHTML = "　";
		darkModeText.style.userSelect = "none";
	}
}

function goOpposite() {
	if (getScrollPercent() == 0) {
		document.body.scrollTop = document.body.scrollHeight;
		document.documentElement.scrollTop = document.documentElement.scrollHeight;
	} else {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}

function stickToBottom() {
	if (getScrollPercent() > 0.9) {
		document.body.scrollTop = document.body.scrollHeight;
		document.documentElement.scrollTop = document.documentElement.scrollHeight;
	}
}

setFixedViewportHeights();
setThemeColor();
setRandomColor();
fade();
hide();
showDarkModeText();

window.onload = function() {
	document.body.classList.remove("preload");
}

window.onscroll = function() {
	fade();
	hide();
	document.getElementById("fixed-viewport-height-1").style.transform = "translate(0px, " + -getScrollPercent()*10 + "em) scale(" + (1-getScrollPercent()*0.3) + ")";
};

window.onresize = function() {
	fade();
	hide();
	if (isMobile() == false) {
		stickToBottom();
	}
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", showDarkModeText);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setThemeColor);