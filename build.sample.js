
const builder = require('electron-builder');

builder.build({
    config: {
        // TODO: appId & productName fix
        'appId': 'electron.dummy.app',
        'productName': 'dummy-app'
    }
});
