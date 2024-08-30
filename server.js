

require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');


const app = express();


connectDB();


app.use(express.json());


app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/models_project', require('./src/routes/projectRoutes')); 
app.use('/api/seminar', require('./src/routes/seminarRoutes')); 
app.use('/api/chat',require('./src/routes/chatRoutes'));
;
app.use('/api/forum',  require('./src/routes/forumRoutes'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
