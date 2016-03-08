module.exports = {
    name: 'damp-cove-84964',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        // MONGOLAB_URI: 'mongodb://heroku_4g5sbx8q:uhl3nuebluu6hisooc87b2gt4a@ds019498.mlab.com:19498/heroku_4g5sbx8q'
    },
    addons: {
        mongolab: {
            plan: 'mongolab:sandbox'
        }
    },
    collaborators: [
        'anders@andersos.net',
        'ok@rait.no'
    ],
    features: {
        'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false }
    },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'damp-cove-84964.herokuapp.com' ]
};
