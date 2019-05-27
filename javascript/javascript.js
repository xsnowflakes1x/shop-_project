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

// slideshow trangchitietsanpham 
var index = 1;//x là index hiện tại
showSlides(index); //khởi tạo giá trị mặc định

//tạo nút  next


function next(n) {
	showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) { //n vừa nhận giá trị index vừa nhận giá trị -1 /1 của hàm next
	var slides = document.getElementsByClassName('slidesInBox'); //biến slides chứa các slide
	var activeImg = document.getElementsByClassName('galerryItem'); //biến chứa các hình con chưa được active
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';  //tắt tất cả các hình trước
	}
	for (i = 0; i < activeImg.length; i++) {
		activeImg[i].className = activeImg[i].className.replace(" active", ""); //tắt tất cả active trước đó
	}
	if (n < 1) {
		 index = slides.length;
	}
	if (n > slides.length) {
		index = 1;
	}
	slides[index-1].style.display = "block";   //bật hình hiện tại
	activeImg[index-1].className += ' active';
}


// Tạo tab cho chitietsanpham
function showTab(e,id) { //e là event dùng để bắt sự kiện
	var tabButton = document.getElementsByClassName("tab-button"); // lấy tên class của button 
	var tabContent = document.getElementsByClassName("tab-content");// lấy tên class của content  
	var i;
	for(i = 0; i < tabButton.length; i++) {	//off active
		tabButton[i].className = tabButton[i].className.replace(" active","");
	}
	//none content
	for(i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';//cẩn thận ko ghi: tabButton[i].className += " active"; vì lấy id từ bên ngoài vào
	e.currentTarget.className += ' active'; 
	//currentTarget trả về thẻ mang Event Listener của chính nó và thẻ này sinh ra sự kiện
	//ngược lại target trả về 1 thẻ nào đó ko mang Event Listener và thẻ dó sinh ra sự kiện  
	//	active //tạo dấu mũi tên cho phần tử hiện tại được active
}
 	document.getElementById("default").click(); //mặc định mở tab

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
 			return false;
 		}
 		else {
 			$("#quantity-err-message2").hide();
 			quant = parseInt(quant);
 				if(quant <= 10) {
 					$("#quantity-err-message1").hide();
 					return true;
 				}
 				else {
 					$("#quantity-err-message1").show();
 					return false; 					
 				}
 		}
}
$(document).ready($("input:text").keyup(function(){
	checkQuantity();
}));

$(document).ready($("#detail_product_form").submit(function(){
	if(checkQuantity()==true) {
			alert("Thành công!");
			return true;
		}
		else {
			alert("Thất bại. Vui lòng kiểm tra lại ô nhập số lượng");
			return false;
		}
} ));


//Tạo zoom cho trang chi tiết sản phẩm
$(document).ready(function(){
	$('#zoom_id1').zoom();
	$('#zoom_id2').zoom();
	$('#zoom_id3').zoom({ on:'grab' });
	$('#zoom_id4').zoom({ on:'grab' });		
	// $('#style2').zoom({ on:'grab' });
	// $('#style3').zoom({ on:'click' });			 
	// $('#style4').zoom({ on:'toggle' });
});
