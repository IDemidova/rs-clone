const userModel = require('../../models/user');

exports.getUser = async (req, res) => {
  try {
    const dataToFind = await userModel.findOne({ login: req.params.login });

    res.json(dataToFind);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.addUser = async (req, res) => {
  const data = new userModel({
    login: req.body.login,
    password: req.body.password
  });

  try {
    const dataToSave = await data.save();

    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const dataToUpdate = await userModel.findByIdAndUpdate(id, data, options);

    res.status(200).json(dataToUpdate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const dataToDelete = await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json(dataToDelete);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};