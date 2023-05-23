document.addEventListener("DOMContentLoaded", () => {
    const navbarList = document.getElementById('navbar_list-click');
    const hamburger = document.getElementById("hamburger-click")
    hamburger.addEventListener("click", () => {
        navbarList.classList.toggle("menu-active");
          hamburger.classList.toggle("ham-active")     

    })
    document.getElementById("sluzby-click").addEventListener("click", () => {
        document.getElementById("sluzby-active").classList.toggle("sluzby-active")
    })
})