import { useEffect, useState } from "react";

const Main = ({
  data,
  lengthQuestion,
  numberQuestion,
  handleQuestion,
  isActiveQuestion,
  alreadyAnswerd,
}) => {
  return (
    data && (
      <div className="card w-96 h-72 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <span>Jumlah soal : {lengthQuestion}</span>

          <span>Sudah dikerjakan :{lengthQuestion - alreadyAnswerd}</span>

          <h2 className="card-title"></h2>

          <p>
            <span>{numberQuestion}.</span> {data.question}
          </p>
          <div className="card-actions justify-end">
            <button
              className={`btn btn-success ${
                isActiveQuestion === "null" && "btn-outline"
              } ${
                isActiveQuestion !== "null" && isActiveQuestion
                  ? ""
                  : "btn-outline"
              }`}
              onClick={() => handleQuestion(true)}
            >
              True
            </button>
            <button
              className={`btn btn-error ${
                isActiveQuestion === "null" && "btn-outline"
              } ${
                isActiveQuestion !== "null" && !isActiveQuestion
                  ? ""
                  : "btn-outline"
              }`}
              onClick={() => handleQuestion(false)}
            >
              False
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Main;
