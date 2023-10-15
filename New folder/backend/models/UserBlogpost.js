const mongoose = require("mongoose");

const UserBlogpostSchema = new mongoose.Schema(
  {
    BlogTitle: String,
    Blogername: String,
    BlogDate: String,
    Blogdescription: String,
    Blogbuttonurl: String,
    Blogimage: String,
  },
  {
    collection: "UserBlogpost",
  }
);

module.exports = mongoose.model("UserBlogpost", UserBlogpostSchema);
