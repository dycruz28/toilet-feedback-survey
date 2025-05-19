const scriptURL = 'https://script.google.com/macros/s/AKfycbz66MwGqw-XneuWnYCFzsmXlZ219Jy9UDcnRBQnj9zu71-xLXpKzzZTmZ_P5ZOOvppi/exec';

function submitFeedback(feedback) {
  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ feedback }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('thank-you-message').style.display = 'block';
      setTimeout(() => location.reload(), 10000);
    } else {
      alert('Failed to submit feedback. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to submit feedback. Please check your internet connection.');
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
