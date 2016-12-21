$(function(){
	var kg1 = true;
	$('.login_agent_shenfen').on('tap',function(){
		if(kg1){
			$('.login_agent_kind').css('display','block');
			kg1 = false;
		}
		else{
			$('.login_agent_kind').css('display','none');
			kg1 = true;
		}
	})
	$('.login_agent_shenfen li').on('tap',function(){
		var innerHtml = $(this).html();
		$('#agent').val(innerHtml);
	})
	$('input').on('blur',function(){
		var text1 = $('#register_text1').val();
		var code1 = $('#register_code1').val();
		var pwd1 = $('#register_pwd1').val();
		var pwd2 = $('#register_pwd2').val();
		var agent = $('#agent').val();
		console.log(text1+','+code1+','+pwd1+','+pwd2+','+agent+',');
		
		if(text1!=''&& code1!=''&&pwd1!=''&& pwd1 == pwd2 && agent!=''){
			$('.register_register').css('background','#ea5404')
		}
		else{
			$('.register_register').css('background','#c7c7c7')
		}
	})
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
	$('.register_register').on('tap',function(){
		$('.register_bg').css('display','block');
	})
	$('.register_bg_sure').on('tap',function(){
		location.href = '../index.html';
	})
})
