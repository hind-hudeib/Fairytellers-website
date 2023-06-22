const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const errorHandler = require("../middleware/500");
const User = require("../models/userModel");
const Order = require("../models/storyModel");
const Messages = require("../models/commentsModel");

// get all Users from db
const allUsers = (req, res) => {
  User.find({ is_delete: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// soft delete for Users
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    console.log(user);
    user.is_delete = true;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update User" });
  }
};

// get all chairties active
const allCharitiesActive = (req, res) => {
  Charity.find({ is_delete: false, active: true })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
// get all chairties not active
const allCharitiesNotActive = (req, res) => {
  Charity.find({ is_delete: false, active: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept org request
const acceptOrg = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await Charity.findById(userId);
    console.log(user);
    user.active = true;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update User" });
  }
};
// reject org request
const declineOrg = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedDocument = await Charity.findByIdAndDelete(userId);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to update User" });
  }
};

// get all donation with active true and is_delete : false
const allDonationsActive = (req, res) => {
  Order.find({ is_delete: false, active: true })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// get all donation with active false and is_delete : false
const allDonationsNotActive = (req, res) => {
  Order.find({ is_delete: false, active: false })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept donation request
const acceptDonation = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findById(orderId);
    console.log(order);
    order.active = true;
    console.log(order);

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to update donation request" });
  }
};

// reject donation request
const rejectDonation = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedDocument = await Order.findByIdAndDelete(orderId);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation request" });
  }
};

// get org request on donation
const allOrgRequestDonation = (req, res) => {
  CharityMovements.find({ status: false })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// accept org request on donation
const acceptOrgRequestDonation = async (req, res) => {
  try {
    // 1)
    const userId = req.params.id;
    const user = await CharityMovements.findById(userId);
    user.status = true;
    const updatedUser = await user.save();

    // 2)

    const orderID = user.order_id;
    const chairtyID = user.charity_id;

    const chairty = await Charity.findById(chairtyID);

    const chairtyName = chairty.username;

    const query = { order_id: orderID };
    const move = await UserMovements.findOneAndUpdate(query, {
      destination: chairtyName,
      status: true,
    });

    // 3)
    const orderStatus = await Order.findById(orderID);
    orderStatus.available = false;

    const updateStatus = await orderStatus.save();

    console.log(user, move, updateStatus);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update User" });
  }
};

// reject org request on donation

// get all messages
const allMessages = (req, res) => {
  Messages.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

// delete Messages
const deleteMessage = async (req, res) => {
  try {
    const messageID = req.params.id;
    const deletedDocument = await Messages.findByIdAndDelete(messageID);
    console.log("Document deleted successfully:", deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation request" });
  }
};

module.exports = {
  allUsers,
  deleteUser,
  allCharitiesActive,
  allCharitiesNotActive,
  acceptOrg,
  declineOrg,
  allDonationsActive,
  allDonationsNotActive,
  acceptDonation,
  rejectDonation,
  allOrgRequestDonation,
  acceptOrgRequestDonation,
  allMessages,
  deleteMessage,
};
