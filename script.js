"use strict"

// function on click burger btn
document.querySelector("#btn-1").addEventListener("click", function () {
    let menu = document.querySelector("#menu");  
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else if(menu.style.display = "none"){
      menu.style.display = "flex";
    }
  });
 // function to changed class when clicked on li a 
  document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");

    menu.addEventListener("click", function(event) {
      if (event.target.tagName === "A") {
        let allLinks = menu.querySelectorAll("a");
        for (let link of allLinks) {
          if (link === event.target) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      }
    });
  });
//function on scroll
  window.addEventListener('scroll', function() {
    let sP = window.scrollY;
    
    if (sP >= 555 && sP<=1316) {
      document.querySelector('.p-html').style.width = '90%';
      document.querySelector('.p-css').style.width = '85%';
      document.querySelector('.p-js').style.width = '70%';
      document.querySelector('.p-bs').style.width = '80%';
      
    } else if (sP >= 1416) {
      document.querySelector('.p-html').style.width = '0%';
      document.querySelector('.p-css').style.width = '0%';
      document.querySelector('.p-js').style.width = '0%';
      document.querySelector('.p-bs').style.width = '0%';
      
    }
    //  function for scroll active
    let actives=document.querySelectorAll("#menu li a")
    if(sP<=50 && sP<=600){
      actives[0].style.color="#01a7a7"  
      actives[1].style.color="black"  
      actives[2].style.color="black"  
      actives[3].style.color="black"  
    } else if(sP>=640 && sP<=1551){
      actives[0].style.color="black"  
      actives[1].style.color="#01a7a7"  
      actives[2].style.color="black"  
      actives[4].style.color="black"  
      actives[3].style.color="black"
    }else if(sP>=1551 && sP<=2190){
      actives[0].style.color="black"  
      actives[1].style.color="black"  
      actives[2].style.color="#01a7a7"  
      actives[4].style.color="black"  
      actives[3].style.color="black"
    }else if(sP>=2190 && sP<=3025){
      actives[0].style.color="black"  
      actives[1].style.color="black"
      actives[2].style.color="black"  
      actives[4].style.color="black"  
      actives[3].style.color="#01a7a7"  
    }else if(sP>=3025){
      actives[0].style.color="black"  
      actives[1].style.color="black"
      actives[2].style.color="black"  
      actives[4].style.color="#01a7a7"  
      actives[3].style.color="black"  
    }
    
  }); 
// function for small devices
  document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector("#menu");
    let list = menu.children;
    
    // Loop through the list items and add click event listeners
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function() {
        if (i === 0 && window.innerWidth<=712) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
          
        } else if (i === 1 && window.innerWidth<=712) {
          window.scrollTo({ top: 506, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
          
        } else if (i === 2 && window.innerWidth<=712) {
          window.scrollTo({ top: 2290, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"

        } else if (i === 3 && window.innerWidth<=712) {
          window.scrollTo({ top: 3565, behavior: 'smooth' });
          document.querySelector("#menu").style.display="none"
        }else if (i === 4 && window.innerWidth<=712) {
            window.scrollTo({ top: 4669, behavior: 'smooth' });
            document.querySelector("#menu").style.display="none"
          }
      });
    }
    
  
  });

// function for projects
  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("all-work").addEventListener("click",function(){
        let other=document.querySelectorAll(".all")
            other.forEach((e)=>{
                e.style.display="block"
            })
      
      document.getElementById("count").textContent=`total project = ${other.length}`  
    })
    document.getElementById("js-work").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-js")
        let jswork=document.querySelectorAll(".js")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
                
            })
            jswork.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
            document.getElementById("count").textContent=`javascript project = ${jswork.length}`
    })
    document.getElementById("j-query").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-jq")
        let jqwork=document.querySelectorAll(".jquery")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
            })
            jqwork.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
            document.getElementById("count").textContent= `jQuery project = ${jqwork.length}`
    })
    document.getElementById("s-n-b").addEventListener("click",function(){
        let other=document.querySelectorAll(".non-sass-b")
        let S_work=document.querySelectorAll(".sass-b")
            other.forEach((e)=>{
                if(e.style.display="block"){
                    e.style.display="none"
                }
            })
            S_work.forEach((e)=>{
                if(e.style.display==="none"){
                    e.style.display="block"
                }
            })
            document.getElementById("count").textContent=`bootstarp & sass project = ${S_work.length}`
    })
  })
