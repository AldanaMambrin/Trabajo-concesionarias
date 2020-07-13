const fs = require ("fs")
const json = JSON.parse (fs.readFileSync ("./data/concesionarias.json" , "utf-8"))
const marcas = {
    index: (req, res) => {
        res.set ({ 'content-type' : 'text/plain; charset = utf-8'})
        res.write ("Estas son nuestras marcas disponibles: \n ") 
    }
}