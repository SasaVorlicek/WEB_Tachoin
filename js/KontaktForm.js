function Smazat() {
  document.getElementById("textarea").value = "";
  const inputs = document.querySelectorAll("#form input");
  for (const input of inputs) {
      input.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => { 


const select = document.getElementById("subject");
const PHPInput = document.getElementById("PHPInput");
select.addEventListener("change", function() {
  const selectedOption = select.options[select.selectedIndex];
  const selectedValue = selectedOption.getAttribute("data-value");
  PHPInput.value = selectedValue;
});

const urlParams = new URLSearchParams(window.location.search);
const selectedValue = urlParams.get("selectedValue");
for (let i = 0; i < select.options.length; i++) {
  const option = select.options[i];
  if (option.getAttribute("data-value") === selectedValue) {
    option.selected = true;
    PHPInput.value = selectedValue;
    break;
  }
}

  const popup = document.getElementById("FormPopup");
  const form = document.getElementById("form");
  const PopupText = document.getElementById("FormPopupText"); 

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      fetch("submit-form.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              PopupText.innerText = "Formulář byl odeslán";
              popup.style.display = "block";
              Smazat();
            } else if (data.status === "captcha-failed") {
              PopupText.innerText = "Captcha ověření selhalo";
              popup.style.display = "block";
              Smazat();
            }
          })
          .catch(() => {
            PopupText.innerText = "Nastala chyba, zkuste to prosím znovu";
            popup.style.display = "block";
            Smazat();
          });
      });
  document.getElementById("FormCloseBtn").addEventListener("click", function() {
      popup.style.display = "none";
  });
  document.addEventListener("click", (event) => {
      if (event.target !== document.querySelector(".PopupWindow_content") && !document.querySelector(".PopupWindow_content").contains(event.target)) {
          popup.style.display = "none";
      }
  });
});