'use- strict';
module.exports = CONFIG => {
  const CROSS_COMPONENT = require('./common/_cross_component');
  const base = {
    template: {
      tag: 'cells-template-paper-drawer-panel',
      familyPath: '@cells-components/cells-template-paper-drawer-panel',
      render: 'litElement',
      properties: {
        mode: 'seamed',
        zones: [
          'app__header',
          'app__main',
          'app__transactional',
          'app__overlay'
        ]
      }
    },
    components: [
      CROSS_COMPONENT.header('BBVA - Cards List'),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'nicolas-cells-cards-ui',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              list_cards_success: {
                bind: 'cardsInfo'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'nicolas-cells-cards-dm',
        render: 'litElement',
        properties: {
          host: CONFIG.host,
          cellsConnections: {
            in: {
              '__bridge_page_list-cards': {
                bind: 'getCards'
              }
            },
            out: {
              list_cards_success: {
                bind: 'getCardsSuccess'
              }
            }
          }
        }
      },
    ]
  };
  return base;
}