$(function(){
	var x = sessionStorage.getItem("username");
	if(x == null){
		$('.message_age').css('display','none');
		$('.need_num').css('display','none');

	}else{
		$('.message_age').css('display','block');
		$('.need_num').css('display','block');
	}
	$('#message_on').on('tap',function(){
		$('#message_on').addClass("mes_col");
		$('#notice_on').removeClass("mes_col");
		$('#need_on').removeClass("mes_col");
		$('#message_one').css('display','block');
		$('#notice_all').css('display','none');
		$('#need_all').css('display','none');
	})
	$('#notice_on').on('tap',function(){
		$('#notice_on').addClass("mes_col");
		$('#message_on').removeClass("mes_col");
		$('#need_on').removeClass("mes_col");
		$('#notice_all').css('display','block');
		$('#message_one').css('display','none');
		$('#need_all').css('display','none');
	})
	$('#need_on').on('tap',function(){
		$('#need_on').addClass("mes_col");
		$('#message_on').removeClass("mes_col");
		$('#notice_on').removeClass("mes_col");
		$('#need_all').css('display','block');
		$('#message_one').css('display','none');
		$('#notice_all').css('display','none');	
	})
})
