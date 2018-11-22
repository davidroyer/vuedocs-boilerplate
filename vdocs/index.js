import {createMarkdownContent, createMarkdownFile, } from './core/generator'
import * as vueDocs from 'vue-docgen-api'
import readdirp from 'readdirp'
import path from 'path'

const componentsDirectory = './../components'
const readDirSettings = {
    root: path.join(__dirname, componentsDirectory),
    entryType: 'all'
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
let allFilePaths = [];

// Iterate recursively through a folder
readdirp(readDirSettings)
    .on('data', function (entry) {
        const {
            name,
            path
        } = entry
        // execute everytime a file is found in the providen directory
        if (entry.name.endsWith('.vue')) {
            let mdFileName = name.replace('.vue', '.md')
            var componentInfo = vueDocs.parse(`${readDirSettings.root}/${path}`)
            let mdContent = createMarkdownContent(componentInfo);
            createMarkdownFile(mdFileName, mdContent);
        }
    })
    .on('warn', (warn) => {
        console.log("Warn: ", warn);
    })
    .on('error', (err) => {
        console.log("Error: ", err);
    })
    .on('end', () => {
        console.log('Done!');
    });
