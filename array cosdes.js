/*Array
/*let numbers = [2, 4, 6, 8, 10];
function square(number) {
  return number * number
}
let square_numbers = numbers.map(square);
console.log(square_numbers);
o/P [4,8,36,64,100]*/


/*let students = ['vini','maanu','thri'];
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}
o/p  vini
     mannu
     thri*/

/*let city = ["California", "Barcelona", "Paris", "Kathmandu"];
let len = city.length;
console.log(len);
o/p 4*/

/*function viniHello(name){
    return"Hello"+name
} viniHello()
console.log(viniHello("vineesha"))
o/p Hellovineesha*/

/*function vineesha(){
    console.log("welcome to java script");
    
}vineesha();*/

/*function displaysum(num1,num2){
    var total=num1+num2;
    console.log(total);
}
displaysum (5,6);
o/p 11*/

/*function kanna (a,b){
    var total=a+b;
    return total;
}
console.log(kanna(50,40))

o/p 90*/

/*function getsum(A,v){
    var sum=A+v;
    return sum;
}
console.log(getsum(1,22))
o/p 23*/

//meraki question

/*function number_arry (arr1,arr2){
    for (var i=0;i<arr1.length;i++){
        if (arr1[i]%2==0 && arr2[i]%2==0){
        console.log("done even hai")
    }
       else{
        console.log("done even hahi hai")
      }
    }
}number_arry([2,6,18,10,3,75],[6,19,24,12,3,87])

o/p  done even hai
done even hahi hai
done even hai
done even hai
done even hahi hai
done even hahi hai*/

/*function vote(a){
    if (a>=18){
        console.log("eligible")
    }
    else{
        console.log("not eligible")
    }
}
vote(18)
vote(16)*/


// let arr=["vini","manu","amar","kanna"]
// arr.reverse();
// console.log('arr after reverse:',arr)


// arr = [1,2,3,4,5,6,7,8,9]
// brr = arr.slice().reverse()  
// console.log(arr)
// console.log(brr)


// let a=["vini","manu","amar","kanna"]
// arr.reverse();
// console.log('arr after reverse:',arr)


/*var a=require(readl
var b=require(readline_sync).question("enter lowercase :");
	var c=require(readline_sync).questionInt("enter number :");
	var d=require(readline_sync).question("enter special symbols :");
	let s=(a+b+c+d);
	if (a>="A" && a<="Z"){
	    if (b>="a" && b<="z"){
        if (c>="0" && c<="9"){
	            if (d in ("!@#$%&")){
	                if (s==a+b+c+d){
	                    console.log(a+b+c+d);
	                    console.log("strong password");
	                }
            }
	        }	    }
}
	else{
	    console.log("invalid");
	}/*




var a=prompt("enter " );
var b=prompt()
if ((a>="A" && a<="Z") && (a>="a" && a<="z") && (a>="0" && a<="9") && (a in ("!@#$%&"))){
  console.log("strongpassword");
}
else{
    console.log("invalid");
}


/*console.log('welcome ATM');
pin=prompt('enter a your pin');
balance=40000;
pin==1532;
deposite=5000;
withdraw=4000;
console.log('1.deposite,2.balance,3.withdraw,4.mini-staement');option=prompt('enter no');
  if (option==1){
    deposite=5000;
    balance=balance+deposite;
    console.log('total balance');
  } else if(option==2){
    console.log('balance');
  }else if(option==3){
    balance=withdraw-balance
    console.log('balance');
  }
  else if(option==4){
    console.log('----atm');
    console.log('username');
    console.log('totalbalace');
    console.log('thank you');
  }
else{
  console.log('enter correct password')
}*/

/*var num=prompt("enter a number")
var flog=0
   for(i=2;i<num;i++){
    if (num%2==0){
      flog
      break;
    }
    if(flog==0){
      console.log("thisprime")
    }
    else{
      console.log("thisnotprime")
    }
   }*/ 






/*var languages = ["JavaScript", "Python", "C++", "Java", "Lua"]
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}
o/p javascript
    Python
    c++
    java
    lua*/


/*var fruit =["apple",  "banana",   "orange",   "mango"];
var text=fruit.join();
console.log(text);
o/p = apple,banana,orange,mango */

/*var names=["vineesha",22,true,23];
var a=names.join("*")
console.log(a);
o/p vineeesha*22*true*23/*

/*const string = 'vineesha';
for (let i in string) {
    console.log(string[i]);
}
o/p v
    i
    n
    e
    e
    s
    h
    a*/

/*var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var odd_numbers=0;
var even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       even_numbers+=1
   }
   else{
       odd_numbers+=1 
   }
}
console.log(odd_numbers);
console.log(even_numbers);
o/p 7
    4*/

    /*var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
    var count_odd_numbers=0;
    var sum_odd_numbers=0;
    var sum_even_numbers=0;
    var count_even_numbers=0;
    for(var i of elements){
       if(i%2 ===0){
           sum_even_numbers+=i;
           count_even_numbers+=1;
       }
       else{
           sum_odd_numbers+=i;
           count_odd_numbers+=1;
       }
    }
    console.log((sum_even_numbers+sum_odd_numbers)/2);
    console.log(count_odd_numbers);
    console.log(count_even_numbers);
    console.log(sum_odd_numbers);
    console.log(sum_even_numbers); */  



/*a=[2,5,4,7,6,9,10,13]
let c1=0
let c2=0
for (let i of a){
    if (i%2==0){
        c1+=1
        console.log(i,'even')
    }
    else{
        c2+=1
        console.log(i,'odd')
    }
}
console.log("even",c1)
console.log("odd",c2)*/





