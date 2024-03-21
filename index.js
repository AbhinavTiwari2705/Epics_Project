const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); // Import the path module
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/home", (req, res) => {
//   res.send("Hello from Node API Server Updated");
res.render('home');
});

app.use(express.static(path.join(__dirname,'static')));

app.set('view engine','ejs');
app.set("views",path.resolve("./views"));

mongoose
  .connect(
    "mongodb+srv://abhinavtiwari2705:xpUudjx7zqR27ZCp@cluster0.mtgbjds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.use(authRoutes);
