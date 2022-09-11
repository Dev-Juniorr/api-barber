const Style = require("../models/Style");

const getAllS = async (req, res) => {
  try {
    const jobs = await Style.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getS = async (req, res) => {
  try {
    const job = await Style.findById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postS = async (req, res) => {
  try {
    const job = await new Style(req.body);
    const savedJob = await job.save();
    res.status(200).json(savedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putS = async (req, res) => {
  try {
    const updateJob = await Style.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteS = async (req, res) => {
  try {
    const deleteJob = await Style.findById(req.params.id);
    await deleteJob.remove();
    res.status(200).json({
      mensaje: "Delete Successfull!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllS,
  getS,
  postS,
  putS,
  deleteS
};