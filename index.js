const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    const staffData = fs.readFileSync('./data/staff.json');
    const parsedStaffData = JSON.parse(staffData);

    const newArr = parsedStaffData.map(staff => {
        return { name: staff.name, color: staff.color }
    })
    res.send(staffData)
}
)

app.get('/')

app.listen(8084, () => {
    console.log('hey')
})