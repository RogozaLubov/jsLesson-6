//task1
function wordSpaces (text) {
    let numberOfSpacesTags = [ " " , " <br>"]
    let number = ["пробелов" , "переводов"]
    let totalSoFar = [];
   
   
    for (var i = 0; i < wordSpaces.length; i++)
    if (text(i) === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
    }
    totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
  }

alert("Вы ввели в строку:  "+numberOfSpacesTags.split('') + "в ней "+ "и переводов строки" )
// wordSpaces.split(' ').length-1