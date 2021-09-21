"use strict";
import {FileManager} from '../src/Modules/FileManager/fileManager.js';

const resourcesDir = './__tests__/resources/FileManager';
const fileListInput = ["file1.txt", "file2.txt", "file3.txt"];
const testFile = 'test.txt';
const testContent = 'Some text string';

describe("FileManager module", () => {

    it("Test list functionality", async () => {
        let fm = new FileManager(resourcesDir);

        expect.assertions(1);
        let list = await fm.list();

        expect(list).toEqual(fileListInput);
    });

    it("Test write functionality", async () => {
        let fm = new FileManager(resourcesDir);

        expect.assertions(1);
        let list = await fm.write(testFile, testContent);

        expect(list).toEqual(fileListInput);
    });

});