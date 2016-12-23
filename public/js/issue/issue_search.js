$(function(){
	$('#search').on('focus',function(){
		$('#search_x').css('display','block');
		
	})
	$('#search').on('blur',function(){
		$('#search_x').css('display','none');
	})
	$('#search_x').on('touchstart',function(){
		$('#search').val(" ");
	})
	/*if(search.value == "地铁"){
		search_on.style.display = "block";
	}*/
})
