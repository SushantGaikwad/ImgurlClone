let navbar = document.getElementById("navbar");
let tags = document.getElementById("tags");
let back_div = document.getElementById("back-div");
let grid = document.querySelector(".grid");




window.onscroll = function(){
    if(window.pageYOffset >= tags.offsetHeight){
        navbar.classList.add("sticky");
        tags.classList.add("tags-after")
    }else{
        navbar.classList.remove("sticky");
        tags.classList.remove("tags-after")
    }

    if(window.pageYOffset >= back_div.offsetHeight){
        navbar.classList.add("newNav");
        grid.style = "top=0";
    }else{
        navbar.classList.remove("newNav");
    }
}

