require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{


    /*
    app.get('/task{id}',(req,res)=>{
        const content = fs.readFileSync(filePath,"utf8");
        const task = JSON.parse(content);
        res.task
    })

    app.delete('/task/delete{id}',(req,res)=>{


    })
    app.post('/task/create',(req,res)=>{


    })
    app.put('/task/update',(req,res)=>{


    })
    */

})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,() => console.log(`Server started ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();