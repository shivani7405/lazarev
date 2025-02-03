function navAnimation(){
        var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function(){
        let tl = gsap.timeline()

        // Reset the states first
        gsap.set(".nav-part2 h5 span", {
            y: 25
        })
        
        // Then start the animation sequence
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.3
        })   

        tl.to(".nav-part2 h5", { 
            display: "block",
            duration: 0.1
        })

        tl.to(".nav-part2 h5 span", { 
            y: 0,
            duration: 0.3,
            stagger: {
                amount: 0.6
            }
        })
    })

    nav.addEventListener("mouseleave", function(){
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            duration: 0.3,
            stagger: {
                amount: 0.2
            }
        })

        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation()

// Image movement code
function page2animation(){
        var rightElem = document.querySelectorAll(".right-elem")    
        rightElem.forEach(function(elem){
        // var elemImage = elem.querySelector("elem"); // Better selector for image
        
        elem.addEventListener("mouseenter", function(){
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: 0.3
            });
        });    
        
        elem.addEventListener("mouseleave", function(){
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: 0.3
            });    
        });
        
        //console.log(elem.getBoundingClientRect())  /*it gives the dimension of any div here elem is a rectangular div or any shape div so it gives positions or dimenions like x and y*/
        elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-50,
                y:dets.y - elem.getBoundingClientRect().y-190
            })
        })
    });
}

page2animation()