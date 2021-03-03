let sandwich = document.querySelector(".header__sandwich"),
        arrwos = document.querySelectorAll(".sandwich__arrow"),
        menu = document.querySelector(".aside-menu-bar");
        menuContent = document.querySelector(".aside-menu-bar__content");

        sandwich.onclick = ()=>{
            
            if (arrwos[0].classList[1] != "active") {
                for (let i = 0; i < arrwos.length; i++) {
                arrwos[i].classList.add("active");
                }
                menu.classList.add("active");
                setTimeout(()=>{menuContent.classList.add("active");},300);
                
            }
            else{
                for (let i = 0; i < arrwos.length; i++) {
                    arrwos[i].classList.remove("active");
                }
                menu.classList.remove("active");
                menuContent.classList.remove("active");
            }
            
        }
        