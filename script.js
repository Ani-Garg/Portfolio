// This can be used for any future functionality like animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded');
});


function uploadResume() {
    const fileInput = document.getElementById('resume-upload');
    if (fileInput.files.length > 0) {
        alert("Resume uploaded successfully!");
    } else {
        alert("Please select a file before uploading.");
    }
}

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(document.getElementById('uploadForm'));

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        const message = document.getElementById('uploadMessage');
        if (response.ok) {
            message.textContent = 'File uploaded successfully!';
        } else {
            const errorText = await response.text(); // Get error message
            message.textContent = `File upload failed: ${errorText}`;
        }
    } catch (error) {
        const message = document.getElementById('uploadMessage');
        message.textContent = 'Error uploading file: ' + error.message;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Check if the popup should be displayed
    const lastVisitTime = localStorage.getItem("lastVisitTime");
    const currentTime = new Date().getTime();
    
    // 10 minutes in milliseconds
    const tenMinutes = 1 * 60 * 1000;

    if (!lastVisitTime || currentTime - lastVisitTime > tenMinutes) {
        // Display the popup
        displayBoomPopup();
        // Store the current time in localStorage
        localStorage.setItem("lastVisitTime", currentTime);
    }
});

function displayBoomPopup() {
    // Create the popup element
    const popup = document.createElement("div");
    popup.innerText = "Welcome!!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "yellow";
    popup.style.border = "2px solid black";
    popup.style.borderRadius = "10px";
    popup.style.fontSize = "24px";
    popup.style.zIndex = "9999";
    popup.style.transition = "transform 0.5s ease-in-out";

    document.body.appendChild(popup);

    // Boom bomb effect
    setTimeout(() => {
        popup.style.transform = "translate(-50%, -50%) scale(1.2)";
    }, 100);

    // Remove the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}


document.getElementById("navIcon").addEventListener("click", function () {
    const menu = document.getElementById("navigationMenu");
    menu.classList.toggle("show");
});
