document.addEventListener("DOMContentLoaded", () => {

    const navbarList = document.getElementById('navbar_list-click');
    document.getElementById("hamburger-click").addEventListener("click", () => {
        navbarList.classList.toggle("menu-active");
        if (navbarList.classList.contains('menu-active')) {
            setTimeout(() => {
              navbarList.style.right = '0';
            }, 0);
          } else {
            navbarList.style.right = '';
          }
    })
    document.getElementById("sluzby-click").addEventListener("click", () => {
        document.getElementById("sluzby-active").classList.toggle("sluzby-active")
    })
})