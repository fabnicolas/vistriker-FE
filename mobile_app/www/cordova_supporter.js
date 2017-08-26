document.addEventListener('deviceready', function(){
    Fullscreen.on();
    cordova.plugins.backgroundMode.setEnabled(true);
});

document.addEventListener('resume', function(){
    Fullscreen.on();
});

/*
IF YOU REBUILD MOBILE APP, INCLUDE THIS AT THE END OF INDEX:

<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="cordova_supporter.js"></script>
*/