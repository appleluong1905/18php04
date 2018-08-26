
$( "#myBirthday" ).datepicker();
function getMyBirthday() {
	var myBirthday = $('#myBirthday').val();
	console.log(myBirthday);
	var MyDate = new Date(myBirthday);
	var MyMonth = MyDate.getMonth() + 1;
	var MyDay = MyDate.getDay();
	console.log(MyDay);
}
// var today = new Date('08/17/2018');
// var thisMonth = today.getMonth() + 1;
// console.log(thisMonth);