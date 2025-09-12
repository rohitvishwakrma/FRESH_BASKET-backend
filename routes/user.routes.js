// import express from "express";
// import {
//   checkAuth,
//   loginUser,
//   logout,
//   registerUser,
//   updateNotifications,
//   getNotificationSettings,
// } from "../controller/user.controller.js";
// import authUser from "../middlewares/authUser.js";
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/is-auth", authUser, checkAuth);
// router.get("/logout", authUser, logout);
// router.put("/notifications", authUser, updateNotifications);
// router.get("/notifications", authUser, getNotificationSettings);

// export default router;
import express from "express";
import { checkAuth, loginUser, logout, registerUser, updateNotifications, getNotificationSettings } from "../controller/user.controller.js";
import authUser from "../middlewares/authUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/is-auth", authUser, checkAuth);
router.get("/logout", authUser, logout);
router.put("/notifications", authUser, updateNotifications);
router.get("/notifications", authUser, getNotificationSettings);

export default router;
