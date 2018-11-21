
module.exports = [
    '/',
    '/guide/',
    {
      title: 'Components',
      collapsable: true,
      children: [
        '/components/VCard.html',
        '/components/VCheckbox.html',
        '/components/VTextarea.html',
      ]
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