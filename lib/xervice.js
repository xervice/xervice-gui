path = require('path');
fs = require('fs');
finder = require('fs-finder');
glob = require('glob');


module.exports = function (settings) {
    this.xervice = {
        settings: settings,
        modulePaths: [],
        files: [],

        getModulePaths: function () {
            modulePaths = [];
            self = this;
            this.settings.scss.getPaths().forEach(this.searchDirectorInPath);
            this.modulePaths = modulePaths;
            return this.modulePaths;
        },

        getFilesWithType: function(type) {
            this.files = [];

            this.getModulePaths().forEach(function (dir) {
                finder.from(dir).findFiles(type).forEach(function (file) {
                        self.files.push(file);
                    }
                );
            });

            return this.files;
        },

        addModuleIfPresentationExist: function (module) {
            presentation = module + '/Presentation/Theme';
            if (fs.existsSync(presentation) && fs.lstatSync(presentation).isDirectory()) {
                modulePaths.push(module);
            }
        },

        searchDirectorInPath: function (dir) {
            elements = glob.sync(dir + '/*');
            elements.forEach(self.addModuleIfPresentationExist);
        }
    };

    return this.xervice;
};