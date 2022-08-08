'use- strict';

const header  = (text) => ({
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: text,
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  }
);

const common = CONFIG => {
  return [
    header()
  ];
};

module.exports = {
  common: common(),
  header
}