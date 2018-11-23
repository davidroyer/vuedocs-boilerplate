import * as vueDocs from 'vue-docgen-api'
import readdirp from 'readdirp'
import path from 'path'
import fs from 'fs-extra'

function isEmptyObj(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const descriptionItem = (item) => {
    return `
- \`${item.name}\`

  ${item.description}      
`;
}

const methodsIterator = (methods) => {
    return methods.map((method) => descriptionItem(method) )
}

function propsIterator(obj) {
    let propsContent = ``;
    for (const prop in obj) {
        const {
            description,
            type
        } = obj[prop]
        propsContent += `
- \`${prop}\` ***${type.name.capitalize()}***

  ${description}
`;
    }
    return propsContent
}

function methodsTemplate(methods) {
    if (methods.length > 0) {
        return `
## Methods
${methodsIterator(methods)}
`
    }
    else return ''
}

function defaultTemplate(title, obj) {
    if (isEmptyObj(obj)) return ''
    else {
        let content = `## ${title}`;

        for (const propKey in obj) {
            let item = {
                name: propKey,
                description: obj[propKey]['description']
            }
            content += descriptionItem(item);
        }
        return content        
    }
}


function createJsonFile(config, filename, content) {
    // console.log(content);
    try {
        // fs.writeFileSync("OUTPUT.json", JSON.stringify(content), "utf8");
        fs.outputFileSync(`${config.docsDir}/${filename}/documentation.json`, JSON.stringify(content), "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

function createMarkdownFile(config, filename, mdContent) {
    console.log(config.docsDir)
    try {
        fs.outputFileSync(`${config.docsDir}/${filename}/README.md`, mdContent, "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

function createMarkdownContent(content) {
    let {
        displayName,
        description,
        props,
        events,
        methods,
        slots
    } = content;

    let mdDocContent = `
# ${displayName}
${description}

## Props

${propsIterator(props)}

${defaultTemplate('Slots', slots)}

${defaultTemplate('Events', events)}

${methodsTemplate(methods)}
`;
    return mdDocContent;
}

function createComponentsNavFile(config, navArray) {
    const fileName = 'components-nav.json'
    try {
        fs.outputFileSync(`${config.jsonDir}/${fileName}`, JSON.stringify(navArray), "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}


const init = (config = {}) => {
    const {componentsDir, outputDir} = config
    const readDirSettings = {
        root: path.resolve(componentsDir),
        entryType: 'all'
    };
    console.log('root: ', readDirSettings.root)

    let componentsNavArray = [];

    readdirp(readDirSettings)
    .on('data', function (entry) {
        const { name, path } = entry
        // execute everytime a file is found in the providen directory
        if (entry.name.endsWith('.vue')) {
            let mdFileName = name.replace('.vue', '')
            let componentInfo = vueDocs.parse(`${readDirSettings.root}/${path}`)
            let mdContent = createMarkdownContent(componentInfo);
            
            createJsonFile(config, mdFileName, componentInfo)
            createMarkdownFile(config, mdFileName, mdContent);
            componentsNavArray.push(`/components/${mdFileName}/`)
        }
    })
    .on('warn', (warn) => { console.log("Warn: ", warn) })
    .on('error', (err) => { console.log("Error: ", err) })
    .on('end', () => { createComponentsNavFile(config, componentsNavArray) });
    // In this example, this variable will store all the paths of the files and directories inside the providen path
}

exports.init = init
export default init

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}