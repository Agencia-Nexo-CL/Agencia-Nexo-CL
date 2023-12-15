const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
  event.preventDefault();
  const frm = event.target;
  const formData = {
  };

  const URL = `https://www.instagram.com/agencianexo.cl`;

  window.open(URL, "_blank");
});