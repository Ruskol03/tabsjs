 window.addEventListener("DOMContentLoaded", function (){

    "use strict";

let tab = document.querySelectorAll(".tabs"),
    wrapper = document.querySelector(".wrapper"),
    tabContent = document.querySelectorAll(".tab-content");


/* 
g = hide
e = show 
a = tabs
b wrapper
c tab content*/


    function nativTabs (a,b,c,e,g){
        
        function hideTabContent(a){
            for(let i = a; i < c.length;i++){
                c[i].classList.remove(e);
                c[i].classList.add(g);
            }
        }
        hideTabContent(1);

        function showTabContent(b){
                if(c[b].classList.contains(g)){
                    c[b].classList.remove(g);
                    c[b].classList.add(e);

                }
        }

        b.addEventListener("click", function (event){
            let target = event.target;

            if(target && target.classList.contains("tabs")){
                for(let i = 0;i<a.length;i++){
                    if(target==a[i]){
                        hideTabContent(0);
                        showTabContent(i);
                        break;

                    }
                }
            }
        });




    


    }
    nativTabs(tab, wrapper, tabContent, "show", "hide");
    
});