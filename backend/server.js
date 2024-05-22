// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Skopiuj swój URI połączenia tutaj, zamieniając <username>, <password> i <cluster-url> na właściwe wartości
const mongoUri = 'mongodb+srv://gendi2006:<password>@csgoluck.a1zryz0.mongodb.net/?retryWrites=true&w=majority&appName=CsgoLuck ';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send('Error creating user');
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, 'secret');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
