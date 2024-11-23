import { useEffect, useRef, useState } from "react";
import axios from "axios";
import MatchingGame from "./MatchingGame";

export default function PracticeQuiz({ quizData, module, baseCall }) {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [que, setQue] = useState(null);
  const [correct, setCorrect] = useState(false);
   
  const opRefs = useRef([]);
   
//   console.log(score);
  useEffect(() => {
    if (quizData) {
      setQue(quizData);
    }
  }, [quizData]);

  useEffect(() => {
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    setCorrect(false);
    setQue(null); 
  }, [module]);

  const isImage = (url) => url.match(/\.(jpeg|jpg|gif|png)$/) != null;

  const checkAns = (e, ansIndex) => {
    if (!lock) {
      const isCorrect =
        que.question.options[ansIndex] === que.question.correctAnswer;

      if (isCorrect) {
        e.currentTarget.classList.add("correct");
        setScore((prev) => prev + 1);
        setCorrect(true);
      } else {
        e.currentTarget.classList.add("wrong");

        const correctIndex = que.question.options.findIndex(
          (opt) => opt === que.question.correctAnswer
        );
        if (correctIndex !== -1 && opRefs.current[correctIndex]) {
          opRefs.current[correctIndex].classList.add("correct");
        }
      }
      setLock(true);
    }
  };

  const handleMatchingComplete = (s) => {
    if(s == 3){
        setScore((prev) => prev + 1);
        setCorrect(true);
    }
    setLock(true);
  };

  const nextQuestion = () => {
    axios
      .post(
        "http://localhost:5000/quiz/answer-question",
        { correct },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data && response.data.question) {
          setQue(response.data);
          console.log(response);
          setIndex((prev) => prev + 1);
          setLock(false);
          resetOptions();
        } else {
          setResult(true);
        }
      })
      .catch((error) =>
        console.error("Failed to fetch the next question", error)
      );
  };

  const resetOptions = () => {
    opRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.remove("wrong");
        ref.classList.remove("correct");
      }
    });
    setCorrect(false);
  };

  const resetClick = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    resetOptions();
    baseCall();
  };

  return (
    <div className="bg-blue-100 bg-gradient py-4 px-0 my-6 md:m-6 h-auto">
      <div className="container d-flex flex-column items-center justify-center">
        {/* <div className="container mt-5 flex justify-center flex-wrap gap-3 mx-2 p-2 shadow bg-slate-50 rounded-3 w-50 text-wrap"></div> */}
        <div
          className="mt-2 p-8 pt-3 shadow-lg bg-slate-50 rounded-3 text-wrap text-clip basis-1/2"
          style={{ height: "fit-content" }}
        >
          {!que ? (
            <div className="text-center flex flex-col items-center justify-center h-96 w-full">
              👈 Choose an option from the left
            </div>
          ) : (
            <>
              <h2 className="text-center font-semibold my-2">
                {module.toUpperCase()} QUIZ
              </h2>
              <hr className="w-full" />
              {result ? (
                <div className="text-center flex flex-col gap-2 items-center justify-center h-52 w-full">
                  <div className="text-2xl">
                    You scored {score} out of 10
                  </div>
                  <button
                    onClick={resetClick}
                    className="bg-blue-400 m-2 rounded cursor-pointer text-white p-1 px-4"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <>
                  {que.question.options.columnA && que.question.options.columnB ? (
                    <MatchingGame
                      question={que.question}
                      onComplete={handleMatchingComplete}
                    />
                  ) : (
                    <>
                      <h4 className="text-start">
                        {index + 1}.{" "}
                        {isImage(que.question.question) ? (
                          <div className="flex justify-center">
                            <img
                              src={que.question.question}
                              alt="question"
                              className="w-40 h-36"
                            />
                          </div>
                        ) : (
                          que.question.question
                        )}
                      </h4>
                      <ul className="_testUl break-words md:grid md:grid-cols-2">
                        {Array.isArray(que.question.options) ? (
                          que.question.options.map((option, i) => (
                            <li
                              key={i}
                              ref={(el) => (opRefs.current[i] = el)}
                              onClick={(e) => checkAns(e, i)}
                              className="cursor-pointer"
                            >
                              {isImage(option) ? (
                                <div className="w-full flex justify-center items-center option-container">
                                  <img
                                    src={option}
                                    alt={`option ${i}`}
                                    className="h-28 w-24"
                                  />
                                </div>
                              ) : (
                                option
                              )}
                            </li>
                          ))
                        ) : (
                          <p>No options available</p>
                        )}
                      </ul>
                    </>
                  )}
                  <h6 className="text-center">
                    {index + 1} of 10 questions
                  </h6>
                  <button
                    onClick={nextQuestion}
                    className="bg-blue-500 mt-4 px-4 py-2 rounded text-white"
                    disabled={!lock}
                  >
                    Next
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
