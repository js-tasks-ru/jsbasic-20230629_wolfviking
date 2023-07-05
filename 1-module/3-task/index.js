
function ucFirst(str) {
  if (str === "") {
    return str;
  }

  let lowerString = str.toLowerCase();
  let firstCharacter = lowerString[0];
  let firstCharacterUpper = firstCharacter.toUpperCase();
  let restOfString = lowerString.slice(1);
  let result = firstCharacterUpper + restOfString;


  return result;
}

console.log(ucFirst("'в'"));
