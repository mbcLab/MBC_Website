import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import { config } from "dotenv";
import schema from "./models/schema.js";

config();

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongodb, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", async () => {
  const check = (await schema.findOne().exec()) ?? false;
  if (!check) {
    console.log("[!] Creating new database entry.");
    new schema().save();
  }
  console.log("Database Connected...");
});

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
