const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import the database module

const app = express();

app.use(cors());
app.use(express.json());


app.get('/db-test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});