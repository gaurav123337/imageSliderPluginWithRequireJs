requirejs.config({
    "baseUrl": "js/lib",
    /*"paths": {
      "app": "../app"
    },*/
    "shim": {
    	"coreSlider":["jquery"]
    }
});


//Load common code that includes config, then load the app logic for this page.
requirejs(['../app/commonJs']);
