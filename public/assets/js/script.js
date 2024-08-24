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

function showInitialGreeting() {
    const greeting = getGreeting();
    const initialMessage = `${greeting}`;
    document.getElementById("initial-greeting").innerText = initialMessage;
    document.getElementById("welcome-message").style.display = "none";
}

function revealRightSide() {
    const visitorName = document.getElementById("visitor-name").value;

    if (visitorName) {
        const greeting = getGreeting();
        const welcomeMessage = `${greeting} ${visitorName}, welcome to my portfolio.`;

        document.getElementById("welcome-message").innerText = welcomeMessage;
        document.getElementById("welcome-message").style.display = "block"; // Show welcome message
        document.getElementById("initial-greeting").style.display = "none"; // Hide initial greeting
        document.getElementById("chat-box").style.display = "none"; // Hide chat box
    }
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

// Function to handle scroll events
function handleScroll() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 40) { // Adjust this value to determine when to reduce the height}
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Sidebar Toggle Function
function toggleSidebar() {
    const leftSide = document.getElementById('left-side');
    const menuButton = document.getElementById('menu-button');
    const menuIcon = document.getElementById('menu-icon');

    leftSide.classList.toggle('open');

    const isOpen = leftSide.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen.toString());

    // Toggle the icon btw menu and close
    if (isOpen) {
        menuIcon.textContent = 'close'; // Change to close icon
    } else {
        menuIcon.textContent = 'menu' // Change back to menu icon
    }
}

document.getElementById('menu-button').addEventListener('click', toggleSidebar);

// Adding ARIA attributes to menu button
document.getElementById('menu-button').setAttribute('aria-label', 'Toggle Menu');
document.getElementById('menu-button').setAttribute('aria-controls', 'left-side');

// Keyboard Accessibility for Sidebar
document.getElementById('menu-button').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        toggleSidebar();
    }
});


// Email Format Validation
document.addEventListener('input', function() {
    const nameInput = document.getElementById('icon_prefix');
    const emailInput = document.getElementById('icon_email');
    const messageInput = document.getElementById('icon_prefix2');
    const submitButton = document.getElementById('right-side-btn');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format check

    if (name && emailPattern.test(email) && message) {
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

document.getElementById('load-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hidden-item');
    hiddenItems.forEach(item => {
        item.style.display = 'block'; // Reveal hidden items
    });

    // Optionally, hide the button after all items are revealed
    this.style.display = 'none';
});


// async function getWeather() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(async position => {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             const apiKey = 'YOUR_API_KEY'; // Replace with your API key
//             const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();

//                 const weatherDescription = data.weather[0].description;
//                 const temp = data.main.temp;
//                 const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//                 document.getElementById('weather-data').innerHTML = `
//                     <div>
//                         <img src="${icon}" alt="Weather Icon">
//                         <p>${temp}°C, ${weatherDescription}</p>
//                     </div>`;
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//                 document.getElementById('weather-data').textContent = 'Unable to load weather data';
//             }
//         });
//     } else {
//         document.getElementById('weather-data').textContent = 'Geolocation not supported';
//     }
// }

// // Call getWeather on page load
// getWeather();

