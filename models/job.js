const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },
  logoURL: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  refUserId: {
    type: mongoose.ObjectId
  },


},{timestamps:{createdAt:"createdAt",updatedAt:"updatedAt"}});

// created at and updated at


module.exports = mongoose.model("Job" , jobSchema)
