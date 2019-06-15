var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://beta.amanotem.ml",
	width: 120,
	height: 120,
	margin: 50,
	colorDark : "#106faa",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});