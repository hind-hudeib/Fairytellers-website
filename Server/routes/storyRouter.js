const express = require("express");
const router = express.Router();
const orderController = require("../controllers/storyController");

router.get("/all_stories", orderController.allStorys);
router.get("/all_order_Not_active", orderController.allStorysNotActive);
router.get("/one_story_by_Id/:id", orderController.oneStoryById);
router.get("/all_story_by_email", orderController.AllStoryByEmail);
router.post("/new_story", orderController.newStory);
router.put("/updatestory/:id", orderController.updateStory);
router.put("/updatestorycontent/:id", orderController.updateStoryContent);

router.delete("/order/:id", orderController.deleteStory);

module.exports = router;
