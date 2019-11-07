module.exports = [
  {
    name: `layoutType`,
    type: 'list',
    message: 'Which layout do you want to use?',
    default: 0,
    choices: [
      {
        name: 'Full App (Shell, Side Navigation, …)',
        value: 'full',
        short: "Full",
      },
      {
        name: 'None',
        value: 'none'
      }
    ],
  },
  {
    name: `virtualizedListSupportType`,
    type: 'list',
    message: 'Install support for fd-virtualized-list?',
    default: 0,
    choices: [
      {
        name: 'Yes – including support for IE 11',
        value: 'with-ie11',
        short: "Yes – with IE 11",
      },
      {
        name: 'Yes – without support for IE 11',
        value: 'without-ie11',
        short: "Yes – without IE 11",
      },
      {
        name: 'No',
        value: 'none'
      }
    ],
  },
];
