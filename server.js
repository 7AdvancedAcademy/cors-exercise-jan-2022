const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const postmodel = require('./mongoose/model')
const bodyParser = require('body-parser');
const students = require('./students/student')
const app = express()
require('dotenv').config()

app.use(bodyParser.json());


mongoose.connect(process.env.mongo_URI, {
    useNewUrlParser: true
});

app.use(cors({
    origin: '*'

}))


PORT = process.env.PORT

const Database = {}


Database.students = students;


app.get('/', (req, res) => {
    res.send('welcome to the coders backend server')
})
app.get('/api/students', cors(), async (req, res) => {
    if (req.query.limit) {
        res.json({
            students: Database.students.slice(0, req.query.limit)
        });
    }

    const results = await postmodel.create(students);
    // await postmodel.find({}, (err, data) => {
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.json(data)
    //     return;
    // });

    res.json(results)
});

app.get('/api/student/:search', (req, res) => {
    if (req.params.search) {
        const student = students.filter((student) => {
            console.log(req.params.search)
            return student.name.includes((req.params.search).toString())
        });

        if (student.length >= 1) {
            res.json({
                student
            })

        } else {
            res.json({
                student: [{
                    status: "successful",
                    data: [],
                    desc: `NO student name matches '${req.params.search}'.  Error might be from your spellings or casing...`
                }]
            })
            return;
        }
    }
})

app.post('/api/students', (req, res) => {
    console.log(req.body)

})

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`))