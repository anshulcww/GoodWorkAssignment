const express = require('express')
const cors = require('cors')
const files = require('./src/routes/files')

const app = express()

app.use(express.json());
app.use(cors())



//Test Api
app.get('/', (req, res) => res.send('Server is running .... '))

// Rest Api 
app.use('/get-meta-data', files)




const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on port `)
})