//  cordova-plugin-fullscreen
//  Copyright © 2016 filfat Studios AB
//  Repo: https://github.com/filfat-Studios-AB/cordova-plugin-fullscreen
//
//  The following code is
//  based on https://github.com/toluhta/Immersify/blob/master/src/android/ImmersiveMode.java
package com.filfatstudios.fullscreen;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.view.View;
import android.view.WindowManager;

public class Fullscreen extends CordovaPlugin {
    
	@Override
	public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
		if (action.equals("on")) {
			 cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    cordova.getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
                    cordova.getActivity().getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
                }
            });

            callbackContext.success();
            return true;
		}
		else if (action.equals("off")){
			cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    cordova.getActivity().getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
                }
            });

            callbackContext.success();
            return true;
		}
        
        callbackContext.error("Error: Unknown action!");
		return false;
	}
}