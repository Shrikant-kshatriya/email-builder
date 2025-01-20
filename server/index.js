const express = require('express');
const cors = require('cors');
const templateRoutes = require('./routes/templateRoutes.js');
const uploadRoutes = require('./routes/uploadRoutes.js');
const path = require('path');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// cors 
app.use(cors({
    origin: ['https://email-builder-frontend-tau.vercel.app','http://localhost:5173', '*'], 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'] 
 
})); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Shrikant Kshatriya!');
});

// routes
app.use('/template', templateRoutes);
app.use('/upload', uploadRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})