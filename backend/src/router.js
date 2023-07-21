const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");

router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.put("/category/:id", categoryControllers.edit);
router.post("/category", categoryControllers.add);
router.delete("/category/:id", categoryControllers.destroy);

const noteControllers = require("./controllers/noteControllers");

router.get("/note", noteControllers.browse);
router.get("/note/:id", noteControllers.read);
router.put("/note/:id", noteControllers.edit);
router.post("/note", noteControllers.add);
router.delete("/note/:id", noteControllers.destroy);

const moodControllers = require("./controllers/moodControllers");
const pictureControllers = require("./controllers/pictureControllers");

router.get("/mood", moodControllers.browse);
router.get("/mood/:id", moodControllers.read);
router.put("/mood/:id", moodControllers.edit);
router.post("/mood", moodControllers.add);
router.delete("/mood/:id", moodControllers.destroy);

router.get("/picture", pictureControllers.browse);
router.get("/picture/:id", pictureControllers.read);
router.put("/picture/:id", pictureControllers.edit);
router.post("/picture", pictureControllers.add);
router.delete("/picture/:id", pictureControllers.destroy);

router.get("/picture/:id/mood/:id", moodControllers.browse);
router.get("/picture/:id/mood/:id", moodControllers.read);

router.get("/mood/:id/picture/:id", pictureControllers.browse);
router.get("mood/:id/picture/:id", moodControllers.read);

module.exports = router;
