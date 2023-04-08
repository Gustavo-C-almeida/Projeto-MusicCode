const express = require("express")
const bodyParser = require("body-parse")
const app = express()
app.use(bodyParser.json())
const musica = {}
contador = 0;
app.get ('/musica', (req, res)=>{
    res.send(musica)
})
app.put('/musica', (req, res)=>{
    contador++
    const{ letra,nome, autor } = req.body;
    musica[contador] = {
        contador, letra, nome, autor
    }
    res.status(201).send(musica[contador])
})

app.listen(4000,() =>{
    console.log("Musica. porta 4000")
})