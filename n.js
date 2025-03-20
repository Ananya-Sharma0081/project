// Assuming the username is stored in localStorage after login
const username = localStorage.getItem("username") || "Guest"; // Default to "Guest" if not set

// Update the welcome message
const welcomeText = document.getElementById("welcome-text");
welcomeText.textContent = `Welcome ${username}`;

// Assuming you stored the hostel name after login
const hostelName = localStorage.getItem("hostelName"); // or fetch from API

// Display the hostel name dynamically
if (hostelName) {
    document.getElementById("hostel-name").textContent = hostelName;
} else {
    document.getElementById("hostel-name").textContent = "Your Hostel";
}

