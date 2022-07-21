const countResult = (dataAPI, result) => {
  const data = dataAPI.map((res) => res.correct_answer);
  let newData = [];
  let score = 0;
  let bad = 0;
  let noAnswer = 0;

  for (let index = 0; index < data.length; index++) {
    if (data[index] === "True") {
      newData.push(true);
    } else {
      newData.push(false);
    }
  }

  for (let i = 0; i < newData.length; i++) {
    if (newData[i] === result[i]) {
      score = score + 1;
    }
  }

  for (let i = 0; i < newData.length; i++) {
    if (result[i] === "null") {
      noAnswer = noAnswer + 1;
    } else {
      bad = bad + 1;
    }
  }

  const hasil = {
    score: (score / dataAPI.length) * 100,
    true: score,
    noAnswer: noAnswer,
    false: Math.abs(bad - score),
  };

  return hasil;
};

export default countResult;
