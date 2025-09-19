let display= document.querySelector("display")
let button = document.querySelectorAll('button')
for(let btn of button){
    btn.addEventListener("click",()=>{
        // console.log("hii");
        let txt=btn.innerText
        // console.log(txt);
        if(txt=="C"){
            display.value=""
        }else if(txt=="="){
             display.value=eval(display.value)
        }else{
            display.value=display.value+txt
        }
    })
}