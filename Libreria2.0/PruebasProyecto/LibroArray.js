const LibroArray = (arr, len) => {
  // Iniciamos arr
  const chunkedArr = [];

  // Bucle con arr
  arr.forEach(val => {
    // Se obtiene el ultimo elemento
    const last = chunkedArr[chunkedArr.length - 1];

    // Se comprube si el tamano  de las ultimos son iguales
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
