'use strict';

const packageJson = require('../package.json');

module.exports = {
    debug: false,
    port: process.env.PORT,
    defaultPath: '/',
    staticBasePath: `//${packageJson.name}.surge.sh/`,
    limit: 5
};
