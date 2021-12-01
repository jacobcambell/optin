require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 9000;

import { formDataCheck } from './middleware'
import { pg } from './knex'
import cors from 'cors'

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(cors())
}


app.post('/submit-form', formDataCheck, async (req, res) => {
    // Add records to database
    await pg('submissions').insert({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
        zip_code: req.body.zip_code,
        country: req.body.country
    })

    res.json({ message: 'You got it' })
})

app.listen(port, () => {
    console.log('Listening on port ' + port)
})