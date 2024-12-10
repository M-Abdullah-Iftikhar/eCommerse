const express = require("express");
const cors = require('cors');
const { connecttomongoose } = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ProductRouter = require('./Routes/Product');
const UserRouter = require("./Routes/User");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

// API routes
app.get("/", (req, res) => {
    res.send("Express app is running and other?");
});

// Products Routes
app.use("/", ProductRouter);

// User Router
app.use("/", UserRouter);

// Notification Routes

// Ensure Upload directory exists
const uploadDir = './Upload/Images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Image storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve images from Upload/Images
app.use('/images', express.static(uploadDir));

// Create endpoint for uploading picture
app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded",
        });
    }

    res.json({
        success: true,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Connect to Database
connecttomongoose().then(() => {
    console.log("Database Connected");
}).catch(() => {
    console.log("Database not Connected");
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
