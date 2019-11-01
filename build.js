
const builder = require('electron-builder');

builder.build({
    config: {
        'appId': 'electron.dummy.mimemo',
        'productName': 'mimemo',
        mac: {
            'icon': 'icon-512.png'
        }
    }
});
