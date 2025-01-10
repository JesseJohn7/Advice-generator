// Function to fetch advice from the API
async function fetchAdvice() {
    try {
      // Fetch advice from the API
    const response = await fetch('https://api.adviceslip.com/advice', {
        cache: 'no-cache', // Prevent caching for new advice
    });
    const data = await response.json();
      // Extract advice and ID from the response
    const advice = data.slip.advice;
    const adviceId = data.slip.id;

      // Update the HTML content with the new advice
    document.querySelector('.advice-number').textContent = `ADVICE #${adviceId}`;
    document.querySelector('.advice-text').textContent = `“${advice}”`;
    } catch (error) {
      // Handle errors (e.g., network issues)
    document.querySelector('.advice-text').textContent =
        'Failed to fetch advice. Please try again.';
    console.error('Error fetching advice:', error);
    }
}

  // Add event listener to the button
document.querySelector('.action-button').addEventListener('click', fetchAdvice);

  // Fetch initial advice on page load
fetchAdvice();
