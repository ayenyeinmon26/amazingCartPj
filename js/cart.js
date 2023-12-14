import { cartBox, cartBtn, cartCounter, items,total} from "../main";

export const cartCounterUpdate= function(){
    let count=parseInt(cartCounter[0].innerText);
    cartCounter.forEach(current=>{
        current.innerText=count+1;
    })
}
window.inc=function(event,price){
    let currentCart=event.target.closest(".item-in-cart");
    let cartqty=currentCart.querySelector(".cart-quantity");
    let cartcost=currentCart.querySelector(".cart-cost");
    cartqty.valueAsNumber+=1;
    // console.log(currentCart);
    cartcost.innerText=(cartqty.valueAsNumber * price ).toFixed(2);
    costTotal();

}
window.dec=function(event,price){
    let currentCart=event.target.closest(".item-in-cart");
    let cartqty=currentCart.querySelector(".cart-quantity");
    let cartcost=currentCart.querySelector(".cart-cost");
    cartqty.valueAsNumber-=1;
    // console.log(currentCart);
    cartcost.innerText=(cartqty.valueAsNumber * price ).toFixed(2);
    costTotal();
}
export const costTotal=function(){
     let  all=document.querySelectorAll(".cart-cost");
    total.innerHTML=  [...all].reduce((pv,cv)=> pv + parseFloat(cv.innerHTML),0).toFixed(2);

   
}
export const createItemInCart=function({id,title,price,image}){
    const div=document.createElement("div");
    div.classList.add("item-in-cart");
    
    div.innerHTML=`
    <div class="p-3 border rounded mb-3">
    <div class="mb-2">
    <img src="${image}" class=" cart-item-image">
    </div>
    <p class="small fw-bold">${title}</p>
    <div class=" row justify-content-between align-items-center">
        <div class=" col-4">
        <p class=" mb-0">$<span class="cart-cost">${price}</span></p>
        </div>
        <div class="col-6">
        <div class=" cart-item-quantity input-group input-group-sm">
        <button class=" btn btn-primary" onclick="dec(event,${price})">
            <i class=" bi bi-dash pe-none"></i>
        </button>
        <input type="number" class="form-control text-end cart-quantity" value="1">
        <button class=" btn btn-primary" onclick="inc(event,${price})">
            <i class=" bi bi-plus pe-none"></i>
        </button>
        </div>
        </div>
    </div>
 
    `;
    cartBox.append(div);
}
export const addTocart =function(e){
    let currItemcard = (e.target.closest(".item-card"));
    let itemId=currItemcard.getAttribute("item-id");
    let itemDetail=items.find(item=> item.id=== parseInt(itemId));//Get the detail of add to cart's items
    let currImg = currItemcard.querySelector(".item-image");
    let newImg = new Image();
    newImg.src = currImg.src;

  
   newImg.style.position="fixed";
   newImg.style.height = 100+"px";
   newImg.style.zIndex=2000;
   newImg.style.transition=0.5+"s";
   // get the current Image of position and put the new image right there
   newImg.style.top =currImg.getBoundingClientRect().top+"px";
   newImg.style.left =currImg.getBoundingClientRect().left+"px";
   document.body.append(newImg);

     //Get to the position of the cart
    setTimeout(_ => {
        newImg.style.height = 0 + "px";
        newImg.style.transform = "rotate(360deg)";
        // newImg.style.top = cartBtn.querySelector(".bi").getBoundingClientRect().top + "px";
        // newImg.style.left = cartBtn.querySelector(".bi").getBoundingClientRect().left + "px"; ||
        newImg.style.top = (cartBtn.getBoundingClientRect().top + 10) + "px";
        newImg.style.left = (cartBtn.getBoundingClientRect().left + 30) + "px";
    }, 10);
    // After transistion 0.5s (500 mil sec)
    setTimeout(_ => {
        cartBtn.classList.add("animate__tada");
        //Add the cart counter +1
        cartCounterUpdate();
        createItemInCart(itemDetail);
        costTotal();
        newImg.remove();

    }, 800)

     // if we don't remove animation the animation will make once
     cartBtn.addEventListener('animationend', _ => {
        cartBtn.classList.remove("animate__tada");

    }
    )

 
    
}