var Xervice = require('../lib/xervice');
var path = require('path');
var assert = require('assert');

settings = require('../lib/settings');

settings.scss.setPaths(
    [
        __dirname
    ]
);


describe(
    'Test module finder to test *.file files',
    function () {
        it('should found two example files', function () {
            var files = Xervice(settings).getFilesWithType('*.file');

            assert.deepEqual(
                files,
                [
                    __dirname + '/Test/Presentation/Theme/recurs/another.file',
                    __dirname + '/Test/Presentation/Theme/test.file'
                ],
                'Test files NOT found'
            )
        });
    }
);

