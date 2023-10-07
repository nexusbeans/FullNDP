const express = require("express");
const router = express.Router();

const Images = require("../models/imageDetails"); // Import your Images model here

// Upload an image
router.post("/upload-image", async (req, res) => {
  const { base64 } = req.body;
  try {
    await Images.create({ image: base64 });
    res.status(201).json({ Status: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: "error", data: error });
  }
});

// Get all images
router.get("/get-image", async (req, res) => {
  try {
    const images = await Images.find({});
    res.status(200).json({ status: "ok", data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error" });
  }
});

module.exports = router;
