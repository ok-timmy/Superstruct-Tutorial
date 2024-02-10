const { object, string, number, assert } = require("superstruct");

const UserDetails = object({
  id: number(),
  firstName: string(),
  lastName: string(),
  userName: string(),
});

//Create User
const createUser = async (req, res) => {
  try {
    assert(req.body, UserDetails, "User data is invalid");
    return res.status(200).json({message:"User Signed Up successfully"})
  } catch (error) {
    const { path, failures } = error;
    // Handle errors based on path and error messages
  const errorMessage = failures()
    console.log("Validation failed:", path, errorMessage);
    return res.status(400).json({Error: ` ${JSON.stringify(errorMessage)}`})
  }
};

const LoginDetails = object({
    userName: string()
})
// Signin User
const loginUser = async (req, res) => {
try {
    assert(req.body, LoginDetails)
    return res.status(200).json({message:"User Signed Up successfully"})
} catch (error) {
    const { path, failures } = error;
    // Handle errors based on path and error messages
  const errorMessage = failures()
    console.log("Validation failed:", path, errorMessage);
    return res.status(400).json({Error: ` ${JSON.stringify(errorMessage)}`})
}
};

module.exports = {
  createUser,
  loginUser,
};
