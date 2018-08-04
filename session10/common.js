var myName = 'Canh';
var a = 10;
// dinh nghia ham
function funtionName() {
	document.write('Hello function');
}

//goi ham
funtionName();
document.write('<br>');
///
function sumNumber(a = 8, b = 1) {
	document.write(a + b);
}
sumNumber(6, 7);
document.write('<br>');
sumNumber();
///
/*
Description: Ham nay de tinh tong 2 so
Created 04/08/2018
Created by CanhLH
*/
function sumNumber2(a = 5, b = 4) {
	return a + b;
}

function sumNumber21(a = 5, b = 4) {
	var c;
	c = a + b;
	return c;
}


document.write('<br>');
document.write(sumNumber2(6, 7));
document.write('<br>');

console.log(a);

if(sumNumber2(6, 4) > 12) {
	document.write('Tong lon hon 12');
}
//
document.write('<br>');
var b = 5;
if (b > 5) {
	document.write('b lon hon 5');
} else {
	document.write('b nho hon hoac bang 5');
}
//
document.write('<br>');
var b = 5;
var c;
c = (b > 5)?'b lon hon 5':'b nho hon hoac bang 5';
document.write(c);

// (condition)?true:false;
//
document.write('<br>');
for (var i = 0; i < 3; i++) {
	document.write(i);
	document.write('<br>');
}
//
document.write('---------------------');
document.write('<br>');
var i = 5;
--i;
document.write(i);
document.write('<br>');
var j = 3;
var c;
c = --j + 5;
document.write(c);
document.write('<br>');
document.write(j);
//
document.write('<br>');
var k = 3;
var d;
d = k-- + 5;
document.write(d);
document.write('<br>');
document.write(k);
//
document.write('---------------------');
document.write('<br>');
var x = 5;
var y = 9;
var z;
z = x + 5 + y-- + ++y - 6 + --x + --y + ++y + x++;
    5 + 5 + 8   +   8 - 6 +   5 +   8  + 8  + 6
document.write(z);
document.write(5 + 5 + 8   +   8 - 6 +   5 +   8  + 8  + 6);

