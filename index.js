const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// הנתיב שמחזיר את מקורות המידע הציבוריים (מהגיליון לדוגמה)
app.get('/api/public-sources', (req, res) => {
  const sources = {
    sources: [
      { name: "CoinDesk", url: "https://www.coindesk.com/" },
      { name: "Cointelegraph", url: "https://cointelegraph.com/" },
      { name: "CryptoJungle", url: "https://www.cryptojungle.co.il/" }
    ]
  };
  res.json(sources);
});

// הנתיב שמחזיר החזקות מדומות כאילו מ-Kraken
app.get('/api/holdings', (req, res) => {
  const holdings = {
    BTC: 0.015,
    ETH: 1.25,
    SOL: 20.7,
    USDT: 310.45
  };
  res.json(holdings);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
