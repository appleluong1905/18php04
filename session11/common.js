var a;
a = 5;
a = a + 4;
//document.write(a);
//
//document.write("<br>");
var b;
b = 5;
b += 4;
//document.write(b);
//
//document.write("<br>");
var c;
c = 5;
c *= 4; // c = c * 4;
//document.write(c);
//
var x;
x = eval('9/3');

//document.write(x);
///

function cal(number){
	var result = document.getElementById('result').textContent;
	result += number;
	document.getElementById('result').innerHTML = result;
}
function resultCal(){
	var result = document.getElementById('result').textContent;
	document.getElementById('result').innerHTML = eval(result);
}
function resetCal(){
	document.getElementById('result').innerHTML = '';
}
