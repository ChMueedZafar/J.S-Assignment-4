var num = [1,2,3,4];
console.log(num[1]);
num.push(5)
num.pop()
num.fill(1)
num.shift()
num.unshift(5)
num.reverse()
console.log(num.includes(2));
num.map( item => 2*item)
console.log(num.map( item => 2*item));
console.log (num.filter( item => item > 2));
console.log (num.find ( item => item > 2))
console.log (num.every( item => item > 0));
console.log (num.findIndex (item => item === 2 ));
console.log(num.reduce( (prev, curr )=> prev + curr  , 0));
console.log(num.toString());
console.log(num.join("*"));
let num1 = num.splice(2,0,"i","p")
console.log(num.slice (1,4));
num.sort(function(a, b){return a - b});
console.log(num);
