let range = document.querySelector("#range");


range.oninput = () => {
   document.body.style.background = `linear-gradient(90deg, #487eb0 ${range.value}%, #ffffff ${range.value}.1%, #ffffff 100%)`;
}