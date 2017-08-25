# cordova-plugin-fullscreen
Interactive fullscreen mode.

[cordova-plugin-fullscreen on NPM](https://www.npmjs.com/package/cordova-fs-plugin-fullscreen)


## Platforms
* Windows 10+
* Android 4.4+

## Installation
```
cordova plugin add https://github.com/filfat-Studios-AB/cordova-plugin-fullscreen
cordova prepare
```

## Methods
Turn fullscreen mode on
```javascript
Fullscreen.on();
```

Turn fullscreen mode off
```javascript
Fullscreen.off();
```

Feature detect to avoid crash or errors on unsupported platforms:
```javascript
document.addEventListener('deviceready', function () {
	if(typeof Fullscreen !== 'undefined'){
		//It's safe to use Fullscreen here	
	}
});
```

## Misc
* Cordova 5.0 or higher is required for Windows 10 support.

## License
MIT
