let zone, rows, columns, result, playground, startTime = 0,
	moves = 0;

function start() {
	document.getElementById("game-start").addEventListener("click", play, !1),
		result = document.getElementById("game-moves"),
		zone = document.getElementById("game-zone"),
		rows = 4, columns = 4,
		play()
}

function play() {
	startTime = new Date;
	let e, o = new Array,
		n = 0;
	t = 0;
	moves = 0,
		rows = document.getElementById("game-rows").value,
		columns = document.getElementById("game-columns").value,
		result.innerHTML = moves,
		playground = new Array(rows);
	for (let e = 0; e < rows; e++)playground[e] = new Array(columns);
	e = new Array(rows * columns);
	for (let o = 0; o < rows * columns; o++)e[o] = 0;
	for (let t = 0; t < rows * columns; t++)0 == e[n = Math.floor(Math.random() * rows * columns)] ? (e[n] = 1, o.push(n)) : t--; t = 0;
	for (let e = 0; e < rows; e++)
		for (let n = 0; n < columns; n++)playground[e][n] = o[t], t++; show()
}

function show() {
	let e = "";
	for (let o = 0; o < rows; o++) {
		e += "<tr>";
		for (let n = 0; n < columns; n++)0 == playground[o][n] ? e += '<td class="blank"> </td>' : e += '<td class="object" onclick="move(' + o + ", " + n + ')">' + playground[o][n] + "</td>"; e += "</tr>"
	}
	zone.innerHTML = e
}

function move(e, o) {
	(moveable(e, o, "up") || moveable(e, o, "down") || moveable(e, o, "left") || moveable(e, o, "right")) && increment();
	let n = new Date,
		t = millisecondsToTime(Math.abs(startTime - n));
	win() && (alert(`Yes! U have passed test for minutes ${t} and ${moves} moves.`),
		play())
}

function millisecondsToTime(e) {
	let o = e % 1e3, n = (e = (e - o) / 1e3) % 60, t = (e = (e - n) / 60) % 60;
	return pad((e - t) / 60) + ":" + pad(t) + ":" + pad(n) + "." + pad(o, 3)
}

function pad(e, o) {
	return ("00" + e).slice(-(o = o || 2))
}

function moveable(e, o, n) {
	return rowOffset = 0, columnOffset = 0, "up" == n ? rowOffset = -1 : "down" == n ? rowOffset = 1 : "left" == n ? columnOffset = -1 : "right" == n && (columnOffset = 1), e + rowOffset >= 0 && o + columnOffset >= 0 && e + rowOffset < rows && o + columnOffset < columns && 0 == playground[e + rowOffset][o + columnOffset] && (playground[e + rowOffset][o + columnOffset] = playground[e][o], playground[e][o] = 0, show(), !0)
}
function win() {
	let e = 1;
	for (let o = 0; o < rows; o++)
		for (let n = 0; n < columns; n++) {
			if (playground[o][n] != e && (e !== rows * columns || 0 !== playground[o][n]))
				return !1; e++
		} return !0
}

function increment() {
	moves++, result && (result.innerHTML = moves)
}
document.addEventListener("DOMContentLoaded", start);

//timer
let minute = 0;
let second = 0;
let interval;

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')

//addEventListeners
startBtn.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 1000)
	clearTimer()
})


stopBtn.addEventListener('click', () => {
	clearInterval(interval)

})

//функция для таймера

function startTimer() {
	//SECOND
	second++
	if (second <= 9) {
		secondElement.innerText = "0" + second;
	}
	if (second > 9) {
		secondElement.innerText = second;
	}
	if (second > 59) {
		minute++
		minuteElement.innerText = "0" + minute
		second = 0
		secondElement.innerText = "0" + second;
	}

	//MINUTE
	if (minute <= 9) {
		minuteElement.innerText = "0" + minute;
	}
	if (minute > 9) {
		minuteElement.innerText = minute;
	}
	if (minute > 59) {
		hour++
		hourElement.innerText = "0" + hour
		minute = 0
		minuteElement.innerText = "0" + minute;
	}

}

function clearTimer() {
	hour = 0;
	minute = 0;
	second = 0;
	hourElement.textContent = "00"
	minuteElement.textContent = "00"
	secondElement.textContent = "00"
}