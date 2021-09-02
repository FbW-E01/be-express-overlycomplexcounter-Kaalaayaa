import express from 'express'

const app = express()

let counter = 0

app.get("/", (req, res) => {
    
    res.send(`Counter is at ${counter}`)

})

app.post("/inc", (req, res) => {
    counter++
    res.send(`${counter}`)
})

app.post("/dec", (req, res) => {
    counter--
    res.send(`${counter}`)

})

app.post("/die", (req, res) => {
    process.kill(process.pid, 'SIGTERM')
})

const port = 3031
app.listen(port, () => {
    console.log("Server ready")
})