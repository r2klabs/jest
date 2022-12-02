const utilFunctions = {

    inch_to_cm: function(inch) {
        return inch * 2.54
    },

    palindrome: function(str) {
        var re = /[\W_]/g;
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
      },

    square_area: function(side){
        return side * side;
    },

    circle_area: function(radius){
        return Math.PI * radius * radius;
    }
}

module.exports = utilFunctions