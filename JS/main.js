function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
})