$(function(){
	$('.main_li').on('tap',function(){
	var $this = $(this);
	var num = $this.index();
		console.log(num)
	for(var i =0;i<5;i++){
		console.log(i)
		$('.main_li').removeClass('active'+i)
	}
	$this.addClass('active'+num);
	})
	$('.main_li0').on('tap',function(){
	location.href = '../index/index.html';
	})
	$('.main_li1').on('tap',function(){
		location.href = '../appoint/appoint_index.html';
	})
	$('.main_li2').on('tap',function(){
	location.href = '../issue/issue_add.html';
	})
	$('.main_li3').on('tap',function(){
	location.href = '../message_all/message_all.html';
	})
	
	$('.main_li4').on('tap',function(){
		var name = sessionStorage.getItem("username");
		if(name != null){
			location.href = '../user/information1.html';
		}else{
			location.href = '../user/information.html';
		}
	
	})

})
