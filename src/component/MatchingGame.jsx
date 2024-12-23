import React, { useState, useEffect } from "react";

const MatchingGame = ({ question, onComplete }) => {
  const { columnA, columnB } = question.options;
  const { correctAnswer } = question;

  const [selectedItem, setSelectedItem] = useState(null);
  const [matches, setMatches] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [completeCalled, setCompleteCalled] = useState(false);
  const [score, setScore] = useState(0);

  const isAlphabet = correctAnswer[0]?.hasOwnProperty("alphabet");
  const isSignName = correctAnswer[0]?.hasOwnProperty("sign_name");
  const [usedItems, setUsedItems] = useState([]);

  useEffect(() => {
    if (matches.length === columnA.length && !completeCalled) {
      setAllSelected(true);
      setCompleteCalled(true);
      onComplete(score);
    }
  }, [matches, columnA.length, completeCalled, onComplete, score]);

  useEffect(() => {
    setSelectedItem(null);
    setMatches([]);
    setAllSelected(false);
    setCompleteCalled(false);
    setScore(0);
    setUsedItems([]);
  }, [question]);

  const handleItemSelect = (item) => setSelectedItem(item);

  const handleImageSelect = (image) => {
    if (!selectedItem) return;

    const isCorrect = correctAnswer.some((answer) => {
      if (isAlphabet && isSignName) {
        return (
          (answer.alphabet === selectedItem && answer.signImage === image) ||
          (answer.sign_name === selectedItem && answer.cloud_location === image)
        );
      }
      if (isAlphabet) {
        return answer.alphabet === selectedItem && answer.signImage === image;
      }
      if (isSignName) {
        return (
          answer.sign_name === selectedItem && answer.cloud_location === image
        );
      }
      return false;
    });

    setMatches((prevMatches) => [
      ...prevMatches,
      { item: selectedItem, image, isCorrect },
    ]);

    setUsedItems((prevUsedItems) => [...prevUsedItems, selectedItem]);
    if (isCorrect) {
      setScore((score) => score + 1);
      setUsedItems((prevUsedItems) => [...prevUsedItems, image]);
    }
    setSelectedItem(null);
  };

  return (
    <div className="sm:p-4">
      <h2 className=" sm:text-3xl font-semibold text-center mb-6 text-blue-700">
        Match the Signs!
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-2 border-blue-400 bg-yellow-50">
          <thead>
            <tr>
              <th className="border px-4 py-2  sm:text-2xl text-center text-pink-500">
                Name
              </th>
              <th className="border px-4 py-2 sm:text-2xl text-center text-pink-500">
                Sign
              </th>
              <th className="border px-4 py-2 sm:text-2xl text-center text-pink-500">
                Your Answer
              </th>
              <th className="border px-4 py-2 sm:text-2xl text-center text-pink-500">
                Correct Answer
              </th>
            </tr>
          </thead>
          <tbody>
            {columnA.map((item, index) => {
              const match = matches.find((match) => match.item === item);
              const isCorrect = match?.isCorrect;

              return (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleItemSelect(item)}
                      disabled={usedItems.includes(item)}
                      className={`p-2 sm:p-4 w-auto h-12 sm:h-20 text-sm sm:text-xl break-words font-bold rounded-full text-center cursor-pointer transition-transform transform ${
                        selectedItem === item
                          ? "bg-blue-400 text-white scale-110"
                          : usedItems.includes(item)
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-200 hover:bg-blue-300"
                      }`}
                    >
                      {item}
                    </button>
                  </td>

                  <td className="border px-4 py-2 text-center">
                    {columnB[index] && (
                      <button
                        onClick={() => handleImageSelect(columnB[index])}
                        disabled={matches.some(
                          (match) =>
                            match.image === columnB[index] && match.isCorrect
                        )}
                        className={`p-1 transition-transform transform w-16 sm:w-20 h-16 sm:h-20 ${
                          matches.find((match) => match.image === columnB[index])
                            ? matches.find(
                                (match) => match.image === columnB[index]
                              ).isCorrect
                              ? "bg-green-300 cursor-not-allowed"
                              : "bg-red-300"
                            : "bg-yellow-200 hover:bg-yellow-300"
                        }`}
                      >
                        <img
                          src={columnB[index]}
                          alt="Sign"
                          className={`w-full h-full ${
                            matches.some(
                              (match) =>
                                match.image === columnB[index] &&
                                match.isCorrect
                            )
                              ? "opacity-50"
                              : "opacity-100"
                          }`}
                        />
                      </button>
                    )}
                  </td>

                  <td className="border px-4 py-2 text-center flex justify-center">
                    {match ? (
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src={match.image}
                          alt="Matched Image"
                          className="w-16 sm:w-20 h-16 sm:h-20"
                        />
                        <span
                          className={`mt-2 font-bold ${
                            match.isCorrect ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {match.isCorrect ? "Correct!" : "Oops!"}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500 h-20">Not Answered</span>
                    )}
                  </td>

                  <td className="border px-4 py-2 text-center">
                    {allSelected && (
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            correctAnswer[index]?.alphabet
                              ? correctAnswer[index].signImage
                              : correctAnswer[index]?.cloud_location
                          }
                          alt="Correct Match"
                          className="w-16 sm:w-20 h-16 sm:h-20 border-4 border-green-400"
                        />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchingGame;
