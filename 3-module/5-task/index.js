function getMinMax(str) {
  const toArr = inputData.split(" ");
  const res = toArr
    .filter((num) => {
      return Number(num);
    })
    .map((el) => {
      return Number(el);
    });

  let min = res[1];
  let max = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] > max) {
      max = res[i];
    }
    if (res[i] < min) {
      min = res[i];
    }
  }
  const result = {
    min: min,
    max: max,
  };

  return `min: ${result.min}, max: ${result.max}`;
}
