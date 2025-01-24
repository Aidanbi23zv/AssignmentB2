import { Selector } from 'testcafe';
const path = require('path');

fixture('Flag Data Exists')
    .page('file:///home/bi23zv/AssignmentB2/AssignmentB2/testing.html');

    test('Correct Page', async t => {
        await t
        const tableRows = Selector('table tbody tr');
    
        // Assert there is at least one row in the table
        await t
            .expect(tableRows.count).gt(0);

    });