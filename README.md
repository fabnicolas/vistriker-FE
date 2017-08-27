# ViStriker
(Alpha version)
ViStriker is a web and mobile application that lets you browse YouTube videos of your favorite channels with a different UI. The goal is to provide a better user experience with 

## Web Application URL
https://finalgalaxy.github.io/vistriker-FE/

The website uses Angular 4.0 w/ TypeScript in production mode as frontend.

Node.js is running as backend to serve YouTube metadata. Check https://github.com/Finalgalaxy/vistriker-BE for server details.

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
- Path: {{ROOT_REPO}}\mobile_app\platforms\android\build\outputs\apk
- armv7 and x86 APK versions will be included

### Testing with AVD emulator installed
```
cd mobile_app
cordova run android
```
Remember to use `--device` flag if you want to force your application to run on a real device.

Target for this project is Android ICS 4.1.0 (minSdkVersion=16) thanks to CrossWalk.