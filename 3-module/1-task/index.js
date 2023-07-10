function namify(users) {
  let names = [];
  users.map((el) => {
    names.push(el.name);
  });
  return names;
}
