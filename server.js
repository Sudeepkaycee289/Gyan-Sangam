const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Route to receive form data
app.post('/receiveData', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    // Process the form data here
    res.send('Data received successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
