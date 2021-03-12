const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/sponsor-profiles', require('./routes/api/sponsor-profiles'));
app.use('/api/pitcher-profiles', require('./routes/api/pitcher-profiles'));
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));