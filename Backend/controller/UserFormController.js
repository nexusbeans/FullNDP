const BlogPostData = require("../models/UserFormScehma");

module.exports.getUserData = async (req, res) => {
  try {
    const UserDatas = await BlogPostData.find();
    if (UserDatas.length === 0) {
      res.status(404).json({ msg: "No data found in the database." });
    } else {
      res.status(200).json(UserDatas);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.saveUserData = async (req, res) => {
  try {
    const { BlogTitle, Blogdescription ,BlogDate,Blogername,Blogbuttonurl,Blogimage} = req.body;
    const data = await BlogPostData.create({
      BlogTitle,
      Blogdescription,
      BlogDate,
      Blogername,
      Blogbuttonurl,
      Blogimage,
    });
    // console.log("Saved Successfully...");
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, msg: "Something went wrong!" });
  }
};


module.exports.bannersave = async (req, res) => {
  try {
    const { bannerSaveData } = req.body;
    const data = await BlogPostData.create({
      bannerSaveData,
     
    });
    console.log(bannerSaveData,"data getimage")
    console.log("Saved Successfully...");
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, msg: "Something went wrong!" });
  }
};



module.exports.updateUserData = async (req, res) => {
  const { fname, lname } = req.body;
  const { id } = req.params; // Assuming the ID is passed as a route parameter

  console.log("backend", fname);
  console.log("backend id", id);

  try {
    // Use findByIdAndUpdate to update a document by its ID
    const updatedUserData = await BlogPostData.findByIdAndUpdate(id, {
      fname,
      lname,
    });

    if (updatedUserData) {
      res.status(200).send("Updated Successfully...");
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, msg: "Something went wrong!" });
  }
};

module.exports.deleteUserData = async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await BlogPostData.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User data deleted successfully" });
  } catch (error) {
    console.error("Error deleting user data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
