/**
 * @author -> Antonio Ruiz Benito
 * 
 * API de una calculadora
 */

// Importamos el modulo Express utilizando la funcion require()
const express = require('express')
// Creamos un objeto para poder trabajar con Express
const app = express()
// Guardamos el puerto en el que estaremos trabajando
const port = 8088;

// Configuramos el middleware para analizar el cuerpo JSON de las solicitudes
app.use(express.json());

// Creamos el endpoint de Bienvenida
app.get('/', (req, res) => {
    res.json({message: "Welcome to the calculator"});
});

// Endpoint sumar
// Utilizamos :num1 -> Para indicar que son parametros en la URL
app.get('/addNumbers/:num1/:num2', (req, res) => {
    // Captura los valores numericos de los parametros num1 y num2 desde la URL y los parseamos a entero
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    // Realizamos la operacion y la guardamos
    let result = num1 + num2;

    // Enviamos una respuesta en JSON
    res.json({data: result})

});

// Endpoint resta
// Utilizamos :num1 -> Para indicar que son parametros en la URL
app.get('/subtractNumbers/:num1/:num2', (req, res) => {
    // Captura los valores numericos de los parametros num1 y num2 desde la URL y los parseamos a entero
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    // Realizamos la operacion y la guardamos
    let result = num1 - num2;

    // Enviamos una respuesta en JSON
    res.json({data: result})

});

// Endpoint multiplicacion
// Utilizamos :num1 -> Para indicar que son parametros en la URL
app.get('/multNumbers/:num1/:num2', (req, res) => {
    // Captura los valores numericos de los parametros num1 y num2 desde la URL y los parseamos a entero
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    // Realizamos la operacion y la guardamos
    let result = num1 * num2;

    // Enviamos una respuesta en JSON
    res.json({data: result})

});

// Endpoint division
// Utilizamos :num1 -> Para indicar que son parametros en la URL
app.get('/divNumbers/:num1/:num2', (req, res) => {
    // Captura los valores numericos de los parametros num1 y num2 desde la URL y los parseamos a entero
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if(num2 === 0) { // Si num2 es igual a 0
        // Respondemos con un codigo de estado HTTP 400 y un mensaje de error
        res.status(400).json({error:"ZeroDivisionError"});

    } else {
        // Realizamos la operacion y la guardamos
        let result = num1 / num2;
        // Enviamos una respuesta en JSON
        res.json({data: result});
    }

});


// Iniciamos el servidor
app.listen(port, () => {
    console.log(`REST API Server running on http://localhost:${port}`);
});
