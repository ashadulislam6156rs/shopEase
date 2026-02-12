import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3087,
});

db.connect(function (err) {
    if (err) {
        console.log("Error: database not connect ", err); 
      throw err;
  }
  console.log(`Database Connected is port: ${process.env.PORT}`);
});
