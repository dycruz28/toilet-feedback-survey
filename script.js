function submitFeedback(feedback) {
  fetch('https://script.google.com/macros/s/AKfycbzBsVUjWnKkANsJ_IlJR6m_v73cp9XxsQZJh5DP22mrkVzah-vS6AWO06DpprQS6sT4/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'feedback=' + encodeURIComponent(feedback)
  })
  .then(response => response.text())
  .then(text => {
    if(text === "Success") {
      alert('Thank you for your feedback!');
      location.reload();
    } else {
      alert('Submission failed: ' + text);
    }
  })
  .catch(err => {
    alert('Error submitting feedback: ' + err.message);
  });
}
