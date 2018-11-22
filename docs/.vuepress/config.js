const sidebarNav = require('./config/sidebar')
const componentsPath = './../../components'

module.exports = {
    title: 'VueDocs',
    description: 'Working on a docs system to be used for Vue libraries and plugins',
    plugins: [
      ['@vuepress/register-components', {
        componentsDir: '.src/components'
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
        // sidebar: [
        //   '/',
        //   '/guide/',
        //   {
        //     title: 'Components',
        //     collapsable: true,
        //     children: [
        //       '/components/',
        //       '/components/VCard.html',
        //       '/components/VCheckbox.html',
        //       '/components/VTextarea.html',
        //     ]
        //   },
        //   '/chapter2/',
        //   '/chapter3/'          
        // ]
        // displayAllHeaders: true, // Default: false
        sidebar: sidebarNav,
        // sidebarDepth: 4
      },

      /**
       * Allows the use of using aliases in markdown
       */
      configureWebpack: {
        resolve: {
          alias: {
            '@images': './../images'
          }
        }
      }      
  }