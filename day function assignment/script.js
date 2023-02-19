//Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array

// var oddnum=function(num){
//     if(num%2 && num!=0)
//     {
//      console.log("odd")   
//     }
//     else{
//         console.log("even")
//     }
//    }
// console.log(oddnum(9))

// (function(num1){
//     if(num1%2 && num1!=0)
//     {
//      console.log("odd")   
//     }
//     else{
//         console.log("even")
//     }

// })
// (10);

//b.Convert all the strings to title caps in a string array
// var arr=function(arr1){
//     arr="hello";
// }
// console.log(arr.toUpperCase())

// function(arr2){
// arr2.uppercase();
// }
// (hai)

//C.Sum of all numbers in an array
// var sum=function(x,y,z){
//     return x+y+z;
// }
// console.log(sum(10,5,12))

// (function bar(p,q){
//     console.log(p+q)
// })
// (4,15);

//d.return all prime numbers in an array

// let array = [4,2,6,3,8,9,10,11]; 
// function isPrime(num) {
//   for (let start = 2; num > start; start++) {
//     if (num % start == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.filter(isPrime));

//e.Palindrome
// function isPalindrome(s)
// {
//     let a = s;
//     s = s.split('').reverse().join('');
//     return s == a;
// }
// function PalindromicStrings(arr,N)
// {
//     let ans = [];
//      for (let i = 0; i < N; i++) {
//          if (isPalindrome(arr[i])) {
//          ans.push(arr[i]);
//         }
//     }
//     return ans;
// }
// let arr = ["car","madam","hello","amma"];
// let N = arr.length;
// let s = PalindromicStrings(arr, N);
// if(s.length == 0)
//     console.log("-1");
// for(let st of s)
//     console.log(st," ");



//  function getMedian(ar1, ar2, n)
//   {
//    var i = 0; 
//    var j = 0; 
//    var count;
//    var m1 = -1, m2 = -1;
// for (count = 0; count <= n; count++)
//         {
//             if (i == n)
//             {
//                 m1 = m2;
//                 m2 = ar2[0];
//                 break;
//             }
//             {
//                 m1 = m2;
//                 m2 = ar1[0];
//                 break;
//             }
           
//             if (ar1[i] <= ar2[j])
//             {
//                 m1 = m2; 
//                 m2 = ar1[i];
//                 i++;
//             }
//             else
//             {
//                 m1 = m2; 
//                 m2 = ar2[j];
//                 j++;
//             }
//         }
//      return (m1 + m2)/2;
//     }
//          var ar1 = [1, 12, 15, 26, 38];
//     var ar2 = [2, 13, 17, 30, 45];
//     var n1 = ar1.length;
//     var n2 = ar2.length;
//     if (n1 == n2)
//         console.log("Median is "+ getMedian(ar1, ar2, n1));
//     else
//         console.log("Doesn't work for arrays of unequal size");


//3.Using arrow functions
//odd number

// var oddnum1=(num2) =>
// {
//     if(num2%2 && num2!=0)
//        {
//      console.log("odd")   
//      }
//     else{
//      console.log("even")
//     }
// }
// console.log(oddnum1(9))

// //sum of all numbers in an array

// var res=(i,j)=>{
//     var total=i+j
//     return total
// }
// console.log(res(20,30))

// Convert all the strings to title caps in a string array

// var arr1=(Arun)=>{
//         console.log(arr1.toUpperCase);
// }










