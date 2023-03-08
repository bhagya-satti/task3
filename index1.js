let text= document.getElementById("v");
let Button = document.getElementById("btn");
let list = document.getElementById("list");

Button.addEventListener('click',()=>{
    if (text.value.trim()!=0){
    let ele = document.createElement('div');
    ele.classList.add('element');
    ele.innerHTML = `<pre class="p" >                      ${text.value}            <i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-xmark"></i>    </pre>`
    b=text.value;
    list.appendChild(ele);
    text.value='';

}
else{
   alert('please enter a task');
}

    
})

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')){
        document.getElementById("v").value=b;
        document.getElementById("v").focus();
        e.target.parentElement.parentElement.remove();
        
    }
})
list.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
        document.getElementById("v").value='';
    }
})
