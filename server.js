require("dotenv").config();

const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job")

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected!"))
  .catch((error) => console.log("DB failed to connect", error));

const express = require("express");

const app = express();


app.use(express.json());

app.get("/api/health", (req, res) => {
  console.log("hey health");
  res.json({
    service: "Backend Joblisting server",
    status: "active",
    time: new Date(),
  });
});

// console.log(authRoute);


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/job", jobRoute);

//       /api/v1/auth/register

app.use("*", (req, res) => {
  res.status(404).json({ errorMessage: "Route not found!" });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ errorMessage: "Something went wrong!" });
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Backend server running at port ${PORT}`);
});
