const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Simple Express app is running");
});

app.listen(30000, () => {
  console.log(`Server running on port ${PORT}`);
});
