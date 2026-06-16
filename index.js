const express = require('express');
const app = express();
app.use(express.json({ limit: '50mb' }));
let latestImage = ""; 

app.post('/upload', (req, res) => {
    latestImage = req.body.image;
    res.status(200).send("OK");
});

app.get('/get-image', (req, res) => {
    res.send(latestImage);
});

app.listen(process.env.PORT || 3000);
