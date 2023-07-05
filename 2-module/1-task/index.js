

function sumSalary(salaries) {
  let res = 0;
  for (const key in salaries) {
    if (salaries[key] === Infinity || salaries[key] === -Infinity || isNaN(salaries[key])) {
      continue;

    } else if (Number(salaries[key])) {
      res += salaries[key];
    }
  }
  return res;
}


