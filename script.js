const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbykf8JWd4HQEl06FaSBJoBkeNgQoB4ViuIDOCIVrnsADOzgcMw4HLJx3wlNRCpZmExbpA/exec';

function submitFeedback(feedback) {
  const thankYouMessage = document.getElementById('thank-you-message');
  const qrCode = document.getElementById('qr-code');

  // Prepare data payload
  const payload = {
    rating: feedback,
    location: 'Calle Cafe Toilet',  // change or make dynamic if needed
    timestamp: new Date().toISOString()
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        thankYouMessage.innerHTML = `<h3>Thank you for your feedback! We appreciate your input.</h3>`;
        qrCode.style.display = 'block';

        // Reload after 10 seconds
        setTimeout(() => location.reload(), 10000);
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    })
    .catch(error => {
      console.error('Submission error:', error);
      alert('Error submitting feedback. Please check your internet connection.');
    });
}

function showSurvey() {
  document.getElementById('survey-container').style.display = 'flex';
  const video = document.getElementById('background-video');
  if (video) video.pause();
  document.getElementById('rate-button').style.display = 'none';
}

document.getElementById('background-video').addEventListener('click', showSurvey);
document.getElementById('rate-button').addEventListener('click', showSurvey);
