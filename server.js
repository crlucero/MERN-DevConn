const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Looks for environment variable PORT to use for Heroku deploy
// If none is set, default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
