cordova.define("cordova-plugin-swipe-smooth.Swipe", function(require, exports, module) { module.exports = {
    executeCommand: function(command, options = {}) {
        cordova.exec(null, null, "Swipe", command, [options]);
    },
    initialize: function(options = {}) {
        const {
            isEnable = true,
            toastShow = false,
            toastText = "Refreshing...",
            jsAction = "window.location.reload()",
            backgroundColor = "#ffffff",
            colors = ["#000000"],
            distance = 200
        } = options;

        return new Promise(function(successCallback, errorCallback) {
            cordova.exec(result => successCallback(result.toLowerCase() === "ok"), errorCallback, "Swipe", "initialize", [{
                isEnable,
                toastShow,
                toastText,
                jsAction,
                backgroundColor,
                colors,
                distance
            }]);
        });
    },
    enableSwipe: function(set = true) {
        this.executeCommand("enable", { enable: set });
    },
    enableToast: function(set = true) {
        this.executeCommand("enableToast", { enable: set });
    },
    setTextToast: function(toastText = "") {
        this.executeCommand("textToast", { toastText });
    },
    setJsAction: function(jsAction = "window.location.reload()") {
        this.executeCommand("jsAction", { jsAction });
    },
    setBackgroundColor: function(backgroundColor = "#ffffff") {
        this.executeCommand("backgroundColor", { backgroundColor });
    },
    setColorsAnimation: function(colors = ["#000000"]) {
        this.executeCommand("colors", { colors });
    },
    setDistance: function(distance = 200) {
        this.executeCommand("distance", { distance });
    }
};

});
