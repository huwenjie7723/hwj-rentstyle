$(function(){
	var x = sessionStorage.getItem("username");
	if(x == null){
		$('.content').css('display','none');
	}else{
		$('.content').css('display','block');
	}
})