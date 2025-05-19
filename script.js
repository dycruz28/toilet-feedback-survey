const SCRIPT_URL = 'https://toilet-feedback-survey.onrender.com/submit-feedback';

function submitFeedback(feedback) {
  const payload = {
    rating: feedback,
    location: 'Calle Cafe Toilet',
    timestamp: new Date().toISOString()
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you for your feedback!");
      setTimeout(() => location.reload(), 10000);
    } else {
      alert('Failed to submit feedback.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error submitting feedback.');
  });
}
