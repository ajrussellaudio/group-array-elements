const groupArrayElements = (array, numberOfChunks) => {
  if (numberOfChunks <= 0) return array;
  const chunkSize = Math.ceil(array.length / numberOfChunks);
  return Array(numberOfChunks)
    .fill(null)
    .map((_item, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize))
    .filter(chunk => chunk.length > 0);
};

module.exports = groupArrayElements;
