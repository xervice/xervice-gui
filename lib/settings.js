
var _ = require('underscore');

module.exports = {
    scss: {
        scssPaths: [],

        setPaths: function (paths) {
            this.scssPaths = paths;
        },

        getPaths: function () {
            return this.scssPaths;
        }
    },
}