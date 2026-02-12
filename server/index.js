
import dotenv from "dotenv";
import { app } from "./src/app.js";
// import db from "./src/config/db.js"
dotenv.config({path:"./env"});

const port = 4000; 

app.get("/", (req, res) => {
  res.send("ShopEase server running....");
});


app.listen(port, () => {
  console.log(`ShopEase app listening on port ${port}`);
});
