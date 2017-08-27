# ViStriker
(Alpha version)

## Web Application URL
https://finalgalaxy.github.io/vistriker-FE/

## Compiling the APK
The APK you will build is developed using Cordova 7.0.0 w/ CrossWalk 2.3.0.

### Prerequirements
NPM: https://nodejs.org/en/download/
Android SDK: https://developer.android.com/studio/index.html
Cordova: `npm install -g cordova@7.0.0`

### Compiling phase
```
cd mobile_app
npm run build_android
```
- Path: C:\projects_folder\vistriker-FE\mobile_app\platforms\android\build\outputs\apk
- armv7 and x86 APK versions will be included

### Testing with AVD emulator installed
```
cd mobile_app
cordova run android
```
Remember to use `--device` flag if you want to force your application to run on a real device.
Target for this project is Android ICS 4.1.0 (minSdkVersion=16) thanks to CrossWalk.