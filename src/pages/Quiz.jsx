
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import japaneseVocab from "../data/japaneseVocab.json";
import { speakWord } from "../hooks/useSpeech";

const Quiz = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();

  const currentVocab = japaneseVocab.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Quiz options তৈরি করা
  const [options] = useState(() => {
    return currentVocab.map((question) => {
      const otherWords = japaneseVocab
        .filter((item) => item.id !== question.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const answers = [
        question.meaning,
        ...otherWords.map((item) => item.meaning),
      ];

      return answers.sort(() => Math.random() - 0.5);
    });
  });

  // যদি lesson না পাওয়া যায়
  if (currentVocab.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>

          <h1 className="text-3xl font-bold mb-3">
            Quiz Not Available
          </h1>

          <p className="text-gray-500 mb-6">
            No vocabulary found for Lesson {lesson_no}.
          </p>

          <button
            onClick={() => navigate("/start-learning")}
            className="btn btn-primary"
          >
            ← Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  const question = currentVocab[currentQuestion];

  // Answer select
  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === question.meaning) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  // Next question
  const handleNext = () => {
    if (currentQuestion < currentVocab.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  // Quiz আবার শুরু
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  // =========================
  // Quiz Finished
  // =========================
  if (finished) {
    const percentage = Math.round(
      (score / currentVocab.length) * 100
    );

    return (
      <div className="min-h-screen px-4 py-12">
        <div
          className="max-w-2xl mx-auto text-center bg-base-200 rounded-3xl p-8 md:p-12 shadow-lg"
          data-aos="zoom-in"
        >
          <div className="text-7xl mb-5">
            {percentage >= 80
              ? "🎉"
              : percentage >= 50
              ? "👏"
              : "💪"}
          </div>

          <h1 className="text-4xl font-extrabold mb-3">
            Quiz Completed!
          </h1>

          <p className="text-gray-500 mb-8">
            Lesson {lesson_no} Vocabulary Quiz
          </p>

          {/* Score */}
          <div className="mb-8">
            <p className="text-6xl font-extrabold text-primary">
              {score}/{currentVocab.length}
            </p>

            <p className="text-lg text-gray-500 mt-2">
              You scored {percentage}%
            </p>
          </div>

          {/* Result Message */}
          <div className="bg-base-100 rounded-2xl p-5 mb-8">
            {percentage >= 80 ? (
              <p className="font-semibold text-green-600">
                Excellent! You know these words very well. 🌟
              </p>
            ) : percentage >= 50 ? (
              <p className="font-semibold text-blue-600">
                Good job! Keep practicing to improve. 👍
              </p>
            ) : (
              <p className="font-semibold text-orange-600">
                Keep practicing! You will get better. 💪
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRestart}
              className="btn btn-primary flex-1"
            >
              🔄 Try Again
            </button>

            <button
              onClick={() =>
                navigate(`/lesson/${lesson_no}`)
              }
              className="btn btn-outline flex-1"
            >
              ← Back to Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // Quiz Question
  // =========================
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="badge badge-primary badge-outline mb-3">
            Lesson {lesson_no}
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold">
            Vocabulary Quiz 🧠
          </h1>

          <p className="text-gray-500 mt-2">
            Test your Japanese vocabulary knowledge.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Question {currentQuestion + 1} of{" "}
              {currentVocab.length}
            </span>

            <span>
              Score: {score}
            </span>
          </div>

          <progress
            className="progress progress-primary w-full"
            value={currentQuestion + 1}
            max={currentVocab.length}
          ></progress>
        </div>

        {/* Question Card */}
        <div
          className="bg-base-200 rounded-3xl p-6 md:p-10 shadow-lg"
          data-aos="fade-up"
        >
          {/* Japanese Word */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-3">
              What does this Japanese word mean?
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              {question.word}
            </h2>

            <div className="flex justify-center items-center gap-3 mt-4">
              <span className="text-lg text-primary font-medium">
                {question.pronunciation}
              </span>

              <button
                onClick={() => speakWord(question.word)}
                className="btn btn-circle btn-sm btn-primary"
                title="Listen"
              >
                🔊
              </button>
            </div>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 gap-4">
            {options[currentQuestion].map((option, index) => {
              const isCorrect = option === question.meaning;
              const isSelected = option === selectedAnswer;

              let buttonClass =
                "w-full text-left p-4 rounded-xl border-2 transition font-medium ";

              if (selectedAnswer === null) {
                buttonClass +=
                  "bg-base-100 border-base-300 hover:border-primary hover:bg-primary/5";
              } else if (isCorrect) {
                buttonClass +=
                  "bg-green-100 border-green-500 text-green-800";
              } else if (isSelected) {
                buttonClass +=
                  "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass +=
                  "bg-base-100 border-base-300 opacity-60";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={buttonClass}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center justify-between">
                    <span>
                      {String.fromCharCode(65 + index)}.{" "}
                      {option}
                    </span>

                    {selectedAnswer !== null &&
                      isCorrect && <span>✅</span>}

                    {selectedAnswer !== null &&
                      isSelected &&
                      !isCorrect && <span>❌</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {selectedAnswer !== null && (
            <div className="mt-6">
              {selectedAnswer === question.meaning ? (
                <div className="bg-green-100 text-green-800 rounded-xl p-4">
                  <p className="font-bold">
                    ✅ Correct!
                  </p>

                  <p className="text-sm mt-1">
                    Great job! Keep going.
                  </p>
                </div>
              ) : (
                <div className="bg-red-100 text-red-800 rounded-xl p-4">
                  <p className="font-bold">
                    ❌ Incorrect
                  </p>

                  <p className="text-sm mt-1">
                    Correct answer:{" "}
                    <strong>{question.meaning}</strong>
                  </p>
                </div>
              )}

              <button
                onClick={handleNext}
                className="btn btn-primary w-full mt-4"
              >
                {currentQuestion === currentVocab.length - 1
                  ? "Finish Quiz 🎉"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="text-center mt-6">
          <button
            onClick={() =>
              navigate(`/lesson/${lesson_no}`)
            }
            className="btn btn-ghost"
          >
            ← Back to Lesson
          </button>
        </div>

      </div>
    </div>
  );
};

export default Quiz;

