const groupArrayElements = (array, numberOfChunks) => {
  if (numberOfChunks <= 0) return array;
  const result = [];
  for (let i = 0; i < numberOfChunks; i++) {
    result[i] = array.slice(i);
  }
  return result;
};

module.exports = groupArrayElements;
