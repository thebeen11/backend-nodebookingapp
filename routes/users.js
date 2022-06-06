import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// router.get("/checkauth", verifyToken, (req, res, next) =>{
//     res.send("you are logged")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) =>{
//     res.send("you are logged and can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) =>{
//     res.send("Hello admin")
// })
// UPDATE
router.put("/:id",verifyUser, updateUser);
// DELETE
router.delete("/:id",verifyUser, deleteUser);
// GET
router.get("/:id",verifyUser, getUser);
// GET ALL
router.get("/",verifyAdmin, getUsers);

export default router