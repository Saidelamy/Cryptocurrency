import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const API_URL = "https://api.coingecko.com/api/v3";

// جلب بيانات العملات من CoinGecko عبر الخادم الوسيط
app.get("/api/coins", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 25,
        page: req.query.page || 1,
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// تشغيل الخادم على المنفذ 5000
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
