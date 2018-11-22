const vDocs = require('./vdocs/dist/vdocs.min.js')
console.log('vDocs from new test file', vDocs)

vDocs.init({

    /**
     * The directory for the library of components that have jsdoc comments and need to be parsed into markdown
     */
    componentsDir: './src/components',

    /**
     * The directory where the generated markdown files should go
     */
    docsDir: './docs/components',

    /**
     * The directory to store the `JSON` file that will be created
     * consisting of the `Array` of nav links for the components 
     */
    jsonDir: './docs/.vuepress',
})