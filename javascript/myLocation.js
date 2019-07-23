
function showError(error) {
	var errorTypes = {
		0: "Không xác định được lỗi",
		1: "Quyền truy cập bị từ chối bởi người dùng",
		2: "Vị trí không có sẵn",
		3: "Đã hết thời gian yêu cầu"
	}
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " (" <sample+ error.message + " )";
	}

	$("#location").html(errorMessage);
}

//hàm tính khoảng cách
function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);
	var Radius = 6371; // radius of the Earth in km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
	Math.cos(startLatRads) * Math.cos(destLatRads) *
	Math.cos(startLongRads - destLongRads)) * Radius;
return distance;
}

function degreesToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}

//Làm việc với Google Map API -- ko hoat dong

var map; //Declaring a global variable map.
//google.maps: là phương thức của Google Map API
function showMap(coords) {
	var googleLatAndLong = new google.maps.LatLng(coords.latitude,coords.longitude);// LatLng(): là constructor để trả về new object giữ cả 2 giá trị "tọa độ" này
	var mapOptions = {
		zoom: 10, // từ 0 - 21
		center: googleLatAndLong, //đặt new object vào đây để canh giữ vùng này
		mapTypeId: google.maps.MapTypeId.ROADMAP // ngoài ra còn 2 kiểu: SATELLITE, HYBIRD
	};
	var myDiv = $("#map");
	map = new google.maps.Map(myDiv, mapOptions); // Map(): là một constructor khác của Google Map API có nhiệm vụ hiển thị map ra trang web
}

var ortherCoords = {
//coords là tọa độ
latitude: 10.8539079,
longitude: 106.6134167
};
//Hàm chính
function displayLocation(position) { 
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	$("#location").html("I'm at Latitude: " + latitude + ", Longitude: " + longitude);

	// tính khoảng cách
	var km = computeDistance(position.coords, ortherCoords);
	$("#distance").html("Khoảng cách là: "+ km + " km");
	showMap(position.coords);
}

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, showError);
	} else {
		alert("ô, trình duyệt không hỗ trợ, rất tiếc!");
	}
}

window.onload = getMyLocation;
