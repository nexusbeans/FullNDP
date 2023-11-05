const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/UserForm");
const routesLogin = require("./routes/UserLoginForm");

// Load environment variables from a .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using async/await
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application on database connection error
  }
};

// Define a function to start the server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
  });
};

app.use("/api", routes);
app.use("/api", routesLogin);

// Initialize the application
const initializeApp = async () => {
  await connectToMongoDB();
  startServer();
};
app.get("/api", (req, res) => {
  res.send("server status online");
});
// Start the application
initializeApp();
