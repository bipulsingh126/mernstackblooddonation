 import express from 'express';
 import { loginUser, registerUser } from '../controllers/auth.js';
 
const router = express.Router();

// resister router
router.post("/login", loginUser)

//login router
router.post("/register", registerUser)


export{router};



