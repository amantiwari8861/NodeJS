const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Optional: for password hashing

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Secret key for signing JWTs
const SECRET_KEY = "amantiwari8861";

// Sample user data (replace with a database in real applications)
const users = [
    { id: 1, username: 'aman', password: '$2a$10$.iq/rBYviUXy8g557qyy1OIhwGKGYQN.Rk8Ynic4oCGe4/DujcKW.', role: 'admin' } // Password is hashed
];

// 1. User Login Endpoint (Generate JWT)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

// 2. Middleware to Verify JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Token is in "Bearer <token>" format

    if (!token) return res.status(401).json({ message: 'Access token required' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user; // Add decoded user data to request
        next();
    });
}

// 3. Protected Route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//https://www.browserling.com/tools/bcrypt