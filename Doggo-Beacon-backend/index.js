const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const factorsRoutes = require("./routes/factors");
const resultRoutes = require("./routes/results");
const compareRoutes = require("./routes/comparison");

const cors = require("cors");

// Middleware to implement Cross Origin Resource Sharing (CORS)
app.use(cors());
// Enables JSON to be posted in request.body
app.use(express.json());

// Routes
app.use("/home", factorsRoutes);
app.use("/result", resultRoutes);
app.use("/compare", compareRoutes);

app.get("/db", (req, res) => {
  res.send("Database testing");
});

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../doggo-beacon-frontend/public/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
