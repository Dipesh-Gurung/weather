// Function to handle search weather functionality
function searchWeather() {
    const apiKey = 'ca2742c6f07a44c443ffd22319c9e28e';
    const city = document.getElementById('cityInput').value.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the data received from the API
            console.log(data);
            
            // Get the temperature icon based on the temperature range
            let temperatureIcon;
            if (data.main.temp < 10) {
                temperatureIcon = 'temperature_low_icon.png';
            } else if (data.main.temp > 30) {
                temperatureIcon = 'temperature_high_icon.png';
            } else {
                temperatureIcon = 'temperature_medium_icon.png';
            }

            // Update your HTML with the weather data including temperature icon, humidity icon, and current time
            document.getElementById('weatherInfo').innerHTML = `
                <img src="${temperatureIcon}" alt="Temperature Icon" class="icon"> 
                Temperature: ${data.main.temp}°C <br>
                <img src="humidity_icon.png" alt="Humidity Icon" class="icon"> 
                Humidity: ${data.main.humidity}% <br>
                Weather: ${data.weather[0].main} - ${data.weather[0].description} <br>
                Current Time: ${getCurrentTime()}
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('weatherInfo').innerHTML = 'Weather data not available for the entered city.';
        });
}

// Function to get the current time in 12-hour format
function getCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    const formattedHours = hours < 10 ? '0' + hours : hours;
    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
}

// Add event listener for Enter key press in the input field
document.getElementById('cityInput').addEventListener('keypress', function(event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        // Call the searchWeather function
        searchWeather();
    }
});
function toggleLoginForm() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = (loginPopup.style.display === "block") ? "none" : "block";
}

function closeLoginForm() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = "none";
}
function openRegistrationForm() {
    var registrationPopup = document.getElementById("registrationPopup");
    registrationPopup.style.display = "block";
}

function closeRegistrationForm() {
    var registrationPopup = document.getElementById("registrationPopup");
    registrationPopup.style.display = "none";
}
function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate user authentication (replace with actual authentication logic)
    if (username === "example" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard page
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}

function registerUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Simulate user registration (replace with actual registration logic)
    alert("User registered!");
    return false; // Prevent form submission
}
