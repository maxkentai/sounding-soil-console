/*
in firefox open about:config, change

full-screen-api.warning.delay = -1
full-screen-api.warning.timeout = 0

app.update.auto false

policies.json in Firefox.app/Contents/Resources/

{
  "policies": {
    "DisableAppUpdate": true,
    "DisableFirefoxStudies": true,
    "DisableSystemAddonUpdate": true,
    "DisableTelemetry": true,
    "ExtensionUpdate": false
  }
}


*/


var hideCursor = true;

$(document).ready(function () {

	document.addEventListener('click', function (event) {

		if (document.fullscreenElement) {
			// document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}

	}, false);


	if ($(window).width() < 960 && $(window).load()) {
		$("#up").hide();
	}

	document.onkeypress = function (e) {
		// log.textContent += ` ${e.code}`;
		console.log(e.code);
		if (e.code === "Space") {
			hideCursor = !hideCursor;
			if (hideCursor) {
				document.body.style.cursor = 'none';
			} else {
				document.body.style.cursor = 'auto';
				// console.log(allStorage());
			}
		}
	};

	$(window).resize(function () {
		if ($(window).width() < 960 && $(window).load()) {
			$("#up").hide();
		} else {
			$("#up").show();
		}
		// if ($(window).load()) {
		// 	if ($(window).width() < 960) {
		// 		$("#up").hide();
		// 	}
		// } else {
		// 	$("#up").show();
		// }
	});
});

window.ondragstart = function(){
	console.log("dragstart");
	return false
};
window.oncontextmenu = function(){return false};

function allStorage() {

	var archive = [],
		keys = Object.keys(localStorage),
		i = 0,
		key;

	for (; key = keys[i]; i++) {
		archive.push(key + '=' + localStorage.getItem(key));
	}

	return archive;
}

const ul = document.getElementById('tabs-list');
const listItems = ul.childNodes;
// Loop through the list items and add the active class to the current/clicked item
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", function (e) {
		// console.log(e.target);
		const tab = e.target.textContent;
		//str = str.split("#");
		console.log(tab);
		var current = document.getElementsByClassName("active");
		//console.log("current", current);
		current[0].className = current[0].className.replace("active", "");
		this.className += "active";

		let count = localStorage.getItem("Tab: " + tab);
		count++;
		localStorage.setItem("Tab: " + tab, count);

	});
}



// Zooming
$(window).keydown(function (event) {
	if ((event.keyCode == 107 && event.ctrlKey == true) || (event.keyCode == 109 && event.ctrlKey == true)) {
		event.preventDefault();
	}
	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		if (event.ctrlKey == true) {
			event.preventDefault();
		}
	});
});

// Set Img div
window.onresize = windowResize;

// window.onresize = function(event) {
// 	console.log("resize");
// };

