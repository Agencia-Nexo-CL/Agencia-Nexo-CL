const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
  event.preventDefault();
  const frm = event.target;

  const URL = `https://www.instagram.com/agencianexo.cl`;

  window.open(URL, "_blank");
});

function whats(){
  const URL = `https://api.whatsapp.com/send?phone=56968605331`;
  window.open(URL, "_blank");
}