const express = require('express');
const cors = require('cors');
const templateRoutes = require('./routes/templateRoutes.js');
const uploadRoutes = require('./routes/uploadRoutes.js');
const path = require('path');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// cors 
const allowedOrigins = [
    'https://email-builder-server-self.vercel.app',
    'http://localhost:5173'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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