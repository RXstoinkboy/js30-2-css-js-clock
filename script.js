let secHand = document.querySelector(".sec");
let minHand = document.querySelector(".mins");
let hourHand = document.querySelector(".hours");

const setTime = () => {
    let date = new Date();

    let seconds = date.getSeconds();
    let secDeg = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    let minutes = date.getMinutes();
    let minDeg = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    let hours = date.getHours();
    let hourDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setTime, 1000);