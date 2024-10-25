const express = require('express');
const userController = require(`../service/userService`)
require(`dotenv`).config();
const app = express();
const port = 3000;
app.use(express.json);
app.use(`/api/users`, userController);

app.get('/',(req, res)=>{

    res.send('!Hola mundo!');

})

app.listen(port, ()=>{

    console.log(`servidor corriendo en http://localhost:${port}`)
    
})
