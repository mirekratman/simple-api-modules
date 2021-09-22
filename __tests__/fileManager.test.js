"use strict";
import {FileManager} from '../src/Modules/FileManager/fileManager.js';

/**
 * Presets
 * @type {string}
 */
const resourcesDir = './__tests__/resources/FileManager';
const fileListInput = ["file1.txt", "file2.txt", "file3.txt"];
const testFile1 = 'File1.txt';
const testFile1Content = 'File1 text';
const testFile = 'test.txt';
const testContent = 'Some text string';
const fm = new FileManager(resourcesDir);

describe("FileManager module", () => {

    it("Test exist functionality", async () => {
        expect.assertions(1);
        let exist = await fm.exist(testFile1);

        expect(exist).toEqual(true);
    });

    it("Test list functionality", async () => {
        expect.assertions(1);
        let list = await fm.list();

        expect(list).toEqual(fileListInput);
    });

    it("Test read functionality", async () => {
        expect.assertions(1);
        let content = await fm.read(testFile1);

        expect(content).toEqual(testFile1Content);
    });

    it("Test write functionality", async () => {
        expect.assertions(1);
        await fm.write(testFile, testContent);
        let wasWritten = await fm.exist(testFile);

        expect(wasWritten).toEqual(true);
    });

    it("Test delete functionality", async () => {
        expect.assertions(1);
        await fm.delete(testFile);
        let stillExist = await fm.exist(testFile);

        expect(stillExist).toEqual(false);
    });

});