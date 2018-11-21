const sidebarNav = require('./config/sidebar')
const componentsPath = './../../components'

module.exports = {
    title: 'Vue Plugin Starter - Docs Boilerplate',
    description: 'Working on a docs system to be used for Vue libraries and plugins',
    plugins: [
      ['@vuepress/register-components', {
        componentsDir: './components'
      }]
    ],      
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Components', link: '/components/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Examples', link: '/examples/' },
          { text: 'Chapter 2', link: '/chapter2/' },
          { text: 'External', link: 'https://google.com' },
        ],
        // sidebar: 'auto',
        // displayAllHeaders: true, // Default: false
        sidebar: sidebarNav,
        // sidebarDepth: 4
      }    
  }