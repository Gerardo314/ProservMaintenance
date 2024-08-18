

window.onload=function(){
    const loc_options =[   
        "Orion Prosper",
        "Orion Prosper Lakes",
        "Orion Mckinney",
        "Ram Partners"
    ];
    
    const image_options=["prosper.png","prosperLakes.png","mckinney.png","RamPartners.png"];
    const loc_webs = 
    [
    "https://www.orionprosper.com/",
    "https://www.orionprosperlakes.com/",
    "https://www.orionmckinney.com/",
    "https://www.rampartnersllc.com/"
    ];
    var i=0;
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav__links");

    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        
    }

    //const locationText = document.getElementsByClassName("location_name")[0];
    const locationImg = document.getElementsByClassName("image")[0];
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    //locationText.textContent= loc_options[i];
    locationImg.href = loc_webs[i];
    locationImg.style.backgroundImage = "url(/images/"+image_options[i]+")";
    console.log("applied everything");
    prevBtn.onclick  = function()
    {

    if(i==0)
    i=loc_options.length-1;
    else
    i=(i-1)%loc_options.length;

    //locationImg.classList.toggle("prev-anim");
    //locationText.classList.toggle("prev-anim");
    //locationText.dataset.nextText =locationText[i];
    setTimeout(()=>{
        //locationText.textContent = loc_options[i];
        locationImg.style.backgroundImage = "url(/images/"+image_options[i]+")";
        //locationText.classList.toggle("prev-anim");
        //locationImg.classList.toggle("prev-anim");
    },455);

    }   
    nextBtn.onclick  = function()
    {
        i=(i+1)%loc_options.length;
        //locationText.classList.toggle("next-anim");
        //locationImg.classList.toggle("next-anim");
       // locationText.dataset.nextText =locationText[i];
        setTimeout(()=>{
        //locationText.textContent = loc_options[i];
        locationImg.style.backgroundImage = "url(/images/"+image_options[i]+")";
        //locationText.classList.toggle("next-anim");
        // locationImg.classList.toggle("next-anim");
        },455);

    }      
}



