import '/style.scss';
import {showLoaderUi,removeLoaderUi} from "./js/loader";

// //obj destructuring
// let myself={
//   name:"anm",
//   age:22
// }
// console.log(myself.name,myself.age);
// let {name,age}=myself;
// console.log(name,age);

  showLoaderUi();

  // setTimeout(function(){
  // removeLoaderUi()
  // },5000);

  //to use for another usuage we set this array

let itemrow=document.querySelector(".item-row");
let cartBtn=document.querySelector(".cart-btn");
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              let items=[];
              items=json
              //console.log(items);
              //console.log(typeof(items));
              items.forEach(item => {
               // console.log(item);
                let itemdiv=document.createElement("div");
                itemdiv.classList.add("col-md-6","col-lg-4");
                itemdiv.innerHTML=`
                <div class="card item-card">
                  <div class="card-body d-flex flex-column">
                  <div class=" mb-3">
                    <img src="${item.image}" class="item-image">
                  </div>
                    <p class="card-title fw-bold text-truncate">
                      ${item.title}
                    </p>
                    <p class="card-text small">${item.description.substring(0,100)}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                    <p class="fw-bold mb-0">$<span>100</span></p>
                    <button class="btn btn-outline-primary add-cart-btn" >
                      <i class="bi bi-cart-plus pe-none"></i>Add to Cart
                    </button>
                    </div>
                  </div>
                </div>
              </div>
                `;
                itemrow.append(itemdiv);
              });
              removeLoaderUi()
            }
              );
            // Event for add tocart btn using Event delegation
              itemrow.addEventListener('click',e=>{
                // console.log(e.target);
                if(e.target.classList.contains("add-cart-btn")){
                  //console.log("Added",e.target)
                  let currItemcard=(e.target.closest(".item-card"));
                  //console.log(e.target.closest(".item-card"));
                  let currImg=currItemcard.querySelector(".item-image");
                 // console.log(currImg);
                 let newImg=new Image();
                 newImg.src=currImg.src;
                //  console.log(newImg);
               
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
                    newImg.style.height=0+"px";
                    newImg.style.transform="rotate(360deg)";
                    // newImg.style.top = cartBtn.querySelector(".bi").getBoundingClientRect().top + "px";
                    // newImg.style.left = cartBtn.querySelector(".bi").getBoundingClientRect().left + "px"; ||
                    newImg.style.top = (cartBtn.getBoundingClientRect().top+10) + "px";
                    newImg.style.left = (cartBtn.getBoundingClientRect().left+30) + "px";
                    // After transistion 0.5s (500 mil sec)
                    setTimeout(_=>{
                      cartBtn.classList.add("animate__tada");
                      // if we don't remove animation the animation will make once
                      cartBtn.addEventListener('animationend',_=> {
                        cartBtn.classList.remove("animate__tada");
                      }
                      )
                    },800)
                  }, 10);


                }
              }
              )
            //The easy way to add 
            // window.addToCart=event=>{
            //   console.log("Added")
            // }
            // window.addToCart=function(event){
            //   console.log("Added",event.target)
            // }
             //  onclick="addToCart(event)" ps:have to add this in button html