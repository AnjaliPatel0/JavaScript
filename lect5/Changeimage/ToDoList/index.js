 let inp=document.querySelector('input')
 let btn= document.querySelector('button')
 let ul= document.querySelector('ul')
 let del= document.querySelector('del')

 btn.addEventListener("click",()=>{
    let data = inp.value
    let li=document.createElement("li")
    li.innerText=data
    ul.append(li)
    inp.value=" "

    li.addEventListener("click",()=>{
        li.remove()

        
    })
    
 })