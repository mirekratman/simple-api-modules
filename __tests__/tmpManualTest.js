"use strict";
import {FileManager} from '../src/Modules/FileManager/fileManager.js';

const resourcesDir = './resources/FileManager';

let fm = new FileManager(resourcesDir);

console.log(
    await fm.list('')
)

console.log(
    await fm.write('aaa.txt','aaaaaa')
)
