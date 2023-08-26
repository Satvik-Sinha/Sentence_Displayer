let form =document.getElementById("message-form")



form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    let input=document.querySelector('#message');
    let errorMsg=document.querySelector('#feedback');
    let heading=document.querySelector('h5');
    let message=document.querySelector('#Message-Content');

    console.log("Submitted");

    if(input.value ==="")
    {
        errorMsg.classList.add('show');
        
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 2000);
    }
    else{
        heading.classList.add('show');
        message.classList.add('show');
        message.textContent=input.value;
        input.value="";
    }
})
// btn.onclick()=>{
//     console.log("Submitted");
// }
