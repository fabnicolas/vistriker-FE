# ViStriker [Alpha version!]
ViStriker is a web and mobile application that lets you browse YouTube videos of your favorite channels with a different UI. The goal is to provide a better user experience for the end-user and to support additional upcoming features.

This project is built for Web and Mobile (Hybrid Application) from a SINGLE codebase.

This is a MEAN stack project. It actually uses:
- MongoDB database (Still ongoing);
- Express (Check backend repository) for API for our frontend to provide YouTube metadata and other informations;
- Angular4 w/ TypeScript as frontend for our Web application, in particular Angular Material which uses Material Design Lite directives for UI components;
- Node.js (Check backend repository) for web server to provide API access.

## Web Application
https://finalgalaxy.github.io/vistriker-FE/

![ViStriker Yamato Animation Screenshot](http://i.imgur.com/QSGQ747.png)

This deploy is ES5-based. It is actually built in production mode thanks to Angular 4/TypeScript, which applications are written using ES6 standards and then transpiled using polyfills.

Node.js is running as backend to serve YouTube metadata. Check backend repository for server details.

This is, of course, an application frontend.

If you would like to check application backend, check this repository: https://github.com/Finalgalaxy/vistriker-BE .

## Android APK
https://vistriker.it.aptoide.com/

![ViStriker Mobile App](http://i.imgur.com/H5URApR.png)

The APK you will build is developed using Cordova 7.0.0 w/ CrossWalk 2.3.0.

To install the mobile application, you can:
- Follow next instructions to build an armv7/x86 APK to install on any Android device (From ICS).
- Or download the aptoide release at the link above.

## Prerequirements for Web and Mobile

### Web/Mobile
Install NPM from: https://nodejs.org/en/download/

Then use NPM to install Angular-CLI: `npm install -g @angular/cli`

### Mobile
Install Android SDK: https://developer.android.com/studio/index.html

Install Cordova through NPM: `npm install -g cordova@7.0.0`

### Backend
Check backend repository for details (Link is at beginning of README).

## Run and make your Web app production-ready
Do you want to run this project that is made in Angular4/TypeScript? Here you go.

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
Then go to http://localhost:4200/vistriker-FE/ .

Enjoy!

### Change 'vistriker-FE' string
I suggest to change `/vistriker-FE/` as you need with `/` or `/YOUR_REPOSITORY_NAME`.

Change it in `package.json` inside `build` script. Change it also in `404.html` (If you need this file) at the following row:
```html
<meta http-equiv="refresh" content="0;URL='/vistriker-FE/'"></meta>
```
`404.html` and `index.html` redirect scripts are needed to fix a bug regarding some static web servers, for example GitHub pages. Routes, as by default, don't work in Angular 4 when you refresh the page, in some contexts. I added https://github.com/csuwildcat/sghpa hack to this project to fix this bug. Unfortunately I don't find a way to automatically copy BASE_HREF_URL inside 404.html --- That's why you must change it manually.

### Optimize Web app (OPTIONAL)
```
npm run minify
```
This compresses `vendor.bundle.js` in `dist` folder thanks to UglifyJS in a more lightweight version, `vendor.bundle.min.js`. After doing this, remove old file and rename `vendor.bundle.min.js` in `vendor.bundle.js`.

Usually this is necessary because bundle sizes weights 3-10 MB, which is absolutely NOT cool for a Web application as it requires a very strong connection. Thanks to `minify` process, you can reduce it to across 1 MB size. Contributes to improve `minify` to reduce additional KBs are welcome!

### Deploy Web app on GitHub pages
GitHub offers a service called GitHub pages where you can host static files such as HTML, CSS and JS files.

This is a very good, free solution for Angular 4 deployment.

You can deploy this Angular 4 Web application on GitHub pages this way:
```
git subtree push --prefix dist origin gh-pages
```
Then go to http://YOUR_GITHUB_NICKNAME.github.io/YOUR_REPOSITORY_NAME/ . Here you go!

In some cases, you would need to force a push to gh-pages. This could not be possible directly.

Here's the workaround:
```
git checkout master
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
```

## Build Android APK and update it
Do you want to build your APK using Cordova, CrossWalk and Angular4/TypeScript production files? Just follow those instructions.

### Dependencies install
```
cd mobile_app
npm install
```
All dependencies will be installed. Also remind to install Cordova 7.0.0 as pointed in prerequirements section above this README.

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
Doing this, `angular-cli` will produce inside `mobile_app/www`, those files: `index.html`, CSS styles and Angular JS bundles and maps; this is done without destroy the folder, which contains Cordova support files to add features to your Android APK.

1.1) You can (optionally) run: `npm run minify_mobile`.
It does the same as `npm run minify`, but inside `mobile_app/www`. Check minify section above.

2) Add the following scripts to `mobile_app/www/index.html` before `</body>` tag:
```javascript
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="cordova_supporter.js"></script>
```

So Cordova uses its plugins to provide additional features to the application, such as:
- Background mode;
- CrossWalk support (Custom WebView to run Angular);
- Fullscreen immersive mode.

3) Build your APK:
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

### Using YouTube Desktop controls in Cordova
Thanks to https://stackoverflow.com/a/32925922 , I managed to enable YouTube Desktop controls in APK.

In case you want to update android platform... remind to apply those changes.

Usually it's not necessary to update android platform in Cordova.

However, use the following User Agent string: `Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20120101 Firefox/33.0`.