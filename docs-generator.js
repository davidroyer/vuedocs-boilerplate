var fs = require('fs')
var vueDocs = require('vue-docgen-api')
const componentsDirectory = './components'
const outputDirectory = './docs/components'
var filepath = './components/VCheckbox.vue';
let readdirp = require('readdirp');
const path = require('path')

let settings = {
    root: path.join(__dirname, componentsDirectory),
    entryType: 'all'
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
let allFilePaths = [];

// Iterate recursively through a folder
readdirp(settings)
    .on('data', function (entry) {
        const {
            name,
            path
        } = entry
        // execute everytime a file is found in the providen directory
        if (entry.name.endsWith('.vue')) {
            let mdFileName = name.replace('.vue', '.md')
            var componentInfo = vueDocs.parse(`${componentsDirectory}/${path}`)
            let mdContent = createMarkdownContent(componentInfo);
            createMarkdownFile(mdFileName, mdContent);
        }
    })
    .on('warn', function (warn) {
        console.log("Warn: ", warn);
    })
    .on('error', function (err) {
        console.log("Error: ", err);
    })
    .on('end', function () {
        console.log('Done!');
    });




function propsIterator(obj) {
    let propsContent = ``;
    for (const prop in obj) {
        const {description, type} = obj[prop]
        propsContent +=`- \`${prop}\` ***${type.name.capitalize()}***
    
    ${description}

`;
    }
    return propsContent
}

function defaultIterator(obj) {
    let content = ``;
    for (const propKey in obj) {

        let info = obj[propKey]
        content += `- \`${propKey}\`
${info.description}

`;
    }
    return content
}

function createJsonFile(content) {
    // console.log(content);
    try {
        fs.writeFileSync("OUTPUT.json", JSON.stringify(content), "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

function createMarkdownFile(filename, mdContent) {
    // console.log(content);
    try {
        fs.writeFileSync(`${outputDirectory}/${filename}`, mdContent, "utf8");
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

    mdDocContent = `# ${displayName}
${description}

## Props

${propsIterator(props)}

## Events

${defaultIterator(events)}

## Slots

${defaultIterator(slots)}
`;
    return mdDocContent;
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }