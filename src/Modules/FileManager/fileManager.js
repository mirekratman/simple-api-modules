"use strict";

import {unlink, open, readdir, writeFile} from 'fs/promises';

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
     * Write file to disk
     * @param file
     */
    async write(file, content) {
        let filehandle = null;
        const path = `${this.storageDir}/${file}`;

        try {
            filehandle = await open(path, 'r+');
            return await writeFile(content);
        }
        catch (err) {
            console.error(`Error occured while saving file : "${path}" !`, err);
        }
        finally {
            await filehandle?.close();
        }
    }

    /**
     * Read file from disk
     * @param file
     */
    async read(file) {
        console.log('read');

        /*
    finally {
            await filehandle?.close();
        }
*/
    }

    /**
     * List directory
     * @param dir
     * @returns {Promise<void>}
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
}
