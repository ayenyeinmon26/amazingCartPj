import '/style.scss';
import {showLoaderUi,removeLoaderUi} from "./js/loader";
import { createitemUi } from './js/item';
import { addTocart } from './js/cart';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

  showLoaderUi();

  // setTimeout(function(){
  // removeLoaderUi()
  // },5000);
  //to use for another usuage we set this array

export const itemrow=document.querySelector(".item-row");
export const cartBtn=document.querySelector(".cart-btn");//need to export
export const cartCounter=document.querySelectorAll(".cart-counter");//need to export
export let items=[];
export const cartBox=document.getElementById("cartBox");//offcanvas body
export const total=document.querySelector("#total");
// export const allCartcost=document.querySelectorAll(".cart-cost");

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              items=json;
              items.forEach(item => {
                itemrow.append(createitemUi(item));
              });
              removeLoaderUi()
            }
              );

              // Event for add tocart btn using Event delegation
              itemrow.addEventListener('click',e=>{
                if(e.target.classList.contains("add-cart-btn")){
                 addTocart(e);
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