const path = require('path');
const fs = require('fs');
const { pipeline } = require('stream');
const csv = require('csvtojson');

pipeline(
    fs.createReadStream(path.resolve('./csv', 'example.csv')),
    csv(),
    fs.createWriteStream(path.resolve('./csv', 'example.txt')),
    (error) => {
        if (error) {
            console.log('Error', error);
        }
    }
)