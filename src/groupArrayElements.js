const groupArrayElements = (array, numberOfChunks) => {
  if (numberOfChunks <= 0) return array;
  const chunkSize = Math.ceil(array.length / numberOfChunks);

  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

module.exports = groupArrayElements;
