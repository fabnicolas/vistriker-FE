# ViStriker [Alpha version!]
ViStriker is a web and mobile application that lets you browse YouTube videos of your favorite channels with a different UI. The goal is to provide a better user experience for the end-user and to support additional upcoming features.

This project is built for Web and Mobile (Hybrid Application) from a SINGLE codebase.

## Web Application
https://finalgalaxy.github.io/vistriker-FE/

The website uses Angular 4.0 w/ TypeScript in production mode as frontend.

Node.js is running as backend to serve YouTube metadata. Check https://github.com/Finalgalaxy/vistriker-BE for server details.

## Android APK
The APK you will build is developed using Cordova 7.0.0 w/ CrossWalk 2.3.0.
To install the mobile application, you can:
- Download it from Aptoide: https://vistriker.it.aptoide.com/
- Follow next instructions to build an armv7/x86 APK for your mobile device.

## Prerequirements for Web and Mobile

### Web/Mobile
NPM: https://nodejs.org/en/download/

Angular-CLI: `npm install -g @angular/cli`

### Mobile
Android SDK: https://developer.android.com/studio/index.html

Cordova: `npm install -g cordova@7.0.0`

### Backend
Check this repository for backend for this project: https://github.com/Finalgalaxy/vistriker-BE

## Running and producing your Web app
Do you want to run this project made in Angular4/TypeScript? Here you go.

### Dependencies install
Run `npm install` to install dependencies.
Run also `npm install -g angular-http-server` if you want to run production files after build process.

### Run Web app
To run locally app:
```
npm start
```
And go to http://localhost:4200/ . Done!

### Build Web app for production use
To build it into HTML/CSS/JS resources for production, use:
```
npm run build
```
Files will be inside `dist` folder. You can deploy them on a static web server that supports HTML, CSS and JS. Nice!

Want to try the production build locally? Easy: install `npm install -g angular-http-server` and then:
```
cd dist
angular-http-server -p 4200
```

Enjoy!

### Optimize Web app (OPTIONAL)
```
npm run minify
```
This compresses `vendor.bundle.js` in `dist` folder thanks to UglifyJS in a more lightweight version, `vendor.bundle.min.js`. After doing this, remove old file and rename `vendor.bundle.min.js` in `vendor.bundle.js`.

Usually this is necessary because bundle sizes weights 3-10 MB, which is absolutely NOT cool for a Web application as it requires a very strong connection. Thanks to `minify` process, you can reduce it to across 1 MB size. Contributes to improve `minify` to reduce additional KBs are welcome!

## Building your APK and updating it
Do you want to build your APK using Cordova, CrossWalk and Angular4/TypeScript production files? Just follow those instructions.

### Dependencies install
```
cd mobile_app
npm install
```
All dependencies will be installed. Also remind, as said in prerequirements section, to install Cordova 7.0.0.

### Build APK
```
cd mobile_app
npm run build_android
```
Process `build_android` executes Cordova in order to produce your APK.
- You can find your APKs at the following path: `{{ROOT_REPO}}\mobile_app\platforms\android\build\outputs\apk`
- armv7 and x86 APK versions will be built; for newer devices, you should distribute armv7 (I tested on Huawei P8 Lite and Samsung Galaxy S4 i9505).

### Update your APK from new Angular codebase
1) First run, in the root of this project:
```
npm run build_mobile
```
So `angular-cli` can produce inside `mobile_app/www`, without destroy the folder, those files: `index.html`, CSS styles and Angular JS bundles and maps.

1.1) You can (optionally) run:
```
npm run minify_mobile
```
This compresses `vendor.bundle.js` in `mobile_app/www` thanks to UglifyJS in a more lightweight version, `vendor.bundle.min.js`. After doing this project, remove old file and rename `vendor.bundle.min.js` in `vendor.bundle.js`.

2) Add the following scripts to `mobile_app/www/index.html` before `</body>` tag:
```javascript
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="cordova_supporter.js"></script>
```

So Cordova can use its plugin to provide additional features to the application, such as:
- Background mode
- CrossWalk support (Custom WebView to run Angular)
- Fullscreen immersive mode

3) Build your app:
```
cd mobile_app
npm run build_android
```

Enjoy!

### Testing with AVD emulator installed
```
cd mobile_app
cordova run android
```

Remember to use `--device` flag if you want to force your application to run on a real device.

Target for this project is Android ICS 4.1.0 (minSdkVersion=16) thanks to CrossWalk.

NOTICE: On ICS emulator (Nexus 4 API 16) I couldn't be able to play YouTube videos using `<iframe>`. This however works on a real device, which is what matters for production use.

### GitHub pages
You can deploy this Angular 4 web application on GitHub pages this way:
```
git subtree push --prefix dist origin gh-pages
```

In some cases, you would need to force a push to gh-pages. This isn't possible directly. Here's the workaround:
```
git checkout master
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
```