const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/public-sources', async (req, res) => {
  try {
    const response = await axios.get(
      'https://script.google.com/macros/s/AKfycbxHl_NJsQkOS31_S7UBf-YuRJOcmJZ3ISVlMQZCLoGlzdk4wXhO85bEa88qc9rXURgj/exec'
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Apps Script' });
  }
});

app.get('/api/holdings', async (req, res) => {
  try {
    const response = await axios.get(
      'https://script.google.com/macros/s/AKfycbxKBSTHFMbG8B_9Zbhpll0lC8qicRWw-k4ESoG09NkMCmy2fWmNOBPbHVS6nG-VUQHs/exec'
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Kraken API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy API running on port ${PORT}`);
});