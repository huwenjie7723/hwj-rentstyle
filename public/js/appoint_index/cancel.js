$(function(){
	var f = true;
	$('.result_one').on('touchstart',function(){
		/*$('.result_yes').removeClass('yes_pic');
		$(this).addClass('yes_pic');*/
		if(f){
			f = false;
			$(this).find('.result_yes').css('display','block');
		}else{
			f = true;
			$(this).find('.result_yes').css('display','none');
		}
	})
	$('#result_re').on('touchstart',function(){
		if(f){
			$(this).find('.result_yes').css('display','block');
			$('textarea').css('display','block');
			f = false;
		}else{
			f = true;
			$(this).find('.result_yes').css('display','none');
			$('textarea').css('display','none');
		}
	})
	$('.appo_btn').on('touchstart',function(){
		$('#cancel_kuang').css('display','block');
	})
	$('.queding').on('touchstart',function(){
		location.href = '../homepage/index.html';
	})
})