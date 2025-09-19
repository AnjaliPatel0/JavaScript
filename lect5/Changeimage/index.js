// const arr =[]
// const imageEl =document.querySelector('img');
// let num =0;
// setInterval(function(){
//     imageEl.setAttribute('src',arr[num])
//     num=(num+1)%arr.length;
// },2000)

// EVENT
// first way
// let body=document.querySelector("body")
//  function fun1(){
//     body.style.backgroundColor="pink"
//  }

// let h2=document.querySelector("h2")
//  function fun1() {
//    h2.innerText="hello"
//  }

// let btn = document.querySelector("button")
// let body= document.querySelector("body")

// // Second way most use
// btn.addEventListener("click",()=>{
//    body.style.backgroundColor="red"
// })

//  third way
// btn.onclick=function(){
//    console.log("hello");
//    body.style.backgroundColor="pink"
   
// }

// let inp = document.querySelector("input")
// let h2 = document.querySelector("h2")
// // inp.addEventListener("input",()=>{
// //    console.log("hello");
   
// // })

// inp.addEventListener("input",(e)=>{
//    //  console.log(e.target.value);   // to get what is written in input
//    // console.log(e.target); // event is called
//    h2.innerText=e.target.value
// })

let formEl = document.querySelector("form")
formEl.addEventListener("submit",(e)=>{
   e.preventDefault()
   
   // console.log(formEl[0].value);
   // console.log(formEl[1].value);
   // console.log(formEl[2].value);
   

    let data={
   name:formEl[0].value,
   email:formEl[1].value,
   password:formEl[2].value,
   }
   console.log(data);
   localStorage.setItem("form,Data",JSON.stringify(data))


   let form2= document.querySelector("#form2")
   form2.addEventListener("submit",(e)=>{
      e.preventDefault()
      let saveData= localStorage.getItem("formData")
      let dataobj= JSON.parse(saveData)
      let loginobj={
         email:form2[0].value,
         pass:form2[1].value,
      }
      if(dataobj.email==loginobj.email && dataobj.pass==loginobj.pass){
         prompt("login successfully")
      }else{
         prompt("login failed")
      }
       })
})