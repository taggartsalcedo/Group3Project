const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", require("./api/index.cjs"));
// app.use("/auth", require("./auth"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

