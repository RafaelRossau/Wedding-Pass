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

app.delete("/guests/:phone", (req, res) => {
  const { phone } = req.params;
  db.query("DELETE FROM guests WHERE guest_phone = ?", [phone], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao deletar" });
    }
    res.json({ message: "Personagem removido com sucesso!" });
  });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/guest-management.html")
)