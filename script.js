const buttons=document.querySelectorAll(".add");
const remove=document.querySelectorAll(".remove");
const addone=document.querySelectorAll(".addone");
const shoping=document.querySelector(".nav-icon a span");


remove.forEach((remo)=>{
    remo.addEventListener("click",()=>{
        const quantity=remo.parentElement.querySelector(".amount");
        let number=Number(quantity.textContent);
        if(number>0){
            number--;
            quantity.textContent=number;
        }
    });
});
addone.forEach((add)=>{
    add.addEventListener("click",()=>{
        const quantity=add.parentElement.querySelector(".amount");
        let number=Number(quantity.textContent);
        number++;
        quantity.textContent=number;
    });
});
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
       const quantity=button.parentElement.querySelector(".count .amount");
       const originaltext=button.textContent;
       const productquality=Number(quantity.textContent);
       const cartnumber=Number(shoping.textContent);
       if(Number(quantity.textContent)>0){
        button.innerHTML=`<i class="fa-solid fa-check"></i>`;
        shoping.textContent=productquality+cartnumber;
       }
       setTimeout(()=>{
        button.textContent=originaltext;
        quantity.textContent=1;
       },2000);
    })
})
