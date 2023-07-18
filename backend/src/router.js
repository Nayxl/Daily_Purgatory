const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

const noteControllers = require("./controllers/noteControllers");

router.get("/note", noteControllers.browse);
router.get("/note/:id", noteControllers.read);
router.put("/note/:id", noteControllers.edit);
router.post("/note", noteControllers.add);
router.delete("/note/:id", noteControllers.destroy);

const letterControllers = require("./controllers/moodControllers");

router.get("/letter", letterControllers.browse);
router.get("/letter/:id", letterControllers.read);
router.put("/letter/:id", letterControllers.edit);
router.post("/letter", letterControllers.add);
router.delete("/letter/:id", letterControllers.destroy);

const pictureControllers = require("./controllers/pictureControllers");

router.get("/picture", pictureControllers.browse);
router.get("/picture/:id", pictureControllers.read);
router.put("/picture/:id", pictureControllers.edit);
router.post("/picture", pictureControllers.add);
router.delete("/picture/:id", pictureControllers.destroy);

module.exports = router;
