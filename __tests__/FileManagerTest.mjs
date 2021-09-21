"use strict";
import {FileManager} from '../src/Modules/FileManager/fileManager.js';

const resourcesDir = './resources/FileManager';

describe("FileManager module", () => {
    test("Test list functionality", () => {
        const fileListInput = [
            'file1.txt',
            'file2.txt',
            'file3.txt'
        ];


        let fm = FileManager(resourcesDir);

        console.log( fm.list() )

        //expect(filterByTerm(input, "link")).toEqual(output);

    });
});