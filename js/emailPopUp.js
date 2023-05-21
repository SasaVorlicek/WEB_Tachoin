document.addEventListener("DOMContentLoaded", () => { 
    const popup = document.getElementById("FormPopup");

    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        popup.style.display = "block";
        document.getElementById("textarea").value = "";
        const inputs = document.querySelectorAll("#form input")
        for (const input of inputs) {
            input.value = "";
        }
    });
    document.getElementById("FormCloseBtn").addEventListener("click", function() {
        popup.style.display = "none";
    });
    document.addEventListener("click", (event) => {
        if (event.target !== document.querySelector(".PopupWindow_content") && !document.querySelector(".PopupWindow_content").contains(event.target)) {
            popup.style.display = "none";
        }
    });
})

