/*Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.
*/

function getArea(lenght, width){
    return lenght*width;
}

function getPerimeter(lenght, width){
    return 2*(lenght+width);
}

console.log(getArea(4,10));
console.log(getPerimeter(1,5));
