// API




// Api link from brower take dami api link
let ul =document.querySelector("ul")
fetch('https://jsonplaceholder.typicode.com/todos').
then((data)=>{
    // console.log(data);
    return data.json()
}).then((res)=>{
    console.log(res);
    show(res)
})
function show(res){
     for( let i of res){
       let li= document.createElement("li")
       let h1= document.createElement("h1")
       li.innerText=i.id
       li.innerText=i.title
       ul.append(li,h1)
     }
}

// let obj={
//     id:1,
//     name:"Anjali",
//     lastname:"patel"

// }