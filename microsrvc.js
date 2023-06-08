const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Microservices !')
})


app.post('/api/add', (req, res) => {

    // Checks the parameter & gets the variables in a json format
    const {add} = req.params
    var { a } = req.body
    var { b } = req.body

    // Check if the numbers are valid
    if(!a || !b){ res.status(418).send({ message : ' Numbers required for operation !' })}

    // returns the result in a json format
    res.send({ value : a + b })
})

app.post('/api/sub', (req, res) => {

    const {add} = req.params
    var { a } = req.body
    var { b } = req.body

    if(!a || !b){ res.status(418).send({ message : ' Numbers required for operation !' })}

    res.send({ value : a - b })
})

app.post('/api/mul', (req, res) => {

    const {add} = req.params
    var { a } = req.body
    var { b } = req.body

    if(!a || !b){ res.status(418).send({ message : ' Numbers required for operation !' })}

    res.send({ value : a * b })
})

app.post('/api/div', (req, res) => {

    const {add} = req.params
    var { a } = req.body
    var { b } = req.body

    if(!a || !b){ res.status(418).send({ message : ' Numbers required for operation !' })}

    res.send({ value : a / b })
})

app.listen(port, () => {
    console.log(`Appication listening on http://localhost:${port}`)
})