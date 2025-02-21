const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Ініціалізуємо Twilio клієнт
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post("/register", (req, res) => {
  const { name, phone, password } = req.body;
  console.log("Отримані дані:", req.body);

  // Тут можеш додати логіку для обробки даних, наприклад, збереження в базу даних
  // або відправка SMS за допомогою Twilio

  res.json({ message: "Реєстрація успішна!" });
});

app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});
