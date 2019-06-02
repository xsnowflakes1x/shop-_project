// hiển thị icon black heart
function changeIcon(e) { //e là thẻ 

	//lấytoàn bộ tên class (tim trắng)	
	var selector_class_name = e.querySelector(".far").className;

	//truy cập vô icon tim đen
	var tim_den_class = e.querySelector(".black-heart-icon"); 

	//truy cập vô icon tim trắng
	var tim_trang_class = e.querySelector(".far");
	//lưu querySelector() --> truy xuất vào phần tử đầu tiên
	
	//so sanh tên class được lấy 
	if (selector_class_name == "far fa-heart fa-lg") {
		
		tim_trang_class.style.display="none";

		tim_den_class.style.display="inline-block";

		//Đổi tên tạm class emty-heart
		tim_trang_class.className="far";
	}
	else {

		tim_trang_class.style.display="inline-block";
		tim_den_class.style.display="none";
		//Gán lại tên cũ cho class emty-heart
		tim_trang_class.className="far fa-heart fa-lg";		
	}	
}	

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
		if(count < 0) {
			count = 0;
			$("#alert-content").html("Giỏ hàng của bạn đang là 0!");
			$(".overlay-box").show();
			$("#alert-content").css({"font-size":"22px","padding-top": "80px"});
			$(".btn-confirm").hide();
		}
			$(".quantity input:text").val(count);
			checkQuantity();
	});
});
}
quantity();

//tạo sự kiện click cho thông báo alert - delete giỏ hàng
$(document).ready(function() {
	$(".btn-cart-delete").click(function() {
		$(".overlay-box").show();
		$("#alert-content").html("Bạn có muốn xóa sản phẩm này không?");
		$("#alert-content").css({"font-size":"16px","font-weight": "600","padding-top": "48px"});		
		$(".btn-confirm").show();
	});
});
//tạo nút thoát X cho thông báo alert
$(document).ready(function() {
	$(".fa-times").click(function() {
		$(".overlay-box").hide();

	});
});

// $(document).ready(function() {
// 	$("")
// });