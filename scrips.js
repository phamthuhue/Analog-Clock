// Updates clock hands based on current time
function updateClock() {
    const now = new Date(); 
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    /* Rotation calculations:
     * Hour hand: 360° / 12 hours = 30° per hour + 30° / 60 minutes for partial hours
     * Minute hand: 360° / 60 minutes = 6° per minute + 6° / 60 seconds for partial minutes
     * Second hand: 360° / 60 seconds = 6° per second
     */
    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;
    
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
}

// Creates 60 dial lines around clock
function createDialLines() {
    const dialLines = document.querySelector('.dial-lines');

    for (let i = 0; i < 60; i++) {
        let line = document.createElement('div');
        line.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
        
        // Every 5th line is thicker and darker
        if (i % 5 === 0) { 
            line.style.height = "2vmin";
            line.style.width = "0.4vmin";
            line.style.background = "#333";
        }
        
        dialLines.appendChild(line);
    }
}

// Initialize clock
createDialLines();
setInterval(updateClock, 1000);
updateClock();