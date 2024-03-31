const Job = require("../models/job");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createJobPost = async (req, res) => {
  try {
    const {
      companyName,
      logoURL,
      title,
      description,
      salary,
      location,
      duration,
      locationType,
      skills,
      refUserId,
    } = req.body;

    if (
      !companyName ||
      !logoURL ||
      !title ||
      !description ||
      !salary ||
      !location ||
      !duration ||
      !locationType ||
      !skills
    ) {
      return res.status(400).json({
        errorMessage: "Bad request",
      });
    }

    const userId = req.userId;

    const jobDetails = new Job({
      companyName,
      logoURL,
      title,
      description,
      salary,
      location,
      duration,
      locationType,
      skills,
      refUserId: userId,
    });

    await jobDetails.save();
    res.json({ message: "Job created successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong!" });
  }
};

const getJobDetailsById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const jobDetails = await Job.findById(jobId);

    if (!jobDetails) {
      return res.status(400).json({
        errorMessage: "Bad request!",
      });
    }
    res.json({ data: jobDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Something went wrong! " });
  }
};

const updateJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.params.userId;

    if (!jobId) {
      return res.status(400).json({ errormessage: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "Something went wrong!" });
  }
};

module.exports = { createJobPost, getJobDetailsById, updateJobById };