function windowResize() {
	// if (document.fullscreenElement) console.log("fullscreen");
	// else console.log("not fullscreen");

	var img = document.getElementById('map');
	var width = img.clientWidth;
	var height = img.clientHeight;

	var bodymap = document.getElementById('tab-bodenmap');
	var bodywidth = bodymap.clientWidth;
	var bodyheight = bodymap.clientHeight;

	var imgtop = (bodyheight - height) / 2 - 10;
	var imgleft = (bodywidth - width) / 2;

	var imgdiv = document.getElementById('img');

	imgdiv.setAttribute("style", "width:" + width + "px; " + "height:" + height + "px; " + "top: " + imgtop + "px; " + "left: " + imgleft + "px");


	// Set size of SoundMap Points
	var buttons = document.getElementsByClassName('one');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.height = "2.8%";
		var px = buttons[i].style.height;
		buttons[i].style.width = height / 100 * 2.8 + "px";
		buttons[i].style.borderRadius = height / 100 * 2.8 + "px";
	} // Negative


	// Set size of SoundMap Points
	var buttons2 = document.getElementsByClassName('two');

	for (var i = 0; i < buttons2.length; i++) {
		buttons2[i].style.height = "1.5%";
		var px2 = buttons2[i].style.height;
		buttons2[i].style.width = height / 100 * 1.5 + "px";
		buttons2[i].style.borderRadius = height / 100 * 1.5 + "px";
	}



	// muensingen tab
	img = document.getElementById('map-muensingen');
	width = img.clientWidth;
	height = img.clientHeight;
	// console.log("height: ", height);

	bodymap = document.getElementById('tab-muensingen');
	bodywidth = bodymap.clientWidth;
	bodyheight = bodymap.clientHeight;
	//console.log("bodyheight: ", bodyheight);

	imgtop = (bodyheight - height) / 2;
	imgleft = (bodywidth - width) / 2;

	imgdiv = document.getElementById('overlay-muensingen');
	// console.log("overlay ", imgdiv);

	imgdiv.setAttribute("style", "width:" + width + "px; " + "height:" + height + "px; " + "top: " + imgtop + "px; " + "left: " + imgleft + "px");
	// console.log("muesingen: width: " + width + " height: " + height + " top: " + imgtop + " left: " + imgleft);

	// Set size of SoundMap Points
	buttons2 = document.getElementsByClassName('point-muensingen');

	for (let i = 0; i < buttons2.length; i++) {
		buttons2[i].style.height = "3%";
		const px2 = buttons2[i].style.height;
		buttons2[i].style.width = height / 100 * 3 + "px";
		buttons2[i].style.borderRadius = height / 100 * 3 + "px";
	}
	// end muensingen tab



	// var biovision = document.getElementById('biovision');
	// biovision.style.width = width / 8.60 + "px";
	// biovision.style.height = height / 15.25 + "px";
	// var wsl = document.getElementById('wsl');
	// wsl.style.width = width / 8.08 + "px";
	// wsl.style.height = height / 15.25 + "px";
	// var zhdk = document.getElementById('zhdk');
	// zhdk.style.width = width / 10.93 + "px";
	// zhdk.style.height = height / 15.25 + "px";
	// var eth = document.getElementById('eth');
	// eth.style.width = width / 8.60 + "px";
	// eth.style.height = height / 15.25 + "px";
	// var nabo = document.getElementById('nabo');
	// nabo.style.width = width / 12.31 + "px";
	// nabo.style.height = height / 12.84 + "px";

	if ($(window).width() < 800) {
		var sm = document.getElementById('soundmap');
		sm.style.display = "none";

		var al = document.getElementById('alert');
		al.style.display = "block";
	} else if ($(window).height() < 500) {
		var sm = document.getElementById('soundmap');
		sm.style.display = "none";

		var al = document.getElementById('alert');
		al.style.display = "block";
	} else if ($(window).height() > 500 && $(window).width() > 800) {
		var sm = document.getElementById('soundmap');
		sm.style.display = "block";

		var al = document.getElementById('alert');
		al.style.display = "none";
	}

	//
	//Disable Menu

	var ul = document.getElementById('tabs-list');
	var kontakt = document.getElementById('kontakt');
	var englisch = document.getElementById('englisch');
	var bodenbewusstsein = document.getElementById('bodenbewusstsein');
	var bodenwissen = document.getElementById('bodenwissen');
	var boden = document.getElementById('boden');


	if ($(window).width() < 948) {
		kontakt.style.visibility = "hidden";
		ul.style.height = "28px";
	}
	if ($(window).width() < 792) {
		englisch.style.visibility = "hidden";
		ul.style.height = "28px";
	}
	if ($(window).width() < 636) {
		bodenbewusstsein.style.visibility = "hidden";
		ul.style.height = "28px";
	}
	if ($(window).width() < 471) {
		bodenwissen.style.visibility = "hidden";
		ul.style.height = "28px";
	}
	if ($(window).width() < 324) {
		boden.style.visibility = "hidden";
		ul.style.height = "28px";
	}

	if ($(window).width() > 947) {
		kontakt.style.visibility = "visible";
		ul.style.height = "28px";
	}
	if ($(window).width() > 791) {
		englisch.style.visibility = "visible";
		ul.style.height = "28px";
	}
	if ($(window).width() > 635) {
		bodenbewusstsein.style.visibility = "visible";
		ul.style.height = "28px";
	}
	if ($(window).width() > 470) {
		bodenwissen.style.visibility = "visible";
		ul.style.height = "28px";
	}
	if ($(window).width() > 323) {
		boden.style.visibility = "visible";
		ul.style.height = "28px";
	}

	//
}



windowResize();


function amIclicked(e, element) {
	e = e || event;
	var target = e.target || e.srcElement;
	// console.log("target id ", target.id, "element id ", element.id);
	if (target.id == element.id)
		return true;
	else
		return false;
}

