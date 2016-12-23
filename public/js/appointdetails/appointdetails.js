$(function(){
	$('.bar_tel').on('tap',function(){
		$('.clear_bg').css('display','block');
	})
	$('.clear_cancle').on('tap',function(){
		$('.clear_bg').css('display','none');
	})
	$('.clear_sure').on('tap',function(){
		location.href = '../index/index.html';
	})
	$('.btn_one1').on('tap',function(){
		location.href = 'changedate.html'
	})
	$('.btn_one2').on('tap',function(){
		location.href = 'upload.html'
	})
	$('.btn_line').on('tap',function(){
		location.href = 'cancel.html'
	})
	
})
