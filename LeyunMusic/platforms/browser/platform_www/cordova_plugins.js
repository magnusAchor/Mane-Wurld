cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-swipe-smooth/www/smooth.js",
        "id": "cordova-plugin-swipe-smooth.Swipe",
        "pluginId": "cordova-plugin-swipe-smooth",
        "clobbers": [
            "cordova.plugin.swipe.smooth"
        ]
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/Promise.js",
        "id": "cordova-promise-polyfill.Promise",
        "pluginId": "cordova-promise-polyfill",
        "runs": true
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
        "id": "cordova-promise-polyfill.promise.min",
        "pluginId": "cordova-promise-polyfill"
    },
    {
        "file": "plugins/cordova-plugin-admob-free/www/admob.js",
        "id": "cordova-plugin-admob-free.AdMob",
        "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
            "admob",
            "AdMob",
            "plugins.AdMob"
        ]
    },
    {
        "file": "plugins/admob-plus-cordova/www/admob.js",
        "id": "admob-plus-cordova.AdMob",
        "pluginId": "admob-plus-cordova",
        "clobbers": [
            "admob"
        ]
    },
    {
        "file": "plugins/admob-plus-cordova/src/browser/AdMobProxy.js",
        "id": "admob-plus-cordova.AdMobProxy",
        "pluginId": "admob-plus-cordova",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-camera": "8.0.0",
    "cordova-plugin-geolocation": "5.0.0",
    "cordova-plugin-swipe-smooth": "1.0.1",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-admob-sdk": "0.24.1",
    "cordova-plugin-admob-free": "0.27.0",
    "cordova-plugin-androidx": "3.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "admob-plus-cordova": "2.0.0-alpha.19"
}
// BOTTOM OF METADATA
});