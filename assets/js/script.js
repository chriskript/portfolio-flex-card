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


// Mobile Menu
function toggleSidebar() {
    const leftSide = document.getElementById('left-side');
    const menuButton = document.getElementById('menu-button');

    leftSide.classList.toggle('open');

    // Toggle the color of the menu button
    if (leftSide.classList.contains('open')) {
        menuButton.style.color = '#37474f';  // Dark color when sidebar is open
    } else {
        menuButton.style.color = '#fff';  // White color when sidebar is closed
    }
}

document.getElementById('menu-button').addEventListener('click', toggleSidebar);

// Reveal Form Button
document.addEventListener('input', function() {
    const nameInput = document.getElementById('icon_prefix');
    const emailInput = document.getElementById('icon_email');
    const messageInput = document.getElementById('icon_prefix2');
    const submitButton = document.getElementById('right-side-btn');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        submitButton.style.display = 'inline-block';
        nameInput.style.color = '#F5A65B';
        emailInput.style.color = '#F5A65B';
        messageInput.style.color = '#F5A65B';
    } else {
        submitButton.style.display = 'none';
        nameInput.style.color = '';
        emailInput.style.color = '';
        messageInput.style.color = '';
    }
});

// Get lightbox elements
const lightbox = document.getElementById('custom-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxLink = document.getElementById('lightbox-link');
const closeBtn = document.querySelector('.lightbox-close');

// Portfolio items with data attributes
const portfolioItems = document.querySelectorAll('.portfolio-tile a');

portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const imgSrc = this.getAttribute('href');
        const title = this.dataset.title;
        const description = this.dataset.description;
        const link = this.dataset.link;
        
        lightboxImage.src = imgSrc;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightboxLink.href = link;
        
        lightbox.style.display = 'flex'; // Show lightbox
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside content
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
