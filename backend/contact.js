const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3003;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "mana_shop",
});

db.connect((err) => {
  if (err) {
    console.error("Помилка підключення до бази даних:", err);
  } else {
    console.log("Підключено до бази даних");
  }
});

app.use(bodyParser.json());
app.use(cors());

app.post("/api/contactDate", (req, res) => {
  const { name, phone, coment } = req.body;

  if (!name || !phone || !coment) {
    return res
      .status(400)
      .json({ error: "Будь ласка, заповніть всі поля форми." });
  }

  const sql =
    "INSERT INTO contacts_data (name, phone, coment) VALUES (?, ?, ?)";
  db.query(sql, [name, phone, coment], (err, result) => {
    if (err) {
      console.error("Помилка при вставці даних:", err);
      return res.status(500).json({ error: "Помилка при збереженні даних" });
    }

    console.log("Дані успішно збережено в базі даних");
    res.status(200).json({ message: "Дані успішно збережено в базі даних" });
  });
});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
