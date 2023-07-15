const express = require("express");
// const axios = require("axios");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const todosRoutes = require("./routes/todos");
// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes

app.use("/api/todos", todosRoutes);
// app.get("/api/data", async (req, res) => {
//   const endPoint = "https://jsonplaceholder.typicode.com/todos/10";
//   try {
//     const result = await axios.get(endPoint);
//     const js = result.data;
//     res.status(200).json(js);
//   } catch (error) {
//     res.status(500).json({ error: "Can not get document " });
//   }
// });

const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("connnected to mongo db and Listing to port number 4000 ");
    });
  })
  .catch((err) => console.log(err));
