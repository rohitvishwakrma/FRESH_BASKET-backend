// import multer, { diskStorage } from "multer";
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });
// export const upload = multer({ storage: storage });
// config/multer.js
// config/multer.js
import multer from "multer";
import path from "path";
import os from "os";

// Use /tmp on Vercel (read-only everywhere else)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, os.tmpdir()); // ✅ always writable on Vercel
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });
