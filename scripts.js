$(document).ready(function(){
$('.login-container').show(function(){
		$(this).animate({
			opacity: 1
		})
	});
$('.container').hide();
$('.home-container').hide();
$('.add-question-container').hide()

/*$(document).click(function(){
	$('.login-container').show(function(){
		$(this).animate({
			opacity: 1
		})
	});
	$('.container').hide();
	$('.home-container').hide()
})*/

$('#submit').click(function(){
	$('.login-container').hide();
	$('.home-container').show(function(){
		$(this).animate({
			opacity: 1
		})
	});
})




})