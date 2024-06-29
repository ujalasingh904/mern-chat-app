import { User } from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, username, email, password, confirmPassword, gender } = req.body;
  try {
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password dont match" })

    const user = await User.findOne({ email })

    if (user)
      return res.status(400).json({ error: "User with this email already exist" })
 

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender == 'male' ? boyProfilePic : girlProfilePic
    })

    if (newUser) {

      generateTokenAndSetCookie(newUser._id, res)
      await newUser.save();
      
      const { password: hashedPassword2, ...rest } = newUser._doc
      res.status(201).json(rest) 
       
    } else {
      res.status(400).json({ error: "Invalid user Data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "User with this credentials already exist" });
  }
}

export const login = async (req, res) => {

  const { email, password } = req.body
  try {
    const validUser = await User.findOne({ email })

    const validPassword = bcryptjs.compareSync(password, validUser?.password || " ")

    if (!validPassword)
      res.status(400).json({ error: "Invalid credentials" })

    generateTokenAndSetCookie(validUser._id, res);
    const { password: hashedPassword, ...rest } = validUser._doc;

    res.status(200).json(rest) 

  } catch (error) {
    console.log("error in login controller", error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}
export const logout = async (req, res) => {
  try {
    res.clearCookie('access_token').status(200).json({ message: "User logout successfully" })
  } catch (error) {
    console.log("error in logout controller", error.message)
    res.status(500).json({ error: "Internal server error" })
  }
}