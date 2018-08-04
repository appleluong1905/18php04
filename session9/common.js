// khai bao bien a
var a = 9;
var b = 6;
// + - * / %

/*
 + - * / %
*/

document.write("Tong cua a + b la:");
document.write(a + b);
// alert('accccc');
// console.log('abccc');
document.getElementById('example').innerHTML
= 'Hello innerHTML';

document.write("<br>");
document.write("Hieu cua a - b la:");
document.write(a - b);
document.write("<br>");
document.write("Tich cua a * b la:");
document.write(a * b);
document.write("<br>");
document.write("Thuong cua a / b la:");
document.write(a / b);
document.write("<br>");
document.write("Thuong cua a % b la:");
document.write(a % b);
//
var h;
var g = 5;
var c, d, e;
var f = "Hello";
document.write("<br>");
document.write(typeof h);
document.write("<br>");
document.write(typeof g);
document.write("<br>");
document.write(typeof f);
//
var myUserName = 'Canh'; //var a = "Canh";
var myPhone = '0988794607'; //var b = "0988794607";
// var my username = 'Canh';
// var soDienThoai;


// if 
	// true - code
//else
	// false - code
document.write("<br>");
var myBirthday;
myBirthday = 1987;
if(myBirthday % 2) {
	document.write('Ban sinh nam le');
} else {
	document.write('Ban sinh nam chan');
}
document.write("<br>");
//
if(myBirthday % 2 == 0) {
	document.write('Ban sinh nam chan');
} else {
	document.write('Ban sinh nam le');
}
document.write("<br>");

for (i = 0; i <= 10; i++) {
	document.write(i);
	document.write("<br>");
}
//
for (i = 0; i <= 100; i++) {
	if(i % 15 == 0){
		document.write(i);
		document.write(" chia het cho 15 <br>");
	} else if(i % 3 == 0) {
		document.write(i);
		document.write(" chia het cho 3 <br>");
	} else if(i % 5 == 0){
		document.write(i);
		document.write(" chia het cho 5 <br>");
	}
}

// if (condition)
	// true - code
//else if (condition)
	// true - code
//else
	// false - code

//while (condition) {
	// true - code
//}

//do {
	// true - code
// }while (condition)	
var i = 10;
while (i > 0) {
	document.write(i);
	document.write("<br>");
	i--;
}

var i = 10;
do {
	document.write(i);
	document.write("<br>");
	i--;
} while (i > 0);
// 
//switch  ... case
var today = 6;
switch (today) {
	case 2:
		document.write('Monday');
		break;
	case 3:
		document.write('Tuesday');
		break;
	case 4:
		document.write('Wednesday');
		break;
	case 5:
		document.write('Thursday');
		break;
	case 6:
		document.write('Friday');
		break;
	case 7:
		document.write('Saturday');
		break;
	default:
		document.write('Sunday');
		break;
}