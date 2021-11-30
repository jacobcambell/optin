require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 9000;

app.post('/submit-form', (req, res) => {

})

app.listen(port, () => {
    console.log('Listening on port ' + port)
})