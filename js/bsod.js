var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://beta.amanotem.ml",
	width: 110,
	height: 110,
	colorDark : "#106faa",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});