class Serviceapi 
{
    Somar(num1,num2) 
    {
        if(isNaN(num1) || isNaN(num2))
        {
            throw new Error ("Informe apenas numeros")
        }
        return num1 + num2
    }

    Sub(num1,num2) 
    {
        if(isNaN(num1) || isNaN(num2))
            {
                throw new Error ("Informe apenas numeros")
            }
        return num1 - num2
    }

}

module.exports = new Serviceapi()