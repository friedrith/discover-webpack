const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const dist = path.resolve(__dirname, '../dist')

app.get('/', (req, res) => {
  res.sendFile(path.join(dist, "index.html"));
})

app.use('/', (req, res) => {
  const filename = path.resolve(__dirname, '../dist'+req.url)
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats.size
  const timeout = fileSizeInBytes / 50
  setTimeout(() => {
    res.sendFile(filename);
    console.log('file loaded in ', timeout)
  }, timeout)
})


//app.use(express.static(path.resolve(__dirname, '../dist')))


app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
