const Serviceapi = require("../services/api")

class Controllerapi
{

    Somar(req,res) 
    {
        console.log('oi')
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = Serviceapi.Somar(num1,num2)

            res.status(200).json({ "O resultado é": result })
        } catch (e) {
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }


    Sub(req,res) 
    {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = Serviceapi.Sub(num1,num2)
            res.json("O resultado é:", result)
        } catch (e) {
            console.erro(e)
            res.status(400).json({msg: e.message})
        }
    }



}

module.exports = new Controllerapi()