$(function(){
	$('#pwd1').on('blur',function(){	
		if($('#text1').val()!=''&&$('#pwd1').val()!=''){
			$('.btn1').css('background','#ea5404');
		}
	})
	$('.btn1').on('tap',function(){		
		sessionStorage.setItem("username", $('input[type=text]').val());
		var session =  sessionStorage.getItem("username");		
		console.log(session);
		if(session !=null){
	    	 location.href = '../user/information1.html';
	 	}	
	})
	
	var name = sessionStorage.getItem("username");
	if(name !=''){
		console.log(name)
		$('.information_username1').html(name);
	}
//	获取验证码
	function code(){
		var i =60;
		var kg = true;
		if(kg){
			kg = false;
			var time = setInterval(function(){			
				if(i>0){
					i--;
					$('.btn_code').html(i+'s后重新获取').css('background','#e1e1e1');	
				}else{
					$('.btn_code').html('获取验证码').css('background','#ea5404');
					kg = true;
					i=60;
					clearInterval(time);
				}			
			},1000)
		}
	}
	$('.btn_code').on('tap',function(){
		code();		
	})
	$(document).on('input',function(){
		var txt1 = $('#text2').val();
		var code = $('#code2').val();
		var pwd1 = $('#pwd2').val();
		var pwd2 = $('#pwd3').val();
		if(txt1!='' && code!=''&&pwd1!=''&&pwd1==pwd2){
			$('.forgetpwd_sure').css('background','#ea5404');			
		}
		else{
			$('.forgetpwd_sure').css('background','#c7c7c7');	
		}
	})
	$('.forgetpwd_sure').on('tap',function(){
		location.href='../index.html';
	})
	
//	information
	$('.login_top_bg').on('tap',function(){
		location.href='../user/information.html';
	})
	$('.information_username').on('tap',function(){
		location.href = '../login/index.html';
	})
	$('.information_setting').on('tap',function(){
		location.href = 'setting.html';
	})
	$('.demand0').on('tap',function(){
		location.href = 'release.html';
	})
//information1
	$('.information_change').on('tap',function(){
		location.href = 'agent_info.html';
	})
	$('.agent_editor').on('tap',function(){
		location.href = 'agent_info_edit.html';
	})
})
