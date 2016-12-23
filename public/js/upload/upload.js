$(function(){
	$('.cha_cancel').on('tap',function(){
		$('.clear_bg').css('display','block');
	})
	$('.clear_cancle').on('tap',function(){
		$('.clear_bg').css('display','none');
	})
	$('.clear_sure').on('tap',function(){
		location.href = history.back();
	})
	$('.cha_confirm').on('tap',function(){
		$('.bg').css('display','block');
	})
	$('.success_sure').on('tap',function(){
		location.href ='orders.html'
	})
})
