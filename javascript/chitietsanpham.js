
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

// slideshow trangchitietsanpham 
var index = 1;//x là index hiện tại
showSlides(index); //khởi tạo giá trị mặc định

//tạo nút  next


function next(n) {
	showSlides(index += n);
}
//tạo nút next tự động với jquery 
$(document).ready(function(){
	setInterval(function(){
		$("a.next").click();
	},5000);
});

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) { //n vừa nhận giá trị index vừa nhận giá trị -1 /1 của hàm next
	var slides = document.getElementsByClassName('slidesInBox'); //biến slides chứa các
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

//Tạo zoom cho trang chi tiết sản phẩm
$(document).ready(function() {
	$('#zoom_id1').zoom();
	$('#zoom_id2').zoom();
	$('#zoom_id3').zoom({ on:'grab' });
	$('#zoom_id4').zoom({ on:'grab' });		
	// $('#style2').zoom({ on:'grab' });
	// $('#style3').zoom({ on:'click' });			 
	// $('#style4').zoom({ on:'toggle' });
});
