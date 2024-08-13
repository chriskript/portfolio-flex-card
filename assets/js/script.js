function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Good morning";
    } else if (hours < 18) {
        timeOfDay = "Good afternoon";
    } else {
        timeOfDay = "Good evening"
    }

    return timeOfDay;
}

function revealRightSide() {
    const greeting = getGreeting();
    const visitorName = document.getElementById("visitor-name").value;
    const welcomeMessage = `${greeting} ${visitorName}\nWelcome to my portfolio`;

    document.getElementById("welcome-message").innerText = welcomeMessage;

    document.getElementById("chat-box").style.display = "none";
}

// Current Date Function
function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('current-date').textContent = `Date: ${dateString}`;
}

// Call updateDate on load
updateDate();

// Current Time Function
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    
    document.getElementById('current-time').textContent = `Time: ${timeString}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();