//import * from '@mozilla/readability';
//import Readability from "./readability/Readability.js";
document.body.style.border = "12px solid red";

let posI = 0;

const left = 37;
const up = 38;
const right = 39;
const down = 40;

var dock = document.getElementsByClassName("dockImage");
var partyBar = document.getElementsByClassName("partyBar");

let list = document.getElementsByClassName("dockIcon").length;

let i = 0;
if (document.getElementsByClassName("dockIcon")[i].classList[1] != "active") {
	i++;
	console.log(i);
}

//element = "dockIcon";
//lngArr = document.getElementsByClassName(element).length;
//document.addEventListener("keydown", (e) => {
//	e = e || window.event;
//	e.preventDefault(); // Prevent the default action
//	if (e.keyCode == down && posI < lngArr - 2) {
//		posI++;
//		console.log(posI);
//	}
//	if (e.keyCode == up && posI > 0) {
//		posI--;
//		console.log(posI);
//	}
//	document.getElementsByClassName(element)[posI].lastChild.click();
//	return;
//});
