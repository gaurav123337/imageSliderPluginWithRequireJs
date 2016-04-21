
	define(["jquery","coreSlider"], function($) {
    //the coreSlider plugins have been loaded.
    $(function() {

        $('#example1').coreSlider({
		  pauseOnHover: false,
		  interval: 3000,
		  controlNavEnabled: true
		});
		$('#example2').coreSlider({
		  clone: true,
		  cloneItems: 3
		});

    });
});
