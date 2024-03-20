require("dotenv").config();

const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

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

//       /api/v1/auth/register

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Backend server running at port ${PORT}`);
});
