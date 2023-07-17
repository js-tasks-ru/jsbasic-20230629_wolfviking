function highlight(table) {
  let tbody = table.getElementsByTagName("tbody")[0];
  let trs = tbody.getElementsByTagName("tr");

  for (let i = 0; i < trs.length; i++) {
    //1
    let statusCell = trs[i].cells[3];
    if (statusCell.dataset.available === "true") {
      statusCell.classList.add("available");
    }

    if (statusCell.dataset.available === "false") {
      statusCell.classList.add("unavailable");
    }

    //2
    if (!statusCell.dataset.available) {
      trs[i].setAttribute("hidden", "");
    }

    //3
    let genderCell = trs[i].cells[2];
    if (genderCell.innerHTML === "m") {
      trs[i].classList.add("male");
    }

    if (genderCell.innerHTML === "f") {
      trs[i].classList.add("female");
    }

    //4
    let ageCell = trs[i].cells[1];
    if (+ageCell.innerHTML < 18) {
      trs[i].style.textDecoration = "line-through";
    }

    console.log(trs);
  }
}
