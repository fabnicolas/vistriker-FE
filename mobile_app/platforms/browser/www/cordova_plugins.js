cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-fs-plugin-fullscreen/www/Fullscreen.js",
        "id": "cordova-fs-plugin-fullscreen.Fullscreen",
        "pluginId": "cordova-fs-plugin-fullscreen",
        "clobbers": [
            "Fullscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
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
}
// BOTTOM OF METADATA
});