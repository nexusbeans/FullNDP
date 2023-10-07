const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const config = require("./authorization/config");
const employeeDataItems = require("./models/employeeModel");
const User = require("./models/userDetails");
const ImageDetails = require("./models/imageDetails");
const UserBlogpost = require("./models/UserBlogpost");

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL || config.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error("Database connection error:", e);
  });

const JWT_SECRET = process.env.JWT_SECRET || config.JWT_SECRET;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user; // You can access the user data in your route handlers
    next();
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/blogpostdata", async (req, res) => {
  const { BlogTitle, Blogername, BlogDate, Blogdescription, Blogbuttonurl,Blogimage } = req.body;

  const UserBlogpostdata = new UserBlogpost({
    BlogTitle,
    Blogdescription,
    BlogDate,
    Blogername,
    Blogbuttonurl,
    Blogimage
  });

  try {
    await UserBlogpostdata.save();
    console.log("Blog post data saved successfully");
    res.status(200).send("Blog post data saved successfully");
  } catch (error) {
    console.error("Error saving blog post data:", error);
    res.status(500).send("Error saving blog post data");
  }
});


app.post("/employee", async (req, res) => {
  const namereg = req.body.namereg;
  const emailreg = req.body.emailreg;
  const phonereg = req.body.phonereg;
  const active = req.body.active;

  const employeeData = new employeeDataItems({
    namereg,
    emailreg,
    phonereg,
    active,
  });

  try {
    await employeeData.save();
    console.log("Employee data saved successfully");
    res.status(200).send("Employee data saved successfully");
  } catch (error) {
    console.error("Error saving employee data:", error);
    res.status(500).send("Error saving employee data"); 
  }
});


app.post("/data-items", async (req, res) => {
  const { username, userdetails } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      username,
      userdetails,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "10",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData",authenticateToken, async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.get("/epmDataget", async (req, res) => {
  // const epmDatagetUser = await employeeDataItems.find({});
  // console.log(epmDatagetUser, "empdata get by api");
  try {
    const epmDatagetUser = await employeeDataItems.find({});
    res.send({ status: "ok", empdata: epmDatagetUser });
  } catch (error) {
    console.log(error);
  }
});

// app.get("/blogdatasend", async (req, res) => {
//   try {
//     const UserBlogpostfront = await UserBlogpost.find();
//     res.send({ status: "ok", UserBlogpostget: UserBlogpostfront });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/blogdatasend", async (req, res) => {
  UserBlogpost.find().then((UserBlogpostfound) => res.json(UserBlogpostfound));
});


app.post("/epmDatagetdelete", async (req, res) => {
  const { userid } = req.body;
  try {
    employeeDataItems.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { useriddelete } = req.body;
  try {
    User.deleteOne({ _id: useriddelete }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});


app.post("/upload-image", async (req, res) => {
  const { image } = req.body;
  try {
    await ImageDetails.create({ image });
    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

app.get("/get-image", async (req, res) => {
  try {
    await ImageDetails.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

app.get("/paginatedUsers", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalUser = allUser.length;
  results.pageCount = Math.ceil(allUser.length / limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results);
});
