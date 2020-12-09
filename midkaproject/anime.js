const text = document.querySelector(".creative");
const str = text.textContent;
const splt = str.split("");
text.textContent = "";

for(let i = 0; i < splt.length; i++) {
	text.innerHTML += "<span>" + splt[i] + "</span";
}
let char = 0;
let timer = setInterval(onTick, 300);

function onTick() {
	const span = text.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;
	if(char == splt.length) {
		complete();
		return;
	}
}