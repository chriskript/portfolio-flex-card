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


// Sidebar Toggle Function
function toggleSidebar() {
    const leftSide = document.getElementById('left-side');
    const menuButton = document.getElementById('menu-button');

    leftSide.classList.toggle('open');

    const isOpen = leftSide.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen.toString());

    // Toggle the color of the menu button
    if (isOpen) {
        menuButton.style.color = '#37474f';  // Dark color when sidebar is open
    } else {
        menuButton.style.color = '#fff';  // White color when sidebar is closed
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

