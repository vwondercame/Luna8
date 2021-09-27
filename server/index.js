const cors = require('cors');
const express = require('express')
const app = express()
const port = 8080

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Luna is listening at http://localhost:${port}`)
})