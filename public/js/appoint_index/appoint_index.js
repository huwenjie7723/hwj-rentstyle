$(function(){
	$('.ind_bar_wor').on('tap',function(){
		location.href = 'orders.html';
	})
	$('.wor_btn').on('tap',function(){
		$('.wor_btn').css('display','none');
		$('.wor_state1').css('display','block');
	})
})
