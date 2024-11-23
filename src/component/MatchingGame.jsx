import React, { useState, useEffect } from "react";

const MatchingGame = ({ question, onComplete }) => {
  const { columnA, columnB } = question.options;
  const { correctAnswer } = question;

  const [selectedItem, setSelectedItem] = useState(null);
  const [matches, setMatches] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [completeCalled, setCompleteCalled] = useState(false);
  const [score, setScore] = useState(0);

  // Check if the correct answer is based on alphabet/signImage or sign_name/cloud_location
  const isAlphabet = correctAnswer[0]?.hasOwnProperty("alphabet");
  const isSignName = correctAnswer[0]?.hasOwnProperty("sign_name");

  useEffect(() => {
    if (matches.length === columnA.length && !completeCalled) {
      setAllSelected(true);
      setCompleteCalled(true);
      onComplete(score);
    }
  }, [matches, columnA.length, completeCalled, onComplete, score]);

  const handleItemSelect = (item) => setSelectedItem(item);
  const handleImageSelect = (image) => {
    if (!selectedItem) return;

    const isCorrect = correctAnswer.some((answer) => {
      if (isAlphabet && isSignName) {
        // Handle the case where the correct answer contains both alphabet/signImage and sign_name/cloud_location
        return (
          (answer.alphabet === selectedItem && answer.signImage === image) ||
          (answer.sign_name === selectedItem && answer.cloud_location === image)
        );
      }

      if (isAlphabet) {
        return answer.alphabet === selectedItem && answer.signImage === image;
      }

      if (isSignName) {
        return answer.sign_name === selectedItem && answer.cloud_location === image;
      }

      return false;
    });

    if (isCorrect) setScore((prev) => prev + 1);

    setMatches((prevMatches) => [
      ...prevMatches,
      { item: selectedItem, image, isCorrect },
    ]);
    setSelectedItem(null);
  };

  useEffect(() => {
    setSelectedItem(null);
    setMatches([]);
    setAllSelected(false);
    setCompleteCalled(false);
    setScore(0);
  }, [question]);

  const showCorrectAnswers = () => (
    <div className="mt-4">
      <div className="flex flex-col items-center mt-2">
        {correctAnswer.map((answer, index) => (
          <div key={index} className="flex items-center mb-2">
            {answer.alphabet ? (
              <>
                {/* <span className="text-blue-500 text-2xl mr-2">
                  {answer.alphabet}
                </span> */}
                <img
                  src={answer.signImage}
                  alt="Matched Sign"
                  className="w-20 h-20 border-4 border-green-400"
                />
              </>
            ) : (
              <>
                {/* <span className="text-blue-500 text-2xl mr-2">
                  {answer.sign_name}
                </span> */}
                <img
                  src={answer.cloud_location}
                  alt="Matched Sign"
                  className="w-20 h-20 border-4 border-green-400"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Match the Signs!
      </h2>
      {/* <div className="overflow-x-auto p-4 bg-purple-50 rounded-lg border-4 border-blue-300 shadow-md"> */}
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="px-4 py-3 text-2xl text-center text-pink-500">
                Name
              </th>
              <th className="px-4 py-3 text-2xl text-center text-pink-500">
                Sign
              </th>
              <th className="px-4 py-3 text-2xl text-center text-pink-500">
                Result
              </th>
              <th className="px-4 py-3 text-2xl text-center text-pink-500">
                Correct Answers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5">
                <div className="flex flex-col items-center gap-4">
                  {columnA.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleItemSelect(item)}
                      className={`p-4 w-auto h-20 text-xl break-words font-bold rounded-full text-center cursor-pointer transition-transform transform ${
                        selectedItem === item
                          ? "bg-blue-400 text-white scale-110"
                          : "bg-blue-200 hover:bg-blue-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </td>

              <td className="p-5">
                <div className="flex flex-col items-center gap-4">
                  {columnB.map((image, index) => {
                    const match = matches.find(
                      (match) => match.image === image
                    ); // Check if the image has been matched
                    const isCorrect = match?.isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleImageSelect(image)}
                        className={`p-1 transition-transform transform w-20 h-20 ${
                          isCorrect === true
                            ? "bg-green-300" // Correct match
                            : isCorrect === false
                            ? "bg-red-300" // Incorrect match
                            : "bg-yellow-200 hover:bg-yellow-300" // Not yet selected
                        }`}
                        // style={{ width: "80px", height: "80px" }}
                      >
                        <img
                          src={image}
                          alt="Sign"
                          className="w-full h-full "
                        />
                      </button>
                    );
                  })}
                </div>
              </td>

              {/* <td className="p-4"> */}
                {matches.length > 0 && (
                  <div className="flex flex-col items-center">
                    {matches.map((match, index) => (
                    <td className="p-2 flex justify-center items-center">
                      <div key={index} className="flex flex-col items-center mb-2">
                        {/* <span className="text-blue-500 text-2xl mr-2">
                          {match.item}
                        </span>*/
                        <img
                          src={match.image}
                          alt="Matched Image"
                          className="w-14 h-14 "
                        /> 
                        }
                        <span
                          className={`ml-2 font-bold ${
                            match.isCorrect ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {match.isCorrect ? "Correct!" : "Oops!"}
                        </span>
                      </div>
                      </td>
                    ))}
                  </div>
                )}
              {/* </td> */}

              <td className="p-4">{allSelected && showCorrectAnswers()}</td>
            </tr>
          </tbody>
        </table>
      {/* </div> */}
    </>
  );
};

export default MatchingGame;
