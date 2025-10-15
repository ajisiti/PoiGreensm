import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// Cek server aktif
app.get("/", (req, res) => {
  res.send("🚖 Taxi Queue Bot aktif dan siap menerima pesan WhatsApp ✅");
});

// Endpoint Webhook WhatsApp
app.post("/webhook", (req, res) => {
  try {
    console.log("Pesan masuk:", req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error("Error:", err);
    res.sendStatus(500);
  }
});

export default app;
