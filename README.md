Xervice-Gui
==============

Installation
-------------
```
npm install xervice-gui
```


Usage
------------
var Xervice = require('xervice-gui');
settings = require('xervice-gui/lib/settings');

settings.scss.setPaths(
    [
        path.resolve('path', 'to', 'my', 'modules');
    ]
);

scssFiles = Xervice(settings).getFilesWithType('*.scss');