/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

function triangle(num) {

var triangle = "";

for( var i = 0; i < num; i++) {
	triangle += "#"
	console.log(triangle)
}
}

triangle(7)