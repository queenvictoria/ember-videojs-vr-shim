/* eslint-env node */
'use strict';
const path = require('path');

module.exports = {
  name: 'ember-videojs-vr-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    const baseDirectory = 'node_modules/videojs-vr/dist';

    app.import(path.join(baseDirectory, 'videojs-vr.css'));

    app.import({
      development: path.join(baseDirectory, 'videojs-vr.js'),
      production: path.join(baseDirectory, 'videojs-vr.min.js'),
    });
    app.import('vendor/shims/videojs-vr.js');
  },
};
