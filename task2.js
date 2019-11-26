import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream';
import csv from 'csvtojson';

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