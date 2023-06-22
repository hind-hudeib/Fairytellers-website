const CommentMovements = require("../models/commentsModel");
const errorHandler = require("../middleware/500");

const allCommentMovement = (req, res) => {
  CommentMovements.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allCommentMovementById = async (req, res) => {
  const id = req.params.id;
  const movement = await CommentMovements.find({ _id: id });
  res.json(movement);
};

const allCommentMovementByEmail = async (req, res) => {
  const { email } = req.body;
  const movement = await CommentMovements.find({ email: email });
  res.json(movement);
};

const newCommentMovement = async (req, res) => {
  const { order_id, Comment_id, email } = req.body;

  const currentDate = new Date();
  const newCommentMovements = new CommentMovements({
    status: false,
    email: email,
    destination: "",
    date: currentDate.toLocaleString(),
    order_id: order_id,
    Comment_id: Comment_id,
  });

  const movement = await newCommentMovements.save();

  res.json(movement);
};

const updateCommentMovement = async (req, res) => {
  const userId = req.params.id;
  const updatedMovementData = req.body;

  const move = await CommentMovements.findByIdAndUpdate(
    userId,
    updatedMovementData,
    { new: true }
  );
  const movement = await move.save();
  res.json(movement);
};

const deleteCommentMovement = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedMovementData = req.body;

    updatedMovementData.is_delete = true;

    const move = await CommentMovements.findByIdAndUpdate(
      userId,
      updatedMovementData,
      {
        new: true,
      }
    );

    const movement = await move.save();

    res.json(movement);
  } catch (error) {
    res.status(500).json({ error: "Failed to update CommentMovements" });
  }
};

module.exports = {
  allCommentMovement,
  newCommentMovement,
  updateCommentMovement,
  deleteCommentMovement,
  allCommentMovementById,
  allCommentMovementByEmail,
};
