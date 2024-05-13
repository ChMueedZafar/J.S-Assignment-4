// // Javascript Arrays:-
// var num = [1,2,3,4];
// console.log(num[1]);
// num.push(5)
// num.pop()
// num.fill(1)
// num.shift()
// num.unshift(5)
// num.reverse(n())
// console.log(num.includes(2));
// num.map( item => 2*item)
// console.log(num.map( item => 2*item));
// console.log (num.filter( item => item > 2));
// console.log (num.find ( item => item > 2))
// console.log (num.every( item => item > 0));
// console.log (num.findIndex (item => item === 2 ));
// console.log(num.reduce( (prev, curr )=> prev + curr  , 0));
// console.log(num.toString());
// console.log(num.join("*"));
// let num1 = num.splice(2,0,"i","p")
// console.log(num);
// console.log(num.slice(1,4));
// let x = [1, 2, 3, 4, 5];

// // Sorting in ascending order
// x.sort();
// console.log("Sorted in ascending order:", x);

// // Sorting in ascending numerical order
// x.sort(function(a, b) {
//     return a - b;
// });
// console.log("Sorted in ascending numerical order:", x);

// // Sorting in descending numerical order
// x.sort(function(a, b) {
//     return b - a;
// });
// console.log("Sorted in descending numerical order:", x);

// // Sorting randomly (not reliable)
// x.sort(function(a, b) {
//     return 0.5 - Math.random();
// });
// console.log("Sorted randomly:", x);

// //  Dtata Types :-

// var age = 18;
// console.log (age);
// var name =  " jane ";
// console.log(name);
// var name = {first:"jane ", last :"doe "};
// console.log (name);
// var truth = false;
// console.log (truth);
// var sheets = ["HTML","CSS","JS"];
// console.log (sheets);
// var a ; typeof a;
// var a = null;
// console.log(a); 

//  IF -- ELSE Statment:-

// let age = 14;
// if ((age>= 14) && (age < 19)){
//      status = "Eligible."
// } else {
//      status ="not eligible"
// }
// console.log(status);
// Javascript JSON :-
// var str = '{"names ":[' +
//     '{"first":"hakuuna","lastN":"Matata"}'+
//     '{"first ": "jane","lastN":"Doe" },'+
//     '{"first": "Air ","last":"Jordan"}]}'
//     myobj = JSON.parse (str);
//     document.write(myobj.name[1].first);
//     var myJSON = JSON.stringify(myobj);
//     ocalStorage.setItem("testJSON",myJSON);
//     text = localStorage.getItem("testJSON");
//     console.log(str);
// Javascripit Object :-
// var student = {
//     firstName : "jANE",
//     lastName : "Doe",
//     age: 18,
//     innerHeight: 170,
//     fullName :function (){
//         return this. firstName + " "+this. lastName;
//     }
// };
// student.age = 19;
// // student[age]++
// Name = student.fullName();
// console.log(student.fullName());
// Javascripit Math:-
// var pi = Math.PI;

// Math.round(4,4);
// Math.round(4,5);
// Math.pow(2,8);
// Math.sqrt(49);
// Math.abs(-3.14);
// Math.ceil(3.14);
// Math.floor(3.99);
// Math.sin(0);
// Math.cos(Math.PI);
// Math.min(0,3,-2,2);
// Math.max(0,3,-2,2);
// Math.log(1);
// Math.exp(1);
// Math.random();
// Math.floor(Math.random()*5)+1;


// console.log(pi);
// console.log(Math.round());
// console.log(Math.round());
// console.log(Math.pow());
// console.log(Math.sqrt());
// console.log(Math.abs());
// console.log(Math.ceil());
// console.log(Math.floor());
// console.log(Math.sin());
// console.log(Math.cos());
// console.log(Math.min());
// console.log(Math.max());
// console.log(Math.log());
// console.log(Math.exp());
// console.log(Math.random());
// console.log(Math.floor());


// Javascrripit Numbers:-
// var pi =3.141;
// var pi=pi.toFixed(0);
// var pi = pi.toFixed(2);
// var pi = pi.toPrecision(2);
// var pi = pi.valueOf();
// var pi = Number(true);
// var pi = Number(new Date ())
// var pi =  parseInt("3 months");
// var pi = parseFloat("3.5 days");
// var pi =Number.Max_Value
// var pi = Number.MIN_VALUE
// var pi = Number.NEGATIVE_INFINITY
// var pi = Number.POSITIVE_INFINITY
// console.log(pi);

// let student = {name: 'KURNAL',education : 'BE IT '};
// console.log(Object.values(student));
// let student1 = {name: 'KRUNAL', education: 'BS IT '};
// let output = Object.keys(student1).map(function(e){
//     return student1[e]
// })
// console.log(output);
let student2 = {name: "MUEED",education: "ICS"};
let arr =[];
for(const prop in  student2){
    arr.push(student2[prop]);
}
console.log(arr);






