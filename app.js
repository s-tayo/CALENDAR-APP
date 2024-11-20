const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Calendar route
app.get('/', (req, res) => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    // Generate days in the month
    const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    res.render('index', { month, year, days });
});

app.listen(port, () => {
    console.log(`Calendar app running at http://localhost:${port}`);
});
