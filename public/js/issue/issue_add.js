$(function(){
	var x = sessionStorage.getItem("username");
	/*console.log(x);
	$('.username_n').html(x);*/
	if(x == null){
		$('.iss_none').css('display','block');
		$('.iss_add_all').css('display','none');
	}else{
		$('.iss_none').css('display','none');
		$('.iss_add_all').css('display','block');
	}
	$('.round').on('touchstart',function(){
		window.open('issueneed.html','_self');
	})
	$('.rou_rig').on('touchstart',function(){
		window.open('issue.html','_self');
	})
	$('.add_x').on('touchstart',function(){
		window.open('../index/index.html','_self');
	})
	$('#none_can').on('touchstart',function(){
		window.history.back();
	})

	$('.none_con').on('tap',function(){
		location.href = '../login/index.html'
	})
})