const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectToMongoose = require("./api/database/connection.database.js");
const routes = require("./api/routes/index.js");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;
const uri = process.env.MONGOOSE_URI;

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
  connectToMongoose(uri);
});
