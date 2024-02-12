const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const db = require('./seed.js')
const loginRoute = require("./routes/login")
const registerRoute = require("./routes/login")


const port = process.env.PORT || 7272

app.use(cors());

app.use('/login', loginRoute);

app.use('/register', registerRoute);

app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.listen(port, () => {
    console.log("Server is listening on port ", port);
})