function amIclicked2(e, element, boxid) {
	e = e || event;
	var target = e.target || e.srcElement;

	if (target.id == element.id)
		return true;
	else
		return false;
}


function oneClick(event, element) {
	if (amIclicked(event, element)) {

		var elements = document.getElementsByClassName('dropdown');
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.visibility = "hidden";
			elements[i].style.height = "0px";
			elements[i].style.width = "0px";
			elements[i].style.border = "0px white solid";
			elements[i].style.position = "absolute";
			elements[i].style.borderRadius = "0px";
		}

		elements = document.getElementsByClassName('dropdownMuensingen');
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.visibility = "hidden";
			elements[i].style.height = "0px";
			elements[i].style.width = "0px";
			elements[i].style.border = "0px white solid";
			elements[i].style.position = "absolute";
			elements[i].style.borderRadius = "0px";
		}

		var sounds = document.getElementsByTagName('audio');
		for (i = 0; i < sounds.length; i++) {
			sounds[i].pause();
			sounds[i].currentTime = 0;
		}
	}
}


function twoClick(event, element, id) {
	//console.log("id clicked: ", id);
	if (amIclicked2(event, element, id)) {

		// statistics
		let name = "";
		if (id > 100) name = element.childNodes[1].childNodes[3].childNodes[0].textContent;
		else name = element.childNodes[1].childNodes[1].childNodes[0].textContent;
		name = name.trim();
		// str.trim();
		console.log(name);
		let count = localStorage.getItem(name);
		count ++;
		localStorage.setItem(name, count);


		// console.log("am clicked: ", id);
		var sounds = document.getElementsByTagName('audio');
		for (i = 0; i < sounds.length; i++) {
			var soundid = sounds[i].getAttribute('id');
			// console.log(soundid);
			if (soundid != ('player' + id)) {
				sounds[i].pause();
				sounds[i].currentTime = 0;
				// console.log("IN");
			}
		}

		var elements = document.getElementsByClassName('dropdown');

		for (var i = 0; i < elements.length; i++) {
			elements[i].style.visibility = "hidden";
			elements[i].style.height = "0px";
			elements[i].style.width = "0px";
			elements[i].style.border = "0px white solid";
			elements[i].style.position = "absolute";
			elements[i].style.borderRadius = "0px";
		}


		var box = document.getElementById('dd' + id);
		if (id > 100) {
			// muensingen dropdowns
			box.style.height = "345px";
			box.style.width = "210px";
			if (id == 103) {
				box.style.top = "-120px";
			}
		} else {
			box.style.height = "200px";
			box.style.width = "210px";
		}

		box.style.border = "1.75px white solid";
		box.style.position = "absolute";
		box.style.borderRadius = "5px";
		box.style.visibility = "visible";

		document.getElementById('audio-player' + id).style.visibility = "visible";

		var audio = document.getElementById('player' + id);

		$("#audio").append(audio);

		$(audio).on("timeupdate", function () {
			$("#progress" + id).width((audio.currentTime / audio.duration) * 100 + '%')
			var seconds = audio.currentTime % 60;
			var foo = audio.currentTime - seconds;
			var minutes = foo / 60;
			if (seconds < 10) {
				seconds = "0" + seconds.toString();
			}
			if (seconds > 10) {
				seconds = seconds.toString();
			}
			if (minutes < 10) {
				minutes = "0" + minutes.toString();
			}
			var fixedCurrentTime = minutes + ":" + seconds.substring(0, 2);

			var ctime = document.getElementById("ctime" + id);
			ctime.innerHTML = fixedCurrentTime;

			var ftime = document.getElementById("ftime" + id);
			ftime.innerHTML = readableDuration(audio.duration);
		});

		function readableDuration(seconds) {
			sec = Math.floor(seconds);
			min = Math.floor(sec / 60);
			min = min >= 10 ? min : '0' + min;
			sec = Math.floor(sec % 60);
			sec = sec >= 10 ? sec : '0' + sec;
			return min + ':' + sec;
		}

		audio.play();

		audio.loop = false;
	}
}


//
function goto_muensingen() {
	document.getElementById("index2").childNodes[0].click();
}
// 



//Bildgalerie
var slideIndex = 1;
showSlides(slideIndex);

window.setInterval(function () {
	plusSlides(1);
}, 3500);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}