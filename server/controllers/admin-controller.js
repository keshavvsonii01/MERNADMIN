const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");

// *-------------------------------
//* getAllUsers Logic 📝
// *-------------------------------
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* single user Logic 📝
// *-------------------------------

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* user update Logic 📝
// *-------------------------------

const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* user delete Logic 📝
// *-------------------------------

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* getAllContacts Logic 📝
// *-------------------------------
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* contacts delete Logic 📝
// *-------------------------------

const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* getAllServices Logic 
// *-------------------------------
const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    console.log(services);
    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No services Found" });
    }
    return res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* single Service Logic 📝
// *-------------------------------

const getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// *-------------------------------
//* Service update Logic 📝
// *-------------------------------

const updateServiceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedServiceData = req.body;

    const updatedData = await Service.updateOne(
      { _id: id },
      {
        $set: updatedServiceData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
  getAllServices,
  getServiceById,
  updateServiceById,
};
