
function truncate(str, maxlength) {
  let res;
  if (str.length > maxlength) {
    res = str.slice(0, maxlength - 1);
    console.log(res + "...");
  } else {
    console.log(str);
  }


}

