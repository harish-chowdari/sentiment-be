const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

//multer Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, require("path").resolve(__dirname, "..") + "/sentiment-be/upload");
    },
    filename: function (req, file, cb) {
        if (file.fieldname === "reviews") {
            cb(null, Date.now() + "-" + file.fieldname + ".csv");
        }
    },
});

const upload = multer({ storage: storage });

//middleware for product images uploading to multer
const reviewsUpload = upload.fields([{ name: "reviews", maxCount: 1 }]);

module.exports = {
    reviewsUpload,
};
