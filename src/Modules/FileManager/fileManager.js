"use strict";

import {readFile, unlink, open, readdir, stat} from 'fs/promises';

/**
 * FileManager module
 * @description FileManager for module for Simple API bundle
 * @class FileManager
 */

export class FileManager {
    /**
     * Constructor
     * @param storageDir
     */
    constructor(storageDir) {
        this.storageDir = storageDir;
    }

    /**
     *
     * @param dir
     * @returns {Promise<string[] | Buffer[] | (string[] | Buffer[]) | module:fs.Dirent[]>}
     */
    async list(dir) {
        const path = `${this.storageDir}/${dir??''}`;

        try {
            return await readdir(path);
        }
        catch (err) {
            console.error(`Error occured while reading directory: "${path}" !`, err);
        }
    }

    /**
     * @param dir
     * @returns {Promise<string[] | Buffer[] | (string[] | Buffer[]) | module:fs.Dirent[]>}
     */
    async exist(fileName) {
        const path = `${this.storageDir}/${fileName}`;

        try {
            let exist = await stat(path);
            return Object.keys(exist).length !== 0??false;
        }
        catch (err) {
            return false;
        }
    }

    /**
     * @param dir
     * @returns {Promise<string[] | Buffer[] | (string[] | Buffer[]) | module:fs.Dirent[]>}
     */
    async fileStats(fileName) {
        const path = `${this.storageDir}/${fileName}`;

        try {
            return await stat(path);
        }
        catch (err) {
            console.error(`Error occured while checking file stats : "${path}" !`, err);
        }
    }

    /**
     * @param fileName
     * @param content
     * @returns {Promise<void>}
     */
    async write(fileName, content) {
        let filehandle = null;
        const path = `${this.storageDir}/${fileName}`;

        try {
            filehandle = await open(path, 'w+');
            await filehandle.writeFile(content);
        }
        catch (err) {
            console.error(`Error occured while saving file : "${path}" !`, err);
        }
        finally {
            await filehandle?.close();
        }
    }

    /**
     * @param fileName
     * @returns {Promise<Buffer | string | (string | Buffer)>}
     */
    async read(fileName) {
        const path = `${this.storageDir}/${fileName}`;

        try {
            return await readFile(path, "utf8");
        }
        catch (err) {
            console.error(`Error occured while reading file : "${path}" !`, err);
        }
    }

    /**
     * @param fileName
     * @returns {Promise<void>}
     */
    async delete(fileName) {
        const path = `${this.storageDir}/${fileName}`;

        try {
            await unlink(path);
        }
        catch (err) {
            console.error(`Error occured while deleting file : "${path}" !`, err);
        }
    }

}
