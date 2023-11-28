const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    const staffData = fs.readFileSync('./data/staff.json');
    const parsedStaffData = JSON.parse(staffData);

    const staffArr = parsedStaffData.map(staff => {
        return { name: staff.name, color: staff.color }
    })
    res.send(staffData)
}
)

app.get('/', (_req, res) => {
    const tablesData = fs.readFileSync('./data/tables.json');
    const parsedTablesData = JSON.parse(tablesData);

    const tablesArr = parsedTablesData.map(tables => {
        return { color: tables.color, id: tables.id, width: tables.width, height: tables.height, top: tables.top }
    })
    res.send(tablesData)
}
)

app.listen(8084, () => {
    console.log('hey')
})