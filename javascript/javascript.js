// hiển thị icon black heart
var counterHeart = 0;
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
		counterHeart +=1;
		//Đổi tên tạm class emty-heart
		tim_trang_class.className="far";
	}
	else {
		counterHeart -=1;
		tim_trang_class.style.display="inline-block";
		tim_den_class.style.display="none";
		//Gán lại tên cũ cho class emty-heart
		tim_trang_class.className="far fa-heart fa-lg";		
	}	
	
	$(document).ready(function() {
		$(".view b").text(function() {
			return " ("+counterHeart+")";
		});
	});
}
	var counterCard = 0; 	
$(document).ready(function() {
	$(".card").each(function() {
		counterCard +=1;
		$(".summary-product b").text(function() {
			return counterCard;
		});
	});
});

 	//kiểm tra Form validation -- số lượng nhập vào (trong trang chi tiết sp)
 	//Cách 1: dùng Javascript

/* function  checkQuantity() {
 		var quant = document.getElementById("quantity_id");
 		quant = quant.value;
 		if (isNaN(quant) == true) { //kiểm tra có nhập bậy hay ko ví dụ: 20abc
 			document.getElementById("quantity-err-message2").style.display = 'block';
 			document.getElementById("quantity-err-message1").style.display = '';
 			return false;
 		}
 		else {
 			document.getElementById("quantity-err-message2").style.display = '';
 			quant = parseInt(quant);
 				if(quant <= 10) {
 					document.getElementById("quantity-err-message1").style.display = '';
 					return true;
 				}
 				else if(quant > 5){
 					document.getElementById("quantity-err-message1").style.display = 'block';
 					return false; 					
 				}
 				else {
 					document.getElementById("quantity-err-message1").style.display = '';
 					return false; 					
 				}
 		}
 	}
document.getElementById("quantity_id").onkeyup = checkQuantity;
document.detail_product_form.onsubmit = submitDetailProduct;
function submitDetailProduct() {
	if(checkQuantity()==true) {
		alert("Thành công!");
		return true;
	}
	else {
		alert("Thất bại. Vui lòng kiểm tra lại ô nhập số lượng");
		return false;
	}
}*/
	
	//Cách 2: dùng JQuery
	
	//đặt id cho div/span báo lỗi có tên là :quantity-err-message_x
	//đặt class cho div/span báo lỗi có tên là:err-message
function checkQuantity() {
	var quant = $(".quantity_class").val(); // $("input:text").val();

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
//tạo hàm submit cho nút mua
function submitCart() {
	$("#detail_product_form").submit(function() {
		if(checkQuantity() == true) {
			alert("Thành công!");
			return true;
		}
		else {
			alert("Thất bại. Vui lòng kiểm tra lại ô nhập số lượng");
			return false;
		}
	});
}
$(document).ready(function() {
	submitCart()
});
function quantity() {
$(".quantity_class").val("1");
$("#cart-quantity").val("1");
var count = 1;
//Tạo nút tăng số lượng 
$(document).ready(function() {
	$(".plus_button").click(function(event) {
		count += 1;
		$(".quantity input:text").val(count);
		checkQuantity();
		var target = $( event.currentTarget);
		var tt = totalCart(target) ;
		// tt = tt + 30000;
		$("#show-total").val(formatNumber(tt, '.', ',')); //hiển thị cho tổng tiền
		$("input[name=total]").val(tt); //cập nhật giá tổng tiển ẩn			
	});	
});
//Tạo nút giảm số lượng 
$(document).ready(function() {
	$(".minus_button").click(function(event) {
		count -= 1;
		if(count < 0) {
			count = 0;
			$(".alert-content").text("Giỏ hàng của bạn đang là 0!");
			$(".overlay-box").show();
			$(".alert-content").css({"font-size":"22px","padding-top": "80px"});
			$(".btn-yes").hide();
			$(".btn-no").hide();
		}
		$(".quantity input:text").val(count);
		checkQuantity();
		var target = $( event.currentTarget);
		totalCart(target);
	});
});
}
quantity();
/*Begin giỏ hàng*/
//tạo sự kiện click cho thông báo alert - delete giỏ hàng
$(document).ready(function() {
	$("#btn-cart-delete").click(function(event) {
		$(".overlay-box").show();
		$(".alert-content").text("Bạn có muốn xóa sản phẩm này không?");
		$(".alert-content").css({"font-size":"16px","font-weight": "600","padding-top": "48px"});		
		$(".btn-yes").show();
		$(".btn-no").show();		
	});
});
//tạo nút thoát X cho thông báo alert
$(document).ready(function() {
	$(".fa-times").click(function() {
		$(".overlay-box").hide();
	});
});

//hàm định dạng tiền tệ
function formatNumber(nStr, decSeperate, groupSeperate) {
	nStr += '';
	x = nStr.split(decSeperate);
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + groupSeperate + '$2');
	}
	return x1 + x2;
}
//tạo bảng giỏ hàng khi bấm nút thêm vào giỏ hàng/ mua

function totalCart(t) {
	var total =	$("input[name=total]").val(); //lấy input tổng tiền ẩn hiện tại 
	var hiddenPrice = $("#product-price1").val(); //lấy input đơn giá ẩn hiện tại  
	var price = hiddenPrice;
	var quantity = $("#cart-quantity").val(); //lấy số lượng hiện tại
	var shipCost = $("input[name=shipCost]").val(); // lấy phí ẩn

	price = price * quantity;

	if(t.is(".plus_button")) {
		total = + parseInt(total) + parseInt(hiddenPrice);
	}
	else if(t.is(".minus_button")) {
		if(total > 0) {
			total =  parseInt(total)  - parseInt(hiddenPrice);
		}
		else {
			total = 0;
		}
	}	

	$("#show-price").val(formatNumber(price, '.', ',')); //hiển thị cho đơn giá
	$("#show-total").val(formatNumber(total, '.', ',')); //hiển thị cho tổng tiền
	$("input[name=total]").val(total); //cập nhật giá tổng tiển ẩn
	var tt =total;
	return tt;
}
 /*End giỏ hàng*/
function offSizeList() {
	$(".size-list label").each(function() { //duyệt tắt hết 
	$(this) .removeClass("activeSize") });
}
offSizeList();
//tạo active cho sizeList của trang chi tiết sp
function activeSizeList() {
				$(".size-list label").click(function(event) { 
				offSizeList();
				var target = $(event.target);
				target.addClass("activeSize"); //bật đối tượng hiện tại
		});
}
activeSizeList();

//tạo active cho colorList của trang chi tiết sp

function offColorList() {//duyệt tắt hết check-icon
	$(".color-list li").each(function() { 
	$(".color-list i").hide();
	});
}
offColorList();
function activeColorList() {

	$(".color-list label").click(function(event) {
		offColorList();
		var curTarget = $(event.currentTarget); //dùng currentTarget cho thẻ label để buddling
		curTarget.siblings().show();
		$("input:radio").hide();	
	});
}
activeColorList();
