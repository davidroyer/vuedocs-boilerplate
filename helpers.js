export function propsIterator(propsArray) {
    let propsContent = ``;
    propsArray.forEach(function (prop) {
        propsContent += `### \`${prop.name}\`
  ${prop.description}
  
  `;
    });
    return propsContent;
}

export function createMarkdownFile(mdContent) {
    // console.log(content);
    try {
        fs.writeFileSync("OUTPUT.md", mdContent, "utf8");
    } catch (e) {
        console.log("Cannot write file ", e);
    }
}

export function createMarkdownContent(content) {
    let {
        name,
        description,
        props,
        events,
        methods,
        slots
    } = content;
    mdDocContent = `# ${name}
  **${description}**
  
  ## Props
  
  ${propsIterator(props)}
  
  ## Events
  
  ${propsIterator(events)}
  
  ## Slots
  
  ${propsIterator(slots)}
  `;
    return mdDocContent;
}