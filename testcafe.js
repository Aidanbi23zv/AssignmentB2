import { Selector } from 'testcafe';
const path = require('path');

fixture('Flag Data Exists')
    .page('file:///home/bi23zv/AssignmentB2/AssignmentB2/testing.html');

    test('Data Exists in Table', async t => {
        const tableRows = Selector('table tbody tr');

        await t
        .expect(tableRows.count).gt(0);

    });