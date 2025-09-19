// open weather link and key from sgin in 

// let key="9f6290d6cda9a36a63755fadee71f83d"
// // let city="jabalpur"
// let btn=document.querySelector("button")
// let inp=document.querySelector("input")
// btn.addEventListener("click",()=>{
//     let searchText= inp.value

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${key}`).
// then((data)=>{
    
//     return data.json()
// }).then((res)=>{
//     console.log(res);
   
// })
// })


// find sum of 3 digit number
// let arr=[1,2,-3,4,5]
// let k=3
// let n=arr.length
// // console.log(n);
// let maxSum=0
// for(let i=0;i<n-k;i++){
//     let currSum=0
//     for(let j=i;j<i+k;j++){
//         currSum+=arr[j]
//     }
//     if(currSum>maxSum){
//         maxSum=currSum
//     } 
//  } 
// console.log(maxSum);





// logic - 2 using sliding  window shift toward one and add next element and remove previous element
// let arr=[1,2,-3,4,5]
// let k=3
// let n=arr.length
// let wSum=0;
//  for(let i=0;i<k;i++){
//       wSum+=arr[i]
//  }
//  let maxSum=wSum
//  for(let i=k;i<n;i++){
//     wSum= wSum+arr[i]-arr[i-k]
//     if(wSum>maxSum){
//         maxSum=wSum
//     }
//  }
//  console.log(maxSum);
 


import first from './Home.js'
import {last,sum} from './Home.js'
console.log(first);
console.log(last);
sum()


