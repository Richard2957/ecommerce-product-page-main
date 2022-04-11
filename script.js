let imageSelected = 0;


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

const nav=document.querySelector(".nav");
document.querySelector(".hamburger").addEventListener("click",()=>{nav.classList.add("showmenu")})
document.querySelector(".closemenu").addEventListener("click",()=>{nav.classList.remove("showmenu")})