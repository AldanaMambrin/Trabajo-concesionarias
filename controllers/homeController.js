const fs = require ("fs")
const json = JSON.parse (fs.readFileSync ( "./data/concesionarias.json", "utf-8")); 
let home = {
    home : (req, res) => {
        res.set ({"content-type" : "text/plain; charset=utf-8"  });
        res.write ("Bienvenidos a concesionaria DH");
        res.write ("\n\n");
        res.write ("Secursales: \n\n");
        json.forEach ((call)=> {
            res.write (call.sucursal)
        })

        res.end ()
            
    }
}
module.exports = home;