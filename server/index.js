
import dotenv from "dotenv";
import { app } from "./src/app.js";
dotenv.config();

const port = 4000; 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`ShopEase app listening on port ${port}`);
});
