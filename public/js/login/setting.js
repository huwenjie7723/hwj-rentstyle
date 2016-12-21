$(function(){
	$('.set_demand1').on('tap',function(){
		$('.clear_bg').css('display','block');
	})
	$('.clear_cancle').on('tap',function(e){
		e.stopPropagation();
		$('.clear_bg').css('display','none');
	})
	$('.clear_sure').on('tap',function(e){
		e.stopPropagation();
		$('.clear_bg').css('display','none');
		$('.set_jiantou1').html(0);
	})
	
})
