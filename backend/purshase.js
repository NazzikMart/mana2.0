const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Підключення до бази даних MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "usbw",
    database: "mana_shop",
  });

db.connect((err) => {
  if (err) {
    console.error('Помилка підключення до бази даних:', err);
    return;
  }
  console.log('Підключено до бази даних MySQL');
});

// Створення таблиці для зберігання замовлень
const createOrdersTable = `
  CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    deliveryMethod VARCHAR(255) NOT NULL,
    npOffice VARCHAR(255),
    paymentMethod VARCHAR(255) NOT NULL,
    totalSum DECIMAL(10, 2) NOT NULL
  )
`;

db.query(createOrdersTable, (err, result) => {
  if (err) {
    console.error('Помилка створення таблиці:', err);
    return;
  }
  console.log('Таблиця "orders" створена');
});

// Дозволяємо обробку JSON-даних
app.use(bodyParser.json());

// Маршрут для збереження замовлення
app.post('/api/orders', (req, res) => {
  const { name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum } = req.body;

  if (!name || !phoneNumber || !deliveryMethod || !paymentMethod || !totalSum) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const insertOrderQuery = `
    INSERT INTO orders (name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(insertOrderQuery, [name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum], (err, result) => {
    if (err) {
      console.error('Помилка при вставці замовлення:', err);
      return res.status(500).json({ error: 'Помилка при обробці запиту' });
    }

    console.log('Замовлення створено успішно');
    res.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Сервер прослуховує на порту ${port}`);
});