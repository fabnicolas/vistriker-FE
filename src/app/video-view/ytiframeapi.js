var YT_IFrame_API = ({
    isAPIloading: false, isAPIloaded: false, arr_listeners: [],

	load: function(callback){
	    var _ytiapi_context = this;
		this.arr_listeners.push(callback);

        if(this.isAPIloaded) {
			setTimeout(function(){_ytiapi_context.done();});
			return;
		}

		if(this.isAPIloading) {
			return;
		}

		this.isAPIloading = true;

		window.onYouTubeIframeAPIReady = function() {
		    _ytiapi_context.isAPIloaded = true;
			_ytiapi_context.done();
        };
        
        this.attachYouTubeIframeAPI();
	},

	done: function() {
		while(this.arr_listeners.length>0)    this.arr_listeners.pop()(window.YT);
        delete window.onYouTubeIframeAPIReady;
    },
    
    attachYouTubeIframeAPI: function(){
        var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://www.youtube.com/iframe_api';
		document.body.appendChild(script);
    }
});

module.exports = YT_IFrame_API;