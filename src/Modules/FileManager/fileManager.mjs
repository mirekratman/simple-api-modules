"use strict";

import {fs} from 'fs';

/**
 * FileManager module
 * @description FileManager for module for Simple API bundle
 * @class FileManager
 */

class FileManager {
    /**
     * Constructor
     * @param storageDir
     */
    constructor(storageDir) {
        this.storageDir = storageDir;
    }

    write(file) {

    }

    read(file) {

    }

    async list(dir) {
        let path = '$this.storageDir/$dir';
        await fs.readdir(path, (err, files) => {
            return files;
        });
    }

}


export default FileManager;