cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-fs-plugin-fullscreen.Fullscreen",
        "file": "plugins/cordova-fs-plugin-fullscreen/www/Fullscreen.js",
        "pluginId": "cordova-fs-plugin-fullscreen",
        "clobbers": [
            "Fullscreen"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-fs-plugin-fullscreen": "1.0.2",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-background-mode": "0.7.2",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-crosswalk-webview": "2.3.0"
};
// BOTTOM OF METADATA
});