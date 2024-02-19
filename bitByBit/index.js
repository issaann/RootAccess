const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Assuming your HTML file is in the 'hackthon' folder
const hackthonPath = path.join(__dirname, 'hackthon');
app.use(express.static(hackthonPath));

// Route for the root URL
app.get('/', (req, res) => {
    const htmlFilePath = path.join(hackthonPath, 'C:\Users\issaa\OneDrive\Desktop\hackathon\business.html');

    // Check if the file exists before attempting to send it
    if (require('fs').existsSync("C:\Users\pc\Desktop\hackthon\index.html")) {
        res.sendFile("C:\Users\issaa\OneDrive\Desktop\hackathon\business.html");
    } else {
        res.status(404).send('File not found');
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
   // console.log("server is running on port"${port});
});
