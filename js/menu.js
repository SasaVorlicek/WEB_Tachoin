document.addEventListener("DOMContentLoaded", () => {

    console.log(navigator.language)

    const navbarList = document.getElementById('navbar_list-click');
    const hamburger = document.getElementById("hamburger-click")
    let k = 0
    hamburger.addEventListener("click", () => {
        navbarList.classList.toggle("menu-active");
          hamburger.classList.toggle("ham-active")     

    })
    document.getElementById("sluzby-click").addEventListener("click", () => {
        document.getElementById("sluzby-active").classList.toggle("sluzby-active")
    })
})