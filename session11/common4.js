function validateForm() {
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	if(name == ''){
		alert('Please input your name');
	}
	if(phone == ''){
		alert('Please input your phone');
	}
}