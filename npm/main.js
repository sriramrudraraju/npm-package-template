'use strict';

if (process.env.NODE_ENV === 'prodution') {
  module.exports = require('./index.min.js');
} else {
  module.exports = require('./index.js');
}