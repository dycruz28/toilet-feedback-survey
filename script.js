function submitFeedback(feedback) {
  // Send feedback to Google Apps Script Web App
  fetch("https://script.google.com/macros/s/AKfycbz66MwGqw-XneuWnYCFzsmXlZ219Jy9UDcnRBQnj9zu71-xLXpKzzZTmZ_P5ZOOvppi/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ feedback: feedback })
  })
  .then(response => {
    if (response.ok) {
      console.log("Feedback submitted successfully");
      showThankYou();
    } else {
      console.error("Failed to submit feedback");
      alert("Failed to submit feedback. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error submitting feedback:", error);
    alert("Error submitting feedback. Please check your connection.");
  });
}

function showThankYou() {
  const surveyContainer = document.getElementById('survey-container');
  const rateButton = document.getElementById('rate-button');

  surveyContainer.innerHTML = `
    <div class="thank-you-message">
      <h2>Thank you for your feedback!</h2>
      <p>Your input helps us improve our service.</p>
    </div>
  `;

  setTimeout(() => {
    location.reload();
  }, 10000);
}

function showSurvey() {
  document.getElementById('survey-container').style.display = 'flex';
  const video = document.getElementById('background-video');
  if (video) video.pause();
  document.getElementById('rate-button').style.display = 'none';
}

document.getElementById('background-video').addEventListener('click', showSurvey);
document.getElementById('rate-button').addEventListener('click', showSurvey);
