const { authenticate } = require('@feathersjs/authentication').hooks;
const notAllowed = require('../../hooks/not-allowed');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [notAllowed()],
    update: [notAllowed()],
    patch: [notAllowed()],
    remove: [notAllowed()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
