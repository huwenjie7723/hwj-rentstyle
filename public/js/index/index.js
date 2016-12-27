var $slider = $('.slider_list');
//获取屏幕宽度
var width = $(window).width();
//获取轮播个数
var num = $('.slider_list').length;
//设置总宽度
$('.slider_width').width(width*num);
$('.index_select_list_left').width(width);
//console.log(s)
$slider.width(width).height(width*0.85)
$('.index_slider').height(width*0.85);
var hg = width*0.85;
var i=0;
var time = setInterval(right,2000);
	function play(){
		time = setInterval(right,2000);		
	}
	function stop(){
		clearInterval(time);
	}			
	function right(){
		i++;
		if(i==$(".slider_list").length){
			i=0;
		}
		$('.slider_width').animate({
			marginLeft:-width
		},1000,function(){
			$('.slider_list').eq(0).appendTo($('.slider_width'));
			$('.slider_width').css('margin-left',0);									
		})		
		change();
	}
	$('.slider_width').on('swipeLeft',function(){
		right();
	})
	$(".slider_width").on('swipeRight' ,function(){
		i--;
		if(i<0){
			i=$(".slider_list").length - 1;
		}	
		$(".slider_width").css('margin-left','-'+width+'px')
		$('.slider_list').last().prependTo($('.slider_width'));
		$(".slider_width").animate({
			marginLeft:0
		},1000)
		
		change();
	});
	function change(){
	/*	$(".xiaoyuan span").eq(i).addClass('bt1');
//				$(".xiaoyuan span").not(":eq("+i+")").removeClass('bt1');	
		$(".xiaoyuan span").eq(i).siblings().removeClass('bt1');	*/
		$('.circle_li').removeClass('circle_li_active').eq(i).addClass('circle_li_active');
	}
	$(".index_slider").on('touchmove',function(){
		stop();
	})
	$(".index_slider").on('touchend',function(){
		play();
	})
	$(window).on('scroll',function(){
		var top = parseInt($(window).scrollTop());
		if(top>=50){
			$('.index_top').css('display','none');
			$('.index_search').css('display','none');
			$('.index_search1').css('display','block');
			$('.index_top1').css('display','block');
			$('.index_show_right_bg').css('display','block');

		}else{
			$('.index_top').css('display','block');
			$('.index_search').css('display','block');
			$('.index_search1').css('display','none');
			$('.index_top1').css('display','none');		
			$('.index_show_right_bg').css('display','none');
		}
		console.log(hg)
		if(top>=hg-33){
			$('.index_show_bottom').css('margin-top','60px');	
			$('.index_select_top').addClass('index_select_top1')
		}else{
			$('.index_select_top').removeClass('index_select_top1')
			$('.index_show_bottom').css('margin-top','0');
		}
	})
	
	$('.index_show_right_title').on('tap',function(){
		if($(this).hasClass('index_show_right_title1')){
			$(this).removeClass('index_show_right_title1')
		}else{
			$(this).addClass('index_show_right_title1')
		}
	})
//		console.log(moveY-startY);
	
	$('.index_select_list').on('tap',function(){
	//黑色背景高度
		var whg = $(window).height();
		$('.price_dowm').width(width);
		var $this = $(this);
		var $index = $this.index();
		$(window).scrollTop(hg);
		$this.parent().addClass(('index_select_top1'));
		console.log($index)
		if($this.find('span').hasClass('index_select_list1')){
			$this.find('span').removeClass('index_select_list1');
			$('.index_select_list_bg').height(0);
			$this.find('.index_select_list_hidden').css('display','none');
		}else if(!$this.find('span').hasClass('index_select_list1')){
			$('.index_select_list').find('span').removeClass('index_select_list1');
			$this.find('span').addClass('index_select_list1');
			$('.index_select_list_hidden').css('display','none');
			$('.index_select_list_bg').height(whg).css('top',hg+61).css('display','block');
			$this.find('.index_select_list_hidden').css('display','block');
		}
	})
	$('.index_select_list_bg').on('tap',function(){
		$('.index_select_list_hidden').css('display','none')
		$('.index_select_list_bg').css('display','none')
		$('.index_select_li').removeClass('index_select_list1');
	})
	$('.area_list li').on('tap',function(e){
		e.stopPropagation();
		var $this = $(this);
		var index = $this.index();
		$('.area_list li').removeClass('area_list_active').eq(index).addClass('area_list_active');		
	})
	$('.area_list1 li').on('tap',function(e){
		e.stopPropagation();
		var $this = $(this);
		var index = $this.index();
		$('.area_list1 li').removeClass('area_list_active').eq(index).addClass('area_list_active');	
		$('.area_list_detail3').removeClass('area_list_detail3_active').eq(index).addClass('area_list_detail3_active');
	})
	$('.price_dowm_top1 li').on('tap',function(e){
		e.stopPropagation();
		var $this = $(this);
		var lg = $('.price_dowm_top1 li').length;
		console.log(lg)
		var index = $this.index();
		if(index!=lg-1){
			$('.price_dowm_top1 li').removeClass('price_dowm_top_active').eq(index).addClass('price_dowm_top_active');
		}	
	})
	$('.price_dowm_top2 li').on('tap',function(e){
		e.stopPropagation();
		var $this = $(this);
		var lg = $('.price_dowm_top2 li').length;
		console.log(lg)
		var index = $this.index();
		if(index!=lg-1){
			$('.price_dowm_top2 li').removeClass('price_dowm_top_active').eq(index).addClass('price_dowm_top_active');
		}	
	})
	$('.index_select_bg').on('tap',function(){
		if(!$('.index_select_bg').hasClass('index_select_bg1')&&!$('.index_select_bg').hasClass('index_select_bg2')){
			$(this).addClass('index_select_bg1');
//			console.log(1)
		}else if($('.index_select_bg').hasClass('index_select_bg1')&&!$('.index_select_bg').hasClass('index_select_bg2')){
			$(this).addClass('index_select_bg2');
//			console.log(2)
		}else if($('.index_select_bg').hasClass('index_select_bg1')&&$('.index_select_bg').hasClass('index_select_bg2')){
			$(this).removeClass('index_select_bg2').removeClass('index_select_bg1');
//			console.log(3)
		}
		
	})
$('.index_top_area').on('tap',function(){
	$('.city_select').css('display','block')
})
$('.back_index').on('tap',function(){
	$('.city_select').css('display','none')
})

$('.index_show_right_bg').on('tap',function(){
	var time = setInterval(function(){
		var scrolltop = $(window).scrollTop();
		 $(window).scrollTop(scrolltop-10);
		 if(scrolltop==0){
			clearInterval(time);
		}
	},10)
	
})

