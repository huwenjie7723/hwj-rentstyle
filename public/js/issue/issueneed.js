$(function(){	
	$('#cancel').on('touchstart',function(){
		$('#issned_zhe').css('display','block');
	})
	$('#iss_can').on('touchstart',function(){
		$('#issned_zhe').css('display','none');
	})
	$('#issue').on('touchstart',function(){
		$('#iss_succ').css('display','block');
		$('#issue_all').css('display','none');
	})
	$('.queding').on('touchstart',function(){
		/*window.open('../homepage/index.html','_self');*/
		window.history.go(-2);
	})
	$('.confirm').on('tap',function(){
		location.href = 'issue_add.html'
	})
	$('.wipe_one').on('tap',function(){
		location.href = 'issue_add.html'
	})
})
