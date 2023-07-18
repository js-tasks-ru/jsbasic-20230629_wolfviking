function toggleText() {
  let clickBtn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");

  clickBtn.addEventListener("click", () => {
    text.hidden = !text.hidden;
  });
}
