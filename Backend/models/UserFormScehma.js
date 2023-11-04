const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    BlogTitle: String,
    Blogdescription: String,
    BlogDate: String,
    Blogername: String,
    Blogbuttonurl: String,
    Blogimage: String,
  },
  {
    collection: "BlogPostData",
  }
);

mongoose.model("BlogPostData", UserDetailsSchema);

module.exports = mongoose.model("BlogPostData", UserDetailsSchema);
