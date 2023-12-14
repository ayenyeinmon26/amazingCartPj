import { excerpt } from "./utility";

export const createitemUi =function({id,title,image,description,price}){
     // console.log(item);
     let itemdiv=document.createElement("div");
     itemdiv.classList.add("col-md-6","col-lg-4");
     itemdiv.innerHTML=`
     <div class="card item-card " item-id=${id}>
       <div class="card-body d-flex flex-column">
       <div class=" mb-3">
         <img src="${image}" class="item-image">
       </div>
         <p class="card-title fw-bold text-truncate">
           ${title}
         </p>
         <p class="card-text small">
            ${excerpt(description)}
         </p>
         <div class="d-flex justify-content-between align-items-center mt-auto">
         <p class="fw-bold mb-0">$<span>${price}</span></p>
         <button class="btn btn-outline-primary add-cart-btn" >
           <i class="bi bi-cart-plus pe-none"></i>Add to Cart
         </button>
         </div>
       </div>
     </div>
   </div>
     `;
     return itemdiv;
   
}