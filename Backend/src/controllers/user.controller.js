import asyncHandler from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js";
import ApiError  from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const registerUser = asyncHandler( async (req, res) => {
  console.log("Req : " + req.body);
  
  const { username, password, email } = req.body;

  if ([username, password, email].some((field) => field?.trim() == "")) {
      throw new ApiError(400, "All fileds are required");
  }

  const existedUser = await User.findOne({
      $or:[{username},{email}]
  })

  if (existedUser) {
      throw new ApiError(400,"User with email or username already exists")
  }

  const user = await User.create({
      username,
      email,
      password
  })

  const createdUser = await User.findById(user._id).select(
      "-password"
  )

  if (!createdUser) {
      throw new ApiError(500, "something went wrong while registering user")
  }

  return res.status(200).json(new ApiResponse(200,createdUser, "user registered successfully!"))

})

export {registerUser}
