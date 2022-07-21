const countAlreadyAnswerd = (data) => {
  let count = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index] === "null") {
      count = count + 1;
    }
  }
  return count;
};

export default countAlreadyAnswerd;
