const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const JobData = require("./model/JobSchema");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// var user = "JobData"

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error Connecting in Database");
    } else {
      console.log("Database Successfully Connected");
    }
  }
);

app.get("/", (req, res) => {
  JobData.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json("err", err));
});

app.post("/post", function (req, res) {
  console.log(req.body);
  const { name, location, orderdate, qty, jobid, status } = req.body;
  const newJobData = new JobData({
    name,
    location,
    orderdate,
    qty,
    jobid,
    status,
  });

  newJobData
    .save()
    .then(() => res.json("Data Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));

  // res.send({ status: 'SUCCESS' });
});

app.listen(5000, () => {
  console.log("The Server is up and running");
});
