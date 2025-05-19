const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-feedback', (req, res) => {
  const { rating, location, timestamp } = req.body;
  console.log('Feedback received:', { rating, location, timestamp });

  // Optional: Save to a database or Google Sheet here

  res.status(200).json({ message: 'Feedback received successfully!' });
});

app.get('/', (req, res) => {
  res.send('Toilet Feedback API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
