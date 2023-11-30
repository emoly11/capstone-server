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

app.get('/tables', (_req, res) => {
    const tablesData = fs.readFileSync('./data/tables.json');
    const parsedTablesData = JSON.parse(tablesData);

    const tables = parsedTablesData.map(table => {
        return { color: table.color, id: table.id, width: table.width, height: table.height, top: table.top }
    })
    res.send(tablesData)
}
)

app.post('/staff', (request, response) => {
    const something = fs.readFileSync('./data/staff.json')
    const parseSomething = JSON.parse(something)

    const { name, color } = request.body;

    const newObject = {

        name: name,
        color: color,

    }

    response.json(newObject);
    parseSomething.push(newObject)
    fs.writeFileSync('./data/staff.json', JSON.stringify(parseSomething));
})

app.listen(8084, () => {
    console.log('hey')
})