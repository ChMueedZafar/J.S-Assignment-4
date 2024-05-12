// Javascript Arrays:-
var num = [1,2,3,4];
console.log(num[1]);
num.push(5)
num.pop()
num.fill(1)
num.shift()
num.unshift(5)
num.reverse(n())
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
console.log(num);
console.log(num.slice(1,4));
let x = [1, 2, 3, 4, 5];

// Sorting in ascending order
x.sort();
console.log("Sorted in ascending order:", x);

// Sorting in ascending numerical order
x.sort(function(a, b) {
    return a - b;
});
console.log("Sorted in ascending numerical order:", x);

// Sorting in descending numerical order
x.sort(function(a, b) {
    return b - a;
});
console.log("Sorted in descending numerical order:", x);

// Sorting randomly (not reliable)
x.sort(function(a, b) {
    return 0.5 - Math.random();
});
console.log("Sorted randomly:", x);

//  Dtata Types :-

var age = 18;
console.log (age);
var name =  " jane ";
console.log(name);
var name = {first:"jane ", last :"doe "};
console.log (name);
var truth = false;
console.log (truth);
var sheets = ["HTML","CSS","JS"];
console.log (sheets);
var a ; typeof a;
var a = null;
console.log(a); 

//  IF -- ELSE Statment:-

let age = 14;
if ((age>= 14) && (age < 19)){
     status = "Eligible."
} else {
     status ="not eligible"
}
console.log(status);
// Javascript JSON :-
var str = '{"names ":[' +
    '{"first":"hakuuna","lastN":"Matata"}'+
    '{"first ": "jane","lastN":"Doe" },'+
    '{"first": "Air ","last":"Jordan"}]}'
    myobj = JSON.parse (str);
    document.write(myobj.name[1].first);
    var myJSON = JSON.stringify(myobj);
    ocalStorage.setItem("testJSON",myJSON);
    text = localStorage.getItem("testJSON");
    console.log(str);

