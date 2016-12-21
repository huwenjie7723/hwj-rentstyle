$(function(){
	$('.bar_tel').on('touchstart',function(){
		$('.clear_bg').css('display','block');
	})
	$('.clear_cancle').on('touchstart',function(){
		$('.clear_bg').css('display','none');
	})
	$('.clear_sure').on('touchstart',function(){
		location.href = '../index/index.html';
	})
	$('.btn_one1').on('touchstart',function(){
		location.href = 'changedate.html'
	})
})
