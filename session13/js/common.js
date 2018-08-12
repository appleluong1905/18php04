$('a').click(function(){ //onclick
	$('#demo1').hide(3000); //document.getElementById('demo1')
	// hide() ~ style.display = none;
	$('.demo2').hide(3000);
});
$('div').click(function(){
	$('#demo1').show('slow');
	$('.demo2').show('slow');
});