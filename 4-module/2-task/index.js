function makeDiagonalRed(table) {
  let i = 0;
  for (let tableRow of table.querySelectorAll("tr")) {
    tableRow.children[i].style.background = "red";
    i++;
  }
}
