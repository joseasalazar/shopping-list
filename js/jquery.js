$(document).ready(function(){
	$("#addBtn").on('click', function (e) {
		e.preventDefault();
		if ($("#textField").val() == "") {
			alert("Please write an item to add");
		} else {
			$('#dynamicList').append('<div class="dynamicItems"><li class="inputVal">' 
			+ $("#textField").val() 
			+ '</li><button class="checkBtn">Check</button><button class="deleteBtn">Delete</button></div>');
		}
		
	});

	$("#dynamicList").on('click', '.checkBtn', function(e) {
		e.preventDefault();
		var listVal = $(this).closest("div").find("li");
		if (listVal.hasClass("mark")){
			listVal.removeClass("mark");
		} else {
			listVal.addClass("mark");
		}
	});
	

	$("#dynamicList").on('click', '.deleteBtn', function(e) {
		e.preventDefault();
		$(this).closest("div").remove();
	});
});