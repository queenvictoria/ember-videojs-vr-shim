/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-videojs-vr-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    const baseDirectory = 'node_modules/videojs-vr/dist';

    app.import(path.join(videojsDirectory, 'video-js.css'));

    app.import({
      development: path.join(baseDirectory, 'video-vr.js'),
      production: path.join(baseDirectory, 'videojs-vr.min.js'),
    });
    app.import('vendor/shims/videojs-vr.js');
  },
};
