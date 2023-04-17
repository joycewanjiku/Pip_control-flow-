 const number=(4,6,78,11);
 if(number>0){
     console.log("The number is positive");
 }
 console.log("contlow flow is the best");

// #else...statement
// const num=numbers(43,87,98);

//  Print the numbers from 0 to 15
for (var i=12; i<=24; i++){
    console.log( i);
}
//  Print the numbers from 12 to 24
for(var i =10; i>= -20; i--){
    if(i%2 ==0)
    console.log(i);
}

// Print the ODD numbers from 7 to 31
 for(var i = 7;i <= 31; i++){
     if(i % 2 !=0){
        console.log(i);
    }
}
// /  Print the EVEN numbers from 10 to -20
 for(var i = 0; i >= -20; i --){
     if(i % 2 ==0){
         console.log(i);
    }
 }

//  Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
 for(var i =1; i<=  45; i++){
     if(i%3 ==0 && i % 5 == 0){
        console.log("FizzBuzz");
   }else if(i% 3 ==0){
        console.log("Fizz");
    }else if (i % 5== 0){
        console.log("Buzz");
     }
 }
// Print all the elements of the following array
// Calculate the sum of all the numbers in the following array
 var numbersArray =[56,89,43,87,78];
 var sum =0;
 for(var i =0; i < numbersArray.length; i++){
  
    sum = sum + numbersArray[i];
}
 console.log("THe sum is :" + sum);
// using map

 let arr=[10,40,60,89,]
 const newArr=arr.map(function(){

     return number*4
 })

console.log(newArr);

// second method

 let arry=[10,40,60,89]
 const newArry=arry.map(element=>element*4)
 console.log(newArry);