const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('api is running successfully');
});

app.use('/api/auth', userRoutes);
app.use('/api/employee', employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
