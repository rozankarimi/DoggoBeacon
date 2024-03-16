const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const factorsRoutes = require("./routes/factors");
const resultRoutes = require("./routes/results");

const cors = require("cors");

// Middleware to implement Cross Origin Resource Sharing (CORS)
app.use(cors());
// Enables JSON to be posted in request.body
app.use(express.json());

// Routes
app.use("/home", factorsRoutes);
// app.use("/breed", factorsRoutes);
app.use("/result", resultRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
