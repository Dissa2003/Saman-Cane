import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

// Load environment variables
dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Mongoose model
const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: String,
  description: String,
  uploadedAt: { type: Date, default: Date.now },
  category: String,
  price: String,
  inStock: Boolean,
});
const Image = mongoose.model("Image", imageSchema);

// Multer setup (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// POST /upload-image
app.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No image file provided" });

    // Upload to Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      { folder: "gallery" },
      async (error, result) => {
        if (error) return res.status(500).json({ error: "Cloudinary upload failed" });

        // Save metadata to MongoDB
        const image = new Image({
          url: result.secure_url,
          title: req.body.title || "",
          description: req.body.description || "",
          category: req.body.category || "",
          price: req.body.price || "",
          inStock: req.body.inStock === "true" || false,
        });
        const saved = await image.save();
        res.status(201).json(saved);
      }
    );
    stream.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /gallery
app.get("/gallery", async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /gallery/:id
app.delete("/gallery/:id", async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// PUT /gallery/:id
app.put("/gallery/:id", async (req, res) => {
  try {
    const updated = await Image.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        inStock: req.body.inStock,
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));