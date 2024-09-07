const express = require("express");
const app = express();

const PORT = 7000;

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
    console.log("Server running on port 7000");
});
