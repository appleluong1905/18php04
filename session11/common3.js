var x = "Hello PHP04 class";
// lay chieu dai cua chuoi
document.write(x.length);

// thay the chuoi ky tu trong chuoi
var newX;
newX = x.replace('class', 'new');
document.write('<br>');
document.write(newX);
document.write('<br>');
var posX;
posX = x.indexOf('H');
document.write(posX);
document.write('<br>');

var posXlast;
posXlast = x.lastIndexOf('H');
document.write(posXlast);
document.write('<br>');

var newXslice;
newXslice = x.slice(3, 8);
document.write(newXslice);
document.write('<br>');
document.write(newXslice.length);

document.write('<br>');

var newXsubstring;
newXsubstring = x.substring(0, 16);
document.write(newXsubstring);
document.write('<br>');
document.write(newXsubstring.length);


document.write('<br>');

var newXupperCase;
newXupperCase = x.toUpperCase();
document.write(newXupperCase);
document.write('<br>');
var y = 'The concat() method can be used instead of the plus operator. These two lines do the same:';
document.write(y.toUpperCase());
document.write('<br>');

var newXlowerCase;
newXlowerCase = x.toLowerCase();
document.write(newXlowerCase);