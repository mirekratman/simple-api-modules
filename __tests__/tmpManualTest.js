"use strict";
import {FileManager} from '../src/Modules/FileManager/fileManager.js';
const resourcesDir = './resources/FileManager';
let fm = new FileManager(resourcesDir);

console.log(
    await fm.exist('file1.txt')
);

/*
console.log(
    await fm.list('')
)

console.log(
    await fm.read('test.txt')
);
fm.write('test.txt','aaaaaa');
*/