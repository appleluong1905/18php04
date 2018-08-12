$('#changeContent .change1').click(function(){
	$('.demo1').text('Hello World');
});
//
// $('.change3').hide();
// $('.change2').click(function(){
// 	$('img').attr('src','img/pic_bulbon.gif');
// 	$('.change3').show();
// 	$('.change2').hide();
// });
// $('.change3').click(function(){
// 	$('img').attr('src','img/pic_bulboff.gif');
// 	$('.change2').show();
// 	$('.change3').hide();
// });
$('.change2').click(function(){
	if($('.change2').text() == 'Turn On'){
		$('img').attr('src','img/pic_bulbon.gif');
		$('.change2').text('Turn Off');
	}else{
		$('img').attr('src','img/pic_bulboff.gif');
		$('.change2').text('Turn On');
	}
});
$('.change4').click(function(){
	$('#demo3').css('color','red');
});
$('.change5').click(function(){
	$('#demo3').addClass('content');
});
$('.change6').click(function(){
	$('#demo3').removeClass('content');
});
$('#testForm').click(function(){
	var name, linkFB;
	name = $('#name').val();
	linkFB = $('#fb').val();
	$('.linkFB').attr('href',linkFB);
	$('.nameFB').text(name);
});