import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages } from "../controllers/message.controller.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
// {"_id":{"$oid":"676146ca5d999cefcc1c2e8b"},"fullName":"ivan","username":"zolo","password":"1337228","gender":"male","profilePic":"https://avatar.iran.liara.run/public/boy?username=zolo","__v":{"$numberInt":"0"}}
