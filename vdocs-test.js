const vDocs = require('./vdocs/dist/vdocs.min.js')
console.log('vDocs from new test file', vDocs)

vDocs.init({
    componentsDir: './src/components',
    outputDir: './docs/components'
})