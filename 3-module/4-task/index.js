function showSalary(users, age) {
  let res = users
    .filter((el) => {
      return el.age > age;
    })
    .map((el) => {
      return el.name + ", " + el.balance + "\n";
    });
  return res.join("");
}
