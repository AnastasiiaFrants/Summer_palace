

	function valid(form) {
			var fail = false;
			var name = form.name.value;
			var email = form.email.value;
			var r = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,5}$/i;
			var text = form.text.value;
			
			
			if (name== "" || name==" ")
			fail = "Вы не ввели имя";
			if (r.test(email)== false)
			fail = "Вы ввели Email неправильно!";
            else if(text== "" || text==" ")
			fail = "Вы не ввели сообщение";
			if(fail) 
				alert(fail);
			else
			 window.location="http://google.com";
		}
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$('#to__top').show()
		}
		else {
			$('#to__top').hide()
		}
	})