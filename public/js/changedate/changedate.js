$(function(){
	$('.cha_confirm').on('tap',function(){
		$('.clear_bg1').css('display','block');
	})
	$('.clear_cancle').on('tap',function(){
		$('.clear_bg1').css('display','none');
	})
	$('.clear_sure').on('tap',function(){
		$('.clear_bg1').css('display','none');
		$('.bg').css('display','block')
	})
	$('.cha_cancel').on('tap',function(){
		location.href = history.back();
	})
	$('.success_sure').on('tap',function(){
		location.href = 'orders.html'	
	})
})
