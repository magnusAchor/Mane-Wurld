// Wait for the deviceready event before using any of Cordova's device APIs.
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("✅ Device is ready!");
    console.log("Cordova Version: " + cordova.version);
    console.log("Platform: " + cordova.platformId);

    if (cordova?.plugin?.swipe?.smooth) {
        console.log("✅ Swipe plugin detected. Initializing...");

        // Initialize Swipe Plugin
        cordova.plugin.swipe.smooth.initialize().then(success => {
            if (success) {
                console.log("✅ Swipe plugin initialized successfully");

                // Enable swipe refresh
                cordova.plugin.swipe.smooth.enableSwipe();
                console.log("✅ Swipe refresh enabled");

                // Customize options
                cordova.plugin.swipe.smooth.setBackgroundColor("#f0f0f0");
                console.log("🎨 Background color set");

                cordova.plugin.swipe.smooth.setTextToast("Pull down to refresh");
                console.log("📝 Toast message set");

                cordova.plugin.swipe.smooth.setJsAction("customRefreshFunction()");
                console.log("🔄 Custom refresh function set");
            } else {
                console.error("❌ Failed to initialize Swipe plugin");
            }
        }).catch(err => {
            console.error("❌ Swipe plugin initialization error:", err);
        });

    } else {
        console.error("❌ Swipe plugin not available. Ensure it is installed correctly.");
    }
}

// Define the function to execute when the page is refreshed
// Define the function to execute when the page is refreshed
function customRefreshFunction() {
    console.log("🔄 Attempting to refresh...");

    let currentPath = window.location.pathname;
    let blockedKeywords = ["/album", "/playlist", "/artists", "/songs", "/likes"];

    // Check if any blocked keyword is part of the current URL
    let isBlockedPage = blockedKeywords.some(keyword => currentPath.includes(keyword));

    if (isBlockedPage) {
        console.log("🚫 Soft refresh on:", currentPath);

        // Use popstate event to simulate re-render without hard reload
        window.dispatchEvent(new Event("popstate"));
    } else {
        console.log("✅ Hard refresh:", currentPath);
        location.reload();
    }
}

