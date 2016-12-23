$(function(){
	$('#iss_cancel').on('touchstart',function(){
		$('#iss_zhe').css('display','block');
	})
	$('#iss_can').on('touchstart',function(){
		$('#iss_zhe').css('display','none');
	})
	$('#ind_search').on('focus',function(){
		$('#search_x').css('display','block');
	})
	$('#ind_search').on('blur',function(){
		$('#search_x').css('display','none');
	})
	for(var i=0;i<$('.dian_all').length;i++){
		$('.dian_all').on('touchstart',function(){
			$('i').removeClass('dian_one');
			$(this).find('i').addClass('dian_one');
		})
		/*dian_all[i].index=i;
		dian_all[i].onclick=function(){
			for(var i=0;i<dian_all.length;i++){
				ii[i].removeAttribute("class","dian_one");
			}
			ii[this.index].setAttribute("class","dian_one");
		}*/
	}
	var f = true;
		$('#cho_sel').on('touchstart',function(){
			/*cho_sel_menu.style.display = "block";*/
			if(f){
				$('#cho_sel_menu').css('display','block');
				f = false;
				//console.log(1)
			}else{
				$('#cho_sel_menu').css('display','none');
				f = true;
				//console.log(2)
				
			}
		})

	for(var i = 0;i<$('li').length;i++){
		//console.log( li.length);
		$('li').eq(i).on('touchstart',function(e){
			//console.log(li[i]);
			//console.log($(this).html());
			$('#cho_short_ss').html($(this).html()) ;
		})	
	}
	
	$('.radio_one').on('touchstart',function(){
		/*cho_sel_menu.style.display = "block";*/
		if(f){
			$(this).find('.rsma').css('display','block');
			f = false;
		}else{
			$(this).find('.rsma').css('display','none');
			f = true;
		}
	})
	$('#iss_btn_one').on('touchstart',function(){
		$('#iss_succ').css('display','block');
	})
	$('#iss_btn_one').on('tap',function(){
		var time = setInterval(function(){
			var scrolltop = $(window).scrollTop();
			 $(window).scrollTop(scrolltop-10);
			 if(scrolltop==0){
				clearInterval(time);
			}
		},10)
	})
	$('.iss_cancel').on('tap',function(){
		var time = setInterval(function(){
			var scrolltop = $(window).scrollTop();
			 $(window).scrollTop(scrolltop-10);
			 if(scrolltop==0){
				clearInterval(time);
			}
		},10)
	})
	$('.wipe_one').on('touchstart',function(){
		window.open('../homepage/index.html','_self');
	})
	$('.confirm').on('touchstart',function(){
		window.history.back();
	})
})
