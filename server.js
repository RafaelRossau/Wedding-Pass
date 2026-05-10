const express = require("express");
const mysql = require("mysql2"); 
const path = require("path"); 

const app = express(); 


app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "", 
  database: "weddingpass", 
});

app.get("/guests", (req, res) => {
  db.query("SELECT * FROM guests", (err, results) => {
    if (err) throw err
    res.json(results);
  })
})

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/guest-management.html")
)