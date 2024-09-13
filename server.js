const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    const fileName = `${formData.componentName}_${Date.now()}.json`;
    await fs.writeFile(path.join(__dirname, 'demos', fileName), JSON.stringify(formData, null, 2));
    res.json({ success: true, fileName });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Failed to save form data' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});