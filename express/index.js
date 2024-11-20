const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 8081

app.get('/', (req, res) => {
    res.send('Application is up and running')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

const customerRouter = require("./routers/CustomerRoutes")
app.use("/customers", customerRouter)