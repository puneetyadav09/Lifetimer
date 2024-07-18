const time = document.getElementById("dob");

const yeartxt = document.getElementById("years");
const monthtxt = document.getElementById("months");
const daytxt = document.getElementById("days");
const hourtxt = document.getElementById("hours");
const minutetxt = document.getElementById("minutes");
const secondtxt = document.getElementById("seconds");

const calender = document.querySelector(".container .dob");
const lifetime = document.querySelector(".container .lifetime");
const reset = document.querySelector(".container .lifetime button");

reset.addEventListener("click", (e) => {
    calender.classList.remove("hide");
    lifetime.classList.add("hide");
});

document.getElementById("buttonTxt").addEventListener("click", (e) => {
    const dob = new Date(time.value);
    if (dob == "") {
        alert("Please Enter your Date of Birth.");
        return;
    }
    setInterval(() => updateAge(), 1000);
    calender.classList.add("hide");
    lifetime.classList.remove("hide");
});

const twoDigit = (number) => {
    return number > 9 ? number : `0${number}`;
};

function updateAge() {
    const dob = new Date(time.value);
    const currentDate = new Date();
    const dateDiff = currentDate - dob;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;

    yeartxt.innerHTML = twoDigit(year);
    monthtxt.innerHTML = twoDigit(month);
    daytxt.innerHTML = twoDigit(day);
    hourtxt.innerHTML = twoDigit(hour);
    minutetxt.innerHTML = twoDigit(minute);
    secondtxt.innerHTML = twoDigit(second);
}
