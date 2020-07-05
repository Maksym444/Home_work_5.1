function xmasTree(pyramidHeight =9, symbol="*") {
    if (symbol.length != 1) {
      return "Больше одного символа";
    }
    var xmas = '';
    var symb = symbol;
      for (var i = 1; i <= pyramidHeight; i++) {
        xmas += '\n' + symb.repeat (i);
      } 
      return xmas;
    }
    
    alert(xmasTree(5,'&'));

module.exports = { xmasTree };