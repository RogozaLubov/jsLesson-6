//task1
function count () {

  let str = 'hello world ,';
  let space = str.split(" ").length-1 + ' пробелов и ';
  let br = str.split('br/').length-1 + ' переводов строки ';
  alert("Вы ввели стоку: " +"\n"+ str + " в ней " + space + br );
}
count ()
//task2

function makeid() {
    
    let months = ["January", "February", "March", "April", "May", "June", "July"];

    let random = Math.floor(Math.random() * months.length);
    
    console.log(random, months[random]);
}
makeid()

//task3
let arr = ["one" , "two"];

function returnSplitString(string){
   return string.split(" ");
}

let splitStringArray = returnSplitString(arr[0]);
console.log (arr);

//task4 
let task =[' написать функцию , которая принимает название задачи и добавляет ее в массив по алфавиту'];
function addArr(string){
   return string.split(" ");
}

let splitStringArray = addArr(task[0]);

console.log(splitStringArray.sort());