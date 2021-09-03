//task1
// function count () {

//   let str = 'hello world ,';
//   let space = str.split(" ").length-1 + ' пробелов и ';
//   let br = str.split('br/').length-1 + ' переводов строки ';
// // alert("Вы ввели стоку: " +"\n"+ str + " в ней " + space + br );
// }
// count ()
//task2

// function makeid() {
    
//     let months = ["January", "February", "March", "April", "May", "June", "July"];

//     let random = Math.floor(Math.random() * months.length);
    
//     console.log(random, months[random]);
// }
// makeid()

//task3

// function smartSplitAll (strArr) {
//     var newArr = [];
//     for (var i = 0; i < strArr.length; i++) {
//       var str = strArr[i].trim();
//       if (str.indexOf(' ') > -1)
//           newArr = newArr.concat(str.split(/\s+/));
//       else 
//           newArr.push(str);
//     }

//     return newArr;
//   }
  
//   console.log(smartSplitAll(["firstName lastName", "anotherString"]));
//   // result: ["firstName", "lastName", "anotherString"]

let arr = ["one" , "two"];

function returnSplitString(string){
   return string.split(" ");
}

let splitStringArray = returnSplitString(arr[0]);
console.log (arr);