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
      CROSS_COMPONENT.header('BBVA - Cards Login'),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'nicolas-cells-login-ui',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {},
            out: {
              home_validate_login: {
                bind: 'validate-login'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'nicolas-cells-login-dm',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              home_validate_login: {
                bind: 'validateLogin'
              }
            },
            out: {
              successful_login: {
                bind: 'successful-login'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-training-tsec-dm',
        render: 'litElement',
        properties: {
          host: CONFIG.host,
          user: CONFIG.ticketUser,
          consumerId: CONFIG.consumerId,
          cellsConnections: {
            in: {
              successful_login: {
                bind: 'loginAnonymously'
              }
            },
            out: {
              home_login_ticket_success: {
                bind: 'login-ticket-success',
                link: {
                  page: 'list-cards'
                }
              }
            }
          }
        }
      }
    ]
  };
  return base;
}