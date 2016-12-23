$(function(){	
	$('#building').on('blur',function(){
		//console.log(building.value);
		if($('#building').val() == ""){
			$('#building').css('background',"#FFC0CB");
		}else{
			$('#building').css('background',"#FFF");
		}
		//console.log(building.value != "" && address.value != "");
		if($('#building').val() != "" && $('#address').val() != ""){
		/*console.log(building.value != "" && address.value != "");*/
			$('#add_btn').on('touchstart',function(){
				$('#add_all').css('display','none');
				$('#add_zhe').css('display','block');
			})
		}
	})
	$('#address').on('blur',function(){
		//console.log(building.value);
		if($('#address').val() == ""){
			$('#address').css('background',"#FFC0CB");
		}else{
			$('#address').css('background',"#FFF");
		}
		//console.log(building.value != "" && address.value != "");
		if($('#building').val() != "" && $('#address').val() != ""){
		/*console.log(building.value != "" && address.value != "");*/
			$('#add_btn').on('touchstart',function(){
				$('#add_all').css('display','none');
				$('#add_zhe').css('display','block');
			})
		}
	})
	$('.wipe_one').on('touchstart',function(){
		/*window.open('../issue/issue.html','_self')*/
		window.history.back();
	})
	/*address.onblur = function(){
		//console.log(address.value);
		if(address.value == ""){
			address.style.background = "#FFC0CB";
		}else{
			address.style.background = "#FFF";
		}
		//console.log(building.value != "" && address.value != "");
		if(building.value != "" && address.value != ""){
		/*console.log(building.value != "" && address.value != "");
		add_btn.onclick = function(){
			add_all.style.display = "none";
			add_zhe.style.display = "block";
		}
	}
	}*/
})
