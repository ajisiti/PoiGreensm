export default function handler(req, res) {
  const VERIFY_TOKEN = "EA...W9uC"; // token yang kamu masukkan di Facebook (verifikasi token)
  
  // Verifikasi webhook (GET)
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.status(403).send("Verification failed");
    }
  }

  // Menangani pesan (POST)
  else if (req.method === "POST") {
    console.log("Pesan masuk:", req.body);
    res.status(200).send("EVENT_RECEIVED");
  }

  else {
    res.status(404).send("Not found");
  }
}
