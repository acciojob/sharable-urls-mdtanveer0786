// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const nameInput = document.getElementById('name');
    const yearInput = document.getElementById('year');
    const submitButton = document.getElementById('button');
    const urlDisplay = document.getElementById('url');
    
    // Base URL
    const baseUrl = 'https://localhost:8080/';
    
    // Function to generate and display URL with query parameters
    function generateURL() {
        // Get values from input fields
        const nameValue = nameInput.value.trim();
        const yearValue = yearInput.value.trim();
        
        // Initialize URLSearchParams object
        const params = new URLSearchParams();
        
        // Add name parameter if not empty
        if (nameValue) {
            params.append('name', nameValue);
        }
        
        // Add year parameter if not empty
        if (yearValue) {
            params.append('year', yearValue);
        }
        
        // Build the complete URL
        let finalUrl = baseUrl;
        const queryString = params.toString();
        
        if (queryString) {
            finalUrl = baseUrl + '?' + queryString;
        }
        
        // Update the URL display
        urlDisplay.textContent = finalUrl;
        
        // Visual feedback
        urlDisplay.style.transition = 'all 0.3s';
        urlDisplay.style.backgroundColor = '#e8f4fc';
        
        setTimeout(() => {
            urlDisplay.style.backgroundColor = 'white';
        }, 300);
    }
    
    // Event listener for button click
    submitButton.addEventListener('click', generateURL);
    
    // Event listeners for Enter key in input fields
    nameInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateURL();
        }
    });
    
    yearInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateURL();
        }
    });
    
    // Optional: Generate URL on input change (real-time updating)
    // Uncomment if you want real-time updates instead of button click
    
    // nameInput.addEventListener('input', generateURL);
    // yearInput.addEventListener('input', generateURL);
    
    // Pre-fill with example values and generate initial URL
    nameInput.value = 'John';
    yearInput.value = '2023';
    generateURL();
});
