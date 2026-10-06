const express = require('express');
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use('/students', studentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});