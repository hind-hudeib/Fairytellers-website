const Story = require("../models/storyModel");
const errorHandler = require("../middleware/500");

const allStorys = (req, res) => {
  Story.find({ is_delete: false, active: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allStorysNotActive = (req, res) => {
  Story.find({ is_delete: false, active: false })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const oneStoryById = async (req, res) => {
  const id = req.params.id;
  const story = await Story.find({ _id: id, is_delete: false, active: true });
  res.json(story);
};

const AllStoryByEmail = async (req, res) => {
  const { email } = req.query;

  const story = await Story.find({
    email: email,
    is_delete: false,
    active: true,
  });
  res.json(story);
};

const newStory = async (req, res) => {
  const formData = req.body;

  const newStory = new Story({
    title: formData.title,
    author: formData.author,
    email: formData.email,
    Description: formData.Description,
    Language: formData.Language,
    // content: formData.address,
    cover: formData.cover,
    category: formData.category,
    available: true,
    active: false,
  });
  const story = await newStory.save();
  res.json(story);
  console.log(formData);
};

const updateStory = async (req, res) => {
  const id = req.params.id;
  const updatedStoryData = req.body;

  const story = await Story.findByIdAndUpdate(id, updatedStoryData, {
    new: true,
  });
  const updatedStory = await story.save();
  res.json(updatedStory);
};

const updateStoryContent = async (req, res) => {
  try {
    const storyId = req.params.id;
    const { content } = req.body;
    const story = await Story.findByIdAndUpdate(
      storyId,
      { content },
      { new: true }
    );
    res.json(story);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the story." });
  }
};
const deleteStory = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStoryData = req.body;

    updatedStoryData.is_delete = true;

    const Story = await Story.findByIdAndUpdate(id, updatedStoryData, {
      new: true,
    });

    const updatedStory = await Story.save();

    res.json(updatedStory);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Story" });
  }
};

module.exports = {
  allStorys,
  allStorysNotActive,
  oneStoryById,
  AllStoryByEmail,
  newStory,
  updateStory,
  updateStoryContent,
  deleteStory,
};
