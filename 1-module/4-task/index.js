let str = 'Быть или не  быть вот в xxxxxx  чём вопрос.';


function checkSpam(str) {
  if (str.includes('1xBet') || str.includes('xxx') || str.includes('XXX')) {
    console.log(true);
  } else {
    console.log(false);
  }


}

checkSpam(str);

