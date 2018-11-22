const componentsNav = require('../components-nav.json')
module.exports = [
    '/',
    '/guide/',
    {
      title: 'Components',
      collapsable: true,
      children: componentsNav
    },
    {
      title: 'Chapters',
      collapsable: true,
      children: [
        '/chapter2/',
        '/chapter3/'
      ]
    },
    {
      title: 'Sections',
      collapsable: false,
      children: [
        '/chapter2/',
        '/chapter3/'
      ]
    }    
  ];

  // sidebar: [
  //   {
  //     title: 'Components',
  //     collapsable: true,
  //     children: [
  //       '/components',
  //       '/components/VCard',
  //       '/components/VCheckbox',
  //       '/components/VTextarea',
  //     ]
  //   },
  //   {
  //     title: 'Group 2',
  //     children: [ /* ... */ ]
  //   }
  // ]