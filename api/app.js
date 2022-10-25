const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { unknownEndpoints, errorHandler } = require("./middleware/error");

const app = express();

dotenv.config({ path: "./config/config.env" });

mongoose.connect("mongodb://127.0.0.1:27017/shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch  (console.error);

//rouets
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const reviewRouter = require("./routes/review");
const orderRouter = require("./routes/order");
const categoryRouter = require("./routes/category");

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(cors());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/review", reviewRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(unknownEndpoints);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandle promise rejectio

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  //close the server
  server.close(() => process.exit(1));
});
