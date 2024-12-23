import { useEffect, useRef, useState } from "react";
import axios from "axios";
import MatchingGame from "./MatchingGame";
import { PieChart } from "@mui/x-charts/PieChart";

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
    if (s == 3) {
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
        console.log(response);
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
      <div className="mx-2 md:mx-6 p-4 d-flex flex-column items-center justify-center">
        <div
          className="mt-2 sm:p-8 p-5 pt-3 shadow-lg bg-slate-50 rounded-3 text-wrap text-clip basis-1/2"
          style={{ height: "fit-content" }}
        >
          {!que ? (
            <div className="text-center flex flex-col sm:text-xl items-center justify-center h-96 w-full">
              👈 Choose an Option
            </div>
          ) : (
            <>
              <h2 className="text-center font-semibold my-2">
                {module.toUpperCase()} QUIZ
              </h2>
              <hr className="w-full" />
              {result ? (
                <div className="text-center flex flex-col items-center h-[26rem] w-full  ">
                  <div className="hidden sm:flex flex-col items-center justify-center relative">
                    <PieChart
                      className="text-black "
                      colors={["#f87171", " #4ade80"]}
                      series={[
                        {
                          data: [
                            { id: 0, value: `${10 - score}` },
                            { id: 1, value: score },
                          ],
                          outerRadius: 100,
                          innerRadius: 60,
                          cornerRadius: 3,
                          cx: 200,
                          highlightScope: {
                            faded: "global",
                            highlighted: "item",
                          },
                          faded: {
                            innerRadius: 30,
                            additionalRadius: -30,
                            color: "gray",
                          },
                        },
                      ]}
                      width={400}
                      height={300}
                      color={"black"}
                    />
                 
                    <div
                      className="absolute text-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {score}/10
                    </div>
                  </div>

                  <div className="flex flex-col sm:hidden items-center justify-center relative">
                    <PieChart
                      className="text-black "
                      colors={["#f87171", " #4ade80"]}
                      series={[
                        {
                          data: [
                            { id: 0, value: `${10 - score}` },
                            { id: 1, value: score },
                          ],
                          outerRadius: 70,
                          innerRadius: 50,
                          cornerRadius: 3,
                          cx: 95,
                          highlightScope: {
                            faded: "global",
                            highlighted: "item",
                          },
                          faded: {
                            innerRadius: 30,
                            additionalRadius: -30,
                            color: "gray",
                          },
                        },
                      ]}
                      width={200}
                      height={300}
                      color={"black"}
                    />
                 
                    <div
                      className="absolute text-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {score}/10
                    </div>
                  </div>

                  {/* <div className="text-2xl">You scored {score} out of 10</div> */}
                  <button
                    onClick={resetClick}
                    className="bg-blue-400 m-2 rounded cursor-pointer text-white p-1 px-2"
                  >
                    Try again
                  </button>
                </div>



              ) : (
                <>
                  {que.question.options.columnA &&
                  que.question.options.columnB ? (
                    <MatchingGame
                      question={que.question}
                      onComplete={handleMatchingComplete}
                    />
                  ) : (
                    <>
                      <p className="sm:text-2xl text-start">
                        {index + 1}.{" "}
                        {isImage(que.question.question) ? (
                          <div className="flex justify-center">
                            <img
                              src={que.question.question}
                              alt="question"
                              className="sm:w-40 w-26 sm:h-36 h-28"
                            />
                          </div>
                        ) : (
                          que.question.question
                        )}
                      </p>
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
                  <h6 className="text-center">{index + 1} of 10 questions</h6>
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
