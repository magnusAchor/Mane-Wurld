## Swipe Plugin for Cordova

<img src="./images/1.gif"  width="30%" align="right" hspace="19" vspace="12" />

### Platform Support
-------------------------------------------------------
- Android

### Overview

The Swipe plugin for Cordova provides a convenient way to add swipe refresh functionality to your Cordova applications. This plugin allows users to refresh the content of the application by performing a swipe gesture.

### Features

- **Swipe Refresh**: Users can refresh the content of the application by swiping down on the screen.
- **Customization**: Developers can customize various aspects of the swipe refresh functionality such as enabling/disabling, setting background color, defining swipe distance, and specifying colors.
- **Toast Notification**: Option to display toast notifications before or after refreshing the content.
- **JavaScript Action**: Ability to define a custom JavaScript action to be executed upon swipe refresh.


### Installation

To install the Swipe plugin into your Cordova project, use the following command:

```bash
cordova plugin add cordova-plugin-swipe-smooth
```

### Usage

After installing the plugin, you can utilize its functionality in your JavaScript code. Below is an example of how to use the Swipe plugin:

```javascript
// Initialize the Swipe plugin
cordova.plugin.swipe.smooth.initialize().then(success => {
    if (success) {
        console.log("Swipe plugin initialized successfully");
    } else {
        console.error("Failed to initialize Swipe plugin");
    }
});

// Enable swipe refresh
cordova.plugin.swipe.smooth.enableSwipe();

// Customize options
cordova.plugin.swipe.smooth.setBackgroundColor("#f0f0f0");
cordova.plugin.swipe.smooth.setTextToast("Pull down to refresh");
cordova.plugin.swipe.smooth.setJsAction("customRefreshFunction()");
```

### API Reference

#### `initialize`

```javascript
/**
 *
 * Initializes the Swipe plugin with the specified options.
 *  
 * @param {Object}  { isEnable, toastShow, toastText, jsAction, backgroundColor, colors, distance }
 * @return {String} - cordova callback
 * 
 */
cordova.plugin.swipe.smooth.initialize({
    isEnable: true, 
    toastShow: true,
    toastText: "Refreshing...",
    jsAction: "window.location.reload()",
    backgroundColor: "#ffffff",
    distance: 200,
    colors: ["#000000"]
}).then(success => {
    if (success) {
        console.log("Swipe plugin initialized successfully");
    } else {
        console.error("Failed to initialize Swipe plugin");
    }
});
```

#### `enableSwipe`

```javascript
/**
 *
 * Enables swipe refresh functionality.
 *  
 * @param {Boolean} - default true
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.enableSwipe(true)

```

#### `enableToast`

```javascript
/**
 *
 * Enables or disables toast notifications.
 *  
 * @param {Boolean} - default true
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.enableToast(true)

```

#### `setTextToast`

```javascript
/**
 *
 * Sets the text for the toast notification.
 *  
 * @param {String} - default NULL
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.setTextToast()

```

#### `setJsAction`

```javascript
/**
 *
 * Sets the JavaScript action to be executed upon swipe refresh.
 *  
 * @param {String} - default "window.location.reload()"
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.setJsAction("window.location.reload()")

```

#### `setBackgroundColor`

```javascript
/**
 *
 * Sets the background color of the swipe refresh layout.
 *  
 * @param {String} - default "#ffffff"
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.setBackgroundColor("#ffffff")

```

#### `setColorsAnimation`

```javascript
/**
 *
 * Sets the colors for the swipe refresh animation.
 *  
 * @param {Array} - default ["#000000"]
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.setColorsAnimation(["#000000"])

```

#### `setDistance`

```javascript
/**
 *
 * Sets the distance in pixels the user must swipe to trigger a refresh.
 *  
 * @param {Int} - default 200
 * @return {String} - cordova callback
 * 
 */

cordova.plugin.swipe.smooth.setDistance(200)

```

### Usage with AdMob-Plus Plugin

If you are using the AdMob-Plus plugin to display ads, this plugin will not conflict when displaying banners. However, you may need to put some thought into preventing banners from being displayed repeatedly or stacked when the page is refreshed. You can try testing the plugin to use it simultaneously with AdMob-Plus.

### Screenshots

with admob plus banner top

<img src="./images/2.gif" width="180px"/>

with admob plus banner top offset 100

<img src="./images/3.gif" width="180px"/>

with admob plus banner bottom

<img src="./images/4.gif" width="180px"/>

with admob plus banner bottom offset 100

<img src="./images/5.gif" width="180px"/>


---

Feel free to customize the README according to your project's needs. This template provides a basic structure to help you get started with documenting your Swipe plugin for Cordova.
