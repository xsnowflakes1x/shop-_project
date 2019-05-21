// hiển thị icon black heart
function changeIcon(e) {

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
		//Đổi tên tạm class emty-heart
		tim_trang_class.className="far fa-heart fa-lg";		
	}	
}	

// slideshow trangchitietsanpham 

var slideIndex = 0;
showSlides(slideIndex); 
//x là index hiện tại
function showSlides(x) {
	var slides = document.getElementsByClassName('slidesInBox'); //biến slides chứa các slide
	var activeImg = document.getElementsByClassName('galerryItem'); //biến chứa các hình con chưa được active
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';  //tắt tất cả các hình trước
	}
	for (i = 0; i < activeImg.length; i++) {
		activeImg[i].className = activeImg[i].className.replace(" active", ""); //tắt tất cả active trước đó
	}		
	slides[x].style.display = "block";   //bật hình hiện tại
	activeImg[x].className += ' active';
}

