const endDate = "11 May 2022 12:00 AM";
const inputs = document.querySelectorAll('input');
document.getElementById('end-date').innerText = endDate;

function Clock() {
    const end = new Date(endDate);
    const now = new Date();
    const totalSeconds = (end - now) / 1000;

    if (totalSeconds < 0) {
        return
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const remainSeconds = Math.floor(totalSeconds % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = remainSeconds;
}
Clock();
setInterval(Clock, 1000);

/*
    day = 24 hours
    hour = 60 mons
    min = 60 secs
*/