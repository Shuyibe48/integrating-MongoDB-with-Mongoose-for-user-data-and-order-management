import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/users/user.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/users", UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
