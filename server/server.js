const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const fs = require("fs");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

mongoose
  .connect(
    "mongodb+srv://yashhh:puX0Tz2jM65KjvnZ@cluster0.0ktinyn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3001);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
