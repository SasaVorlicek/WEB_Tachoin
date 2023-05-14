document.addEventListener("DOMContentLoaded", () => {

    const navbarList = document.getElementById('navbar_list-click');
    const hamburger = document.getElementById("hamburger-click")
    let k = 0
    hamburger.addEventListener("click", () => {
        navbarList.classList.toggle("menu-active");
        if (navbarList.classList.contains('menu-active')) {
            setTimeout(() => {
              navbarList.style.right = '0';
            }, 0);
          } else {
            navbarList.style.right = '';
          }
          hamburger.classList.toggle("ham-active")     

    })
    document.getElementById("sluzby-click").addEventListener("click", () => {
        document.getElementById("sluzby-active").classList.toggle("sluzby-active")
    })
})