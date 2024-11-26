const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 8081

app.use(express.urlencoded({ extended: true }));


let loggingMiddleware = (req, res, next) => {
    console.log("logging..");
    next();
};
let authMiddleware = (req, res, next) => {
    console.log("authenticating...");
    next();
    // res.status(401).send("get lost");
};
app.use(loggingMiddleware);
app.use(authMiddleware);

app.get('/', (req, res) => {
    console.log("processing/finalizing req.");
    res.send('Application is up and running')
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});

