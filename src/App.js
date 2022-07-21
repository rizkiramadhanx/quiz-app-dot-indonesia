import Main from "./page/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import currentDataFunc from "./utils/currentData";
import countResult from "./utils/result";
import countAlreadyAnswerd from "./utils/countAlreadyAnswered";
import Navbar from "./component/Navbar";

function App() {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(null);
  const [lengthQuestion, setLengthQuestion] = useState();
  const [currentAnswer, setCurrentAnswer] = useState();
  const [alreadyAnswerd, setAlreadyAnswerd] = useState(0);
  const [resultData, setResultData] = useState(null);

  const handleSubmit = () => {
    const dataResult = countResult(data, currentAnswer);
    setResultData(dataResult);
    setNumber(0);
  };

  const handleQuestion = (e) => {
    let newCurrentAnswer = currentAnswer;
    newCurrentAnswer[number] = e;
    setAlreadyAnswerd(countAlreadyAnswerd(newCurrentAnswer));
    setCurrentAnswer(newCurrentAnswer);
    setNumber(number === data.length - 1 ? number : number + 1);
  };

  const dataAPI = async () => {
    const data = await axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean"
      )
      .then((res) => {
        return res.data;
      });
    await setData(data.results);
    await setLengthQuestion(data.results.length);
    await setCurrentAnswer(currentDataFunc(data.results));
    return;
  };

  useEffect(() => {
    dataAPI();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex justify-center mt-16">
        <div className="flex flex-col mt-5">
          <div className="bg-slate-300 w-96 h-12 rounded-md flex justify-center p-2">
            <div className="text-xl">DOT Indonesia</div>
          </div>
          <div className="flex justify-center mt-5">
            {data && (
              <>
                <Main
                  alreadyAnswerd={alreadyAnswerd}
                  data={data[number]}
                  lengthQuestion={lengthQuestion}
                  isActiveQuestion={currentAnswer[number]}
                  numberQuestion={number + 1}
                  handleQuestion={handleQuestion}
                />
              </>
            )}
          </div>
          <div className="flex justify-center mt-5">
            <button
              className="btn btn-info"
              onClick={() => setNumber(number === 0 ? number : number - 1)}
            >
              sebelum
            </button>

            <button
              className="btn btn-accent ml-3"
              onClick={() =>
                setNumber(number === data.length - 1 ? number : number + 1)
              }
            >
              selanjutnya
            </button>

            <button className="btn btn-warning ml-3">
              <a href="#my-modal-2" onClick={handleSubmit}>
                Selesai
              </a>
            </button>
            {resultData && (
              <div className="modal" id="my-modal-2">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Congratulations! you got
                  </h3>
                  <h1 className="text-8xl font-semibold text-center">
                    {resultData.score}
                  </h1>
                  <h3 className="text-center m-3">Dengan rincian :</h3>
                  <h2>Benar : {resultData.true}</h2>
                  <h2>Salah : {resultData.false}</h2>
                  <h2>Tidak dijawab : {resultData.noAnswer}</h2>
                  <div className="modal-action">
                    <a href="#" className="btn">
                      Kembali
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
