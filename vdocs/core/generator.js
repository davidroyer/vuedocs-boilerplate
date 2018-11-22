import fs from 'fs'
let outputDirectory = './docs/components'

export function propsIterator(obj) {
    let propsContent = ``;
    for (const prop in obj) {
        const {
            description,
            type
        } = obj[prop]
        propsContent += `- \`${prop}\` ***${type.name.capitalize()}***
    
    ${description}

`;
    }
    return propsContent
}

export function defaultIterator(obj) {
    let content = ``;
    for (const propKey in obj) {

        let info = obj[propKey]
        content += `- \`${propKey}\`
${info.description}

`;
    }
    return content
}

export function createJsonFile(content) {
    // console.log(content);
    try {
        fs.writeFileSync("OUTPUT.json", JSON.stringify(content), "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

export function createMarkdownFile(filename, mdContent) {
    // console.log(content);
    try {
        fs.writeFileSync(`${outputDirectory}/${filename}`, mdContent, "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

export function createMarkdownContent(content) {
    let {
        displayName,
        description,
        props,
        events,
        methods,
        slots
    } = content;

    let mdDocContent = `# ${displayName}
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

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}