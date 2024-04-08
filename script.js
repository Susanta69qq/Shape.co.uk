function navBar() {
    var nav = document.querySelector("nav");
    var log = document.querySelector("nav svg");
    var login = document.querySelector("nav #login");

    var tl = gsap.timeline();

    tl.to("nav", {
        position: "fixed",
        zIndex: 99,
        backgroundColor: "#F7F7F7",
        opacity: 20,
        left: "14%",
        width: "70vw",
        height: "6vw",
        borderRadius: "50px",
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top -10%",
            end: "top 20%",
            scrub: 3,
            pin: true
        }
    })

    tl.to("nav", {
        display: "none",
        scrollTrigger: {
            trigger: "nav",
            scroller: "body",
            start: "top -10%",
            end: "top 20%",
            scrub: 3,
            pin: true
        }
    })
}

navBar();

function mouseAnimation() {
    var box = document.querySelector("#box-container");
    var mouse = document.querySelector("#animeCursor");



    box.addEventListener("mousemove", function (dets) {
        mouse.style.left = `${dets.clientX}px`;
        mouse.style.top = `${dets.clientY}px`;

    })

    box.addEventListener("mouseenter", function () {
        gsap.to(mouse, {
            scale: 1
        })
    })

    box.addEventListener("mouseleave", function () {
        gsap.to(mouse, {
            scale: 0
        })
    })
}
mouseAnimation();


function featuresAnimator(){
    document.querySelectorAll("#about-cont").forEach(function(div){
        var image = div.querySelectorAll("img");
    
        div.addEventListener("mouseenter", function(){
            image.forEach(function(image){
                gsap.to(image, {
                    opacity: 1,
                    duration: 1,
                    delay:0.1,
                    ease:Power1,
            
                }, "a")
            })
        })
    
        div.addEventListener("mouseleave", function(){
            image.forEach(function(image){
                gsap.to(image, {
                    opacity: 0,
                    duration: 1,
                    delay:0.1,
                    ease:Power1,
            
                }, "a")
            })
        })
    
        var text = div.querySelectorAll("h1")
    
        div.addEventListener("mouseenter",function(){
            text.forEach(function(text){
                gsap.to(text, {
                    x:150,
                    duration: 1,
                    delay:0.1,
                    ease:Power1,
            
                }, "a")
            })
        })
    
        div.addEventListener("mouseleave",function(){
            text.forEach(function(text){
                gsap.to(text, {
                    x:0,
                    duration: 1,
                    delay:0.1,
                    ease:Power1,
            
                }, "a")
            })
        })
        
    })
    
}
featuresAnimator();

function mouseMover(){
    var container = document.querySelector("#about");
var mouse = document.querySelector("#mouse-follower");

container.addEventListener("mousemove", function(dets){
    mouse.style.left = `${dets.clientX}px`;
    mouse.style.top = `${dets.clientY}px`;
})

container.addEventListener("mouseenter", function(){
    gsap.to(mouse,{
        scale:1,

    })
})

container.addEventListener("mouseleave", function(){
    gsap.to(mouse,{
        scale:0,
        
    })
})
}
mouseMover();