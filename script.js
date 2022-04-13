let imageSelected = 0;
let itemsInBasket=0;
let itemsGonnaAdd=0;
const cta=document.querySelector(".cta");


// Event listeners for clicking on thumbnails (not mobile)
const thumbs = [...document.querySelectorAll(".thumb")];
thumbs.forEach((thumb, index, thumbs) => {
    thumb.addEventListener("click", () => {
        thumbs[imageSelected].classList.remove("selected");
        thumbs[index].classList.add("selected");
        imageSelected = index;
        updateBigPic()
    })
})

function updateBigPic() {
    const imgbigpic = document.querySelector(".imgbigpic");
    imgbigpic.src = "./images/image-product-" + (imageSelected + 1) + ".jpg"
}

// Event listeners for prev/next buttons (mobile)
[...document.querySelectorAll(".prevnext")].forEach(x => {
    const isPrev = x.classList.contains("prev");
    x.addEventListener("click", function () {
        thumbs[imageSelected].classList.remove("selected");
        const index = (imageSelected + (isPrev ? 3 : 1)) % 4;
        thumbs[index].classList.add("selected");
        imageSelected = index;
        updateBigPic();
    })
});

//Event listeners to open/close menu on mobile when hamburger clicked
const nav=document.querySelector(".nav");
document.querySelector(".hamburger").addEventListener("click",()=>{nav.classList.add("showmenu")})
document.querySelector(".closemenu").addEventListener("click",()=>{nav.classList.remove("showmenu")})

// Event listeners for + and - buttons
document.querySelector(".orderingform>div:nth-child(1)").addEventListener("click",()=>changeGonnaAddBy(-1)  )
document.querySelector(".orderingform>div:nth-child(3)").addEventListener("click",()=>changeGonnaAddBy(1)  )


// Event listeners to show/hide basket

document.querySelector(".basket").addEventListener("click",()=>{
    document.querySelector(".mybasket").classList.toggle("mybasket-show")
})




function changeGonnaAddBy(n){
if(itemsGonnaAdd==0 && n==-1)return;
itemsGonnaAdd+=n;
document.querySelector(".orderingform>div:nth-child(2)").innerHTML=itemsGonnaAdd;
// Enable/disable the AddToBasket button
if (itemsGonnaAdd){
    cta.classList.remove("cta-disabled");
}else{
    cta.classList.add("cta-disabled");
}
}

cta.addEventListener("click",()=>{
if (!itemsGonnaAdd) return;
itemsInBasket+=itemsGonnaAdd;
changeGonnaAddBy(itemsGonnaAdd*(-1));
updateBasketDisplay()
})


document.querySelector(".trashcan").addEventListener("click",()=>{
itemsInBasket=0;
updateBasketDisplay();

})

const updateBasketDisplay = ()=>{
// update little oranmge number on the basket icon
const basketdisplay=document.querySelector(".basketdisplay");
basketdisplay.innerHTML=itemsInBasket;
basketdisplay.style.display= (itemsInBasket) ? "flex":"none";
// update the basket panel

document.querySelector(".mybasket-empty").style.display=(itemsInBasket)? "none":"block";
document.querySelector(".mybasket-full").style.display=(itemsInBasket)? "flex":"none";
document.querySelector(".checkout").style.display=(itemsInBasket)? "flex":"none";
document.querySelector(".details>p:nth-child(2)").innerHTML=`£125 x ${itemsInBasket} = <span>£${itemsInBasket * 125}</span>`;


}
updateBasketDisplay();

