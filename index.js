const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({
        extended: true,
}))
app.use(express.json());

let url = "mongodb://localhost:27017"
mongoose.connect(url)
.then(()=>{
    console.log("conectamos no banco! uhuul!!")
app.get('/', (rep,res)=>{
        res.json({message: "Olá, Mundo!"});
})
}).catch((err)=>{
    console.log(err)
})

app.get('/');

app.listen(3000)