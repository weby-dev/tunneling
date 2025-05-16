const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/add', (req, res) => {
  const a = parseFloat(req.body.a)
  const b = parseFloat(req.body.b)
  const sum = a + b
  res.send(sum.toString())
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
