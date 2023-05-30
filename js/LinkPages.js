document.addEventListener("DOMContentLoaded", () => { 

const clickKontaktForm = document.getElementById("clickKontaktForm");
clickKontaktForm.addEventListener("click", function(event) {
    event.preventDefault();
  
    const selectedValue = clickKontaktForm.getAttribute("data-link")
  
    // Create the URL with the selected value as a parameter
    const url = "kontakt?selectedValue=" + encodeURIComponent(selectedValue);
  
    // Redirect to the kontakt page with the parameter in the URL
    window.location.href = url;
  });

});
