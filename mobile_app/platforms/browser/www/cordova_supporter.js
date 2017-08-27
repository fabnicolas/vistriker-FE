var CordovaSupporter = (function(){
    this.fullscreen=function(status){
        if(typeof Fullscreen !== 'undefined'){
            if(status==true) Fullscreen.on();
            else             Fullscreen.off();
        }
    };
    this.backgroundMode=function(status){
        cordova.plugins.backgroundMode.setEnabled(status);
    };
    return this;
})();



document.addEventListener('deviceready', function(){
    CordovaSupporter.fullscreen(true);
    CordovaSupporter.backgroundMode(true);
});

document.addEventListener('resume', function(){
    CordovaSupporter.fullscreen(true);
});

/*
IF YOU REBUILD MOBILE APP, INCLUDE THIS AT THE END OF INDEX:

<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="cordova_supporter.js"></script>
*/