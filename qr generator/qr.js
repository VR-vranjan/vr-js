const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qr = document.querySelector("#image");
const button = document.querySelector("button");
const input = document.querySelector("#input");

function createqr() {
    qr.src = url +input.value;

    
}