requirejs.config({
    "baseUrl": "js/lib",
    paths: {
//        jquery: 'jquery'
          jquery: 'jquery1.12.1.min'
    },
    "shim": {
    	//"coreSlider":["jquery"]
    	 'bootstrap.js': ['jquery'],
    }
});

// Main libs - Libraries and modules that will be needed on all pages of the site
require(['jquery'], function() { });


//Load common code that includes config, then load the app logic for this page.
//requirejs(['../app/commonJs']);
