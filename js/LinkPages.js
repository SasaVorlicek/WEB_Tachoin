document.addEventListener("DOMContentLoaded", () => { 

const clickKontaktForm = document.getElementById("clickKontaktForm");
clickKontaktForm.addEventListener("click", function(event) {
    event.preventDefault();
    const selectedValue = clickKontaktForm.getAttribute("data-link")
    const url = "kontakt?selectedValue=" + encodeURIComponent(selectedValue);
    window.location.href = url;
  });

});
