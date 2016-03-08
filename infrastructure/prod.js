var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
