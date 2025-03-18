package smooth.plugins.cordova.swipe;

import org.apache.cordova.*;
import org.apache.cordova.engine.SystemWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.os.Handler;
import android.graphics.Color;

public class Swipe extends CordovaPlugin {
    private SwipeRefreshLayout swipeLayout;
    private boolean isEnable;
    private boolean toastShow;
    private String toastText;
    private String jsAction;
    private int backgroundColor;
    private int distance;
    private int[] colors;
    private SystemWebView systemWebView;

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        JSONObject options = args.getJSONObject(0);
        switch (action) {
            case "initialize":
                initialize(options, callbackContext);
                return true;
            case "enable":
            case "backgroundColor":
            case "colors":
            case "distance":
                enable(action, options, callbackContext);
                return true;
            case "enableToast":
            case "textToast":
            case "jsAction":
                handleOption(action, options, callbackContext);
                return true;
            default:
                return false;
        }
    }

    private void initialize(JSONObject options, final CallbackContext callbackContext) {
        cordova.getActivity().runOnUiThread(() -> {
            try {
                if (swipeLayout != null) {
                    callbackContext.success();
                    return;
                }

                isEnable = options.getBoolean("isEnable");
                toastShow = options.getBoolean("toastShow");
                toastText = options.getString("toastText");
                jsAction = options.getString("jsAction");
                distance = options.getInt("distance");
                backgroundColor = Color.parseColor(options.getString("backgroundColor"));
                colors = convertHexColorsToColorInt(options.getJSONArray("colors"));

                systemWebView = (SystemWebView) webView.getView();
                ViewGroup parentLayout = (ViewGroup) systemWebView.getParent();
                swipeLayout = new SwipeRefreshLayout(cordova.getActivity());
                RelativeLayout relativeLayout = new RelativeLayout(cordova.getActivity());

                parentLayout.removeView(systemWebView);
                swipeLayout.addView(relativeLayout);
                relativeLayout.addView(systemWebView);

                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(
                        LinearLayout.LayoutParams.MATCH_PARENT,
                        LinearLayout.LayoutParams.MATCH_PARENT);
                swipeLayout.setLayoutParams(layoutParams);

                RelativeLayout.LayoutParams webViewLayoutParams = new RelativeLayout.LayoutParams(
                        RelativeLayout.LayoutParams.MATCH_PARENT,
                        RelativeLayout.LayoutParams.MATCH_PARENT);
                systemWebView.setLayoutParams(webViewLayoutParams);

                setupSwipeRefreshLayout();
                parentLayout.addView(swipeLayout);
                callbackContext.success();
            } catch (JSONException e) {
                callbackContext.error("Error initializing Swipe: " + e.getMessage());
            }
        });
    }

    private void enable(String action, JSONObject options, final CallbackContext callbackContext) {
        cordova.getActivity().runOnUiThread(() -> {
            try {
                if (swipeLayout != null) {
                    switch (action) {
                        case "enable":
                            isEnable = options.getBoolean("enable");
                            break;
                        case "backgroundColor":
                            backgroundColor = Color.parseColor(options.getString("backgroundColor"));
                            break;
                        case "colors":
                            colors = convertHexColorsToColorInt(options.getJSONArray("colors"));
                            break;
                        case "distance":
                            distance = options.getInt("distance");
                            break;
                    }
                    setupSwipeRefreshLayout();
                    callbackContext.success();
                } else {
                    callbackContext.error("SwipeRefreshLayout is not initialized");
                }
            } catch (JSONException e) {
                callbackContext.error("Error initializing Swipe: " + e.getMessage());
            }
        });
    }

    private void handleOption(String action, JSONObject options, final CallbackContext callbackContext) {
        try {
            switch (action) {
                case "enableToast":
                    toastShow = options.getBoolean("enable");
                    break;
                case "textToast":
                    toastText = options.getString("text");
                    break;
                case "jsAction":
                    jsAction = options.getString("jsAction");
                    break;
            }
            callbackContext.success();
        } catch (JSONException e) {
            callbackContext.error("Error initializing Swipe: " + e.getMessage());
        }
    }

    private final SwipeRefreshLayout.OnRefreshListener swipe = () -> {
        if (swipeLayout != null) {
            swipeLayout.setRefreshing(true);
            showToast(toastShow, toastText);
            webView.loadUrl("javascript:" + jsAction);

            new Handler().postDelayed(() -> {
                if (swipeLayout.isRefreshing()) {
                    swipeLayout.setRefreshing(false);
                }
            }, 1000);
        }
    };

    private int[] convertHexColorsToColorInt(JSONArray hexColors) throws JSONException {
        int length = hexColors.length();
        int[] colors = new int[length];
        for (int i = 0; i < length; i++) {
            colors[i] = Color.parseColor(hexColors.getString(i));
        }
        return colors;
    }

    private void showToast(boolean show, String text) {
        if (show) {
            Toast.makeText(cordova.getActivity(), text, Toast.LENGTH_SHORT).show();
        }
    }

    private void setupSwipeRefreshLayout() {
        swipeLayout.setOnRefreshListener(swipe);
        swipeLayout.setEnabled(isEnable);
        swipeLayout.setColorSchemeColors(colors);
        swipeLayout.setProgressBackgroundColorSchemeColor(backgroundColor);
        swipeLayout.setDistanceToTriggerSync(distance);

        // Ensure systemWebView is not null before using it
        if (systemWebView != null) {
            systemWebView.setOnScrollChangeListener(new View.OnScrollChangeListener() {
                @Override
                public void onScrollChange(View v, int scrollX, int scrollY, int oldScrollX, int oldScrollY) {
                    swipeLayout.setEnabled(scrollY == 0); // Enable SwipeRefresh only at top
                }
            });
        }
    }
}