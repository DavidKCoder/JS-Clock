function Clock() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    document.getElementById('clock').innerHTML = `${hour} : ${min} : ${sec}`
}

setInterval(Clock, 500)