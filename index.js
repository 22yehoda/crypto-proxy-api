const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// טען את הקובץ JSON
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// הגש את הנתונים בנתיב /data
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
