const Style = require("../models/Style");

const getAllS = async (req, res) => {
  try {
    const getAll = await Style.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getS = async (req, res) => {
  try {
    const get = await Style.findById(req.params.id);
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postS = async (req, res) => {
  try {
    const postS = await new Style(req.body);
    const savedPostS = await postS.save();
    res.status(200).json(savedPostS);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putS = async (req, res) => {
  try {
    const updateS = await Style.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateS);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteS = async (req, res) => {
  try {
    const deleteS = await Style.findById(req.params.id);
    await deleteS.remove();
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