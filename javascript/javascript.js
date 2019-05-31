
 	//kiểm tra Form validation -- số lượng nhập vào (trong trang chi tiết sp)
 	//Cách 1: dùng Javascript

//  function  checkQuantity() {
//  		var quant = document.getElementById("quantity_id");
//  		quant = quant.value;
//  		if (isNaN(quant) == true) { //kiểm tra có nhập bậy hay ko ví dụ: 20abc
//  			document.getElementById("quantity-err-message2").style.display = 'block';
//  			document.getElementById("quantity-err-message1").style.display = '';
//  			return false;
//  		}
//  		else {
//  			document.getElementById("quantity-err-message2").style.display = '';
//  			quant = parseInt(quant);
//  				if(quant <= 10) {
//  					document.getElementById("quantity-err-message1").style.display = '';
//  					return true;
//  				}
//  				else if(quant > 5){
//  					document.getElementById("quantity-err-message1").style.display = 'block';
//  					return false; 					
//  				}
//  				else {
//  					document.getElementById("quantity-err-message1").style.display = '';
//  					return false; 					
//  				}
//  		}
//  	}
// document.getElementById("quantity_id").onkeyup = checkQuantity;
// document.detail_product_form.onsubmit = submitDetailProduct;
// function submitDetailProduct() {
// 	if(checkQuantity()==true) {
// 		alert("Thành công!");
// 		return true;
// 	}
// 	else {
// 		alert("Thất bại. Vui lòng kiểm tra lại ô nhập số lượng");
// 		return false;
// 	}
// }
	
	//Cách 2: dùng JQuery
	
	//đặt id cho div/span báo lỗi có tên là :quantity-err-message_x
	//đặt class cho div/span báo lỗi có tên là:err-message
function checkQuantity() {
	var quant = $("#quantity_id").val(); // $("input:text").val();

 		if (isNaN(quant) == true) { //kiểm tra có nhập bậy hay ko ví dụ: 20abc
 			$("#quantity-err-message2").show();
 			$("#quantity-err-message1").hide();
 			$("#quantity-err-message3").hide();
 			return false;
 		}
 		else {
 			$("#quantity-err-message2").hide();
 			quant = parseInt(quant);
 				if(quant <= 10 && quant >= 0) {
 					$("#quantity-err-message1").hide();
					$(".quantity input[name=quantity]").css("border", "initial");
					$("#quantity-err-message3").hide(); 							
 		 					return true;
 				}
 				else if( quant < 0) {
 					$("#quantity-err-message3").show();
 					$(".quantity input[name=quantity]").css("border", "2px solid red");
 				}
 				else {
 					$("#quantity-err-message1").show();
  					$("#quantity-err-message3").hide();					
					$(".quantity input[name=quantity]").css("border", "2px solid red");
 					return false; 					
 				}
 		}
}
//tạo sự kiện keyup cho ô nhập số lượng
$(document).ready($("input:text").keyup(function() {
	checkQuantity();
}));

$(document).ready($("#detail_product_form").submit(function() {
	if(checkQuantity() == true) {
			alert("Thành công!");
			return true;
		}
		else {
			alert("Thất bại. Vui lòng kiểm tra lại ô nhập số lượng");
			return false;
		}
} ));

function quantity() {
//Tạo nút tăng số lượng 
$("#quantity_id").val("0");
var count = 0;
$(document).ready(function() {
	$("#plus_button").click(function() {
		count += 1;
		$(".quantity input:text").val(count);
		checkQuantity();
	});
});
//Tạo nút giảm số lượng 
$(document).ready(function() {
	$("#minus_button").click(function() {
		count -= 1;
		if(count < 0)
			count = 0;
		$(".quantity input:text").val(count);
			checkQuantity();
	});
});
}
quantity();