const { object, string, number, assert, enums, optional } = require("superstruct");


const PostDetails = object({
    id: number(),
    title: string(),
    content: string(),
    category: optional(enums(["Sports", "Technology", "Business", "Religion"])),
  });

//
const createPost = async(req, res) => {
try {
    assert(req.body, PostDetails);
    return res.status(200).json({message:"Post Created Up successfully"})
} catch (error) {
    const { path, failures } = error;
    // Handle errors based on path and error messages
  const errorMessage = failures()
    console.log("Validation failed:", path, errorMessage);
    return res.status(400).json({Error: ` ${JSON.stringify(errorMessage)}`})
}
}

module.exports = {
  createPost
};