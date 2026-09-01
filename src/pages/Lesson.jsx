
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import japaneseVocab from "../data/japaneseVocab.json";
import { speakWord } from "../hooks/useSpeech";

const Lesson = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();

  const [selectedWord, setSelectedWord] = useState(null);

  const lessonNumber = parseInt(lesson_no);

  const currentVocab = japaneseVocab.filter(
    (item) => item.lesson_no === lessonNumber
  );

  // =========================
  // Card Color
  // =========================
  const getCardColor = (difficulty) => {
    const level = difficulty.toLowerCase();

    if (level === "easy") {
      return "bg-green-50 border-green-300";
    }

    if (level === "medium") {
      return "bg-blue-50 border-blue-300";
    }

    if (level === "difficult") {
      return "bg-red-50 border-red-300";
    }

    return "bg-gray-50 border-gray-300";
  };

  // =========================
  // Badge Color
  // =========================
  const getBadgeColor = (difficulty) => {
    const level = difficulty.toLowerCase();

    if (level === "easy") {
      return "bg-green-200 text-green-800";
    }

    if (level === "medium") {
      return "bg-blue-200 text-blue-800";
    }

    if (level === "difficult") {
      return "bg-red-200 text-red-800";
    }

    return "bg-gray-200 text-gray-800";
  };

  return (
    <div className="min-h-screen px-4 py-8">

      {/* =========================
          Page Header
      ========================== */}
      <div
        className="max-w-7xl mx-auto mb-8"
        data-aos="fade-down"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <span className="badge badge-primary badge-outline mb-2">
              Japanese Vocabulary
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold">
              Lesson {lesson_no}
            </h1>

            <p className="text-base-content/60 mt-2">
              Learn these Japanese words and practice their pronunciation.
            </p>
          </div>

          <button
            onClick={() => navigate("/start-learning")}
            className="btn btn-outline"
          >
            ← Back to Lessons
          </button>

        </div>
      </div>

      {/* =========================
          Vocabulary Cards
      ========================== */}
      <div className="max-w-7xl mx-auto">

        {currentVocab.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {currentVocab.map((item) => {

              const cardColor = getCardColor(item.difficulty);
              const badgeColor = getBadgeColor(item.difficulty);

              return (
                <div
                  key={item.id}
                  onClick={() => speakWord(item.word)}
                  className={`p-6 border-2 rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col justify-between ${cardColor}`}
                >

                  {/* Word Information */}
                  <div className="space-y-4">

                    {/* Word + Difficulty */}
                    <div className="flex justify-between items-start gap-3">

                      <h2 className="text-4xl font-extrabold text-gray-900">
                        {item.word}
                      </h2>

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${badgeColor}`}
                      >
                        {item.difficulty}
                      </span>

                    </div>

                    {/* Pronunciation */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Pronunciation
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        {item.pronunciation}
                      </p>
                    </div>

                    {/* Meaning */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Meaning
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        {item.meaning}
                      </p>
                    </div>

                    {/* Part of Speech */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Part of Speech
                      </p>

                      <p className="text-sm font-medium text-gray-700 capitalize">
                        {item.part_of_speech}
                      </p>
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">

                    {/* Speak Button */}
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        speakWord(item.word);
                      }}
                      className="btn btn-primary flex-1"
                    >
                      🔊 Listen
                    </button>

                    {/* When to Say */}
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedWord(item);
                      }}
                      className="btn btn-outline flex-1"
                    >
                      💬 Details
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          /* No Vocabulary */
          <div className="text-center py-16">

            <div className="text-6xl mb-5">
              📚
            </div>

            <h2 className="text-2xl font-bold mb-2">
              No Vocabulary Found
            </h2>

            <p className="text-gray-500 mb-6">
              There are no vocabulary words available for Lesson{" "}
              {lesson_no}.
            </p>

            <button
              onClick={() => navigate("/start-learning")}
              className="btn btn-primary"
            >
              ← Back to Lessons
            </button>

          </div>
        )}

      </div>

      {/* =========================
          Quiz Button
      ========================== */}
      {currentVocab.length > 0 && (
        <div
          className="max-w-7xl mx-auto mt-10 text-center"
          data-aos="fade-up"
        >
          <div className="bg-base-200 rounded-3xl p-8">

            <div className="text-5xl mb-4">
              🧠
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to test yourself?
            </h2>

            <p className="text-base-content/60 mt-2 mb-5">
              Take a quiz and check how well you remember these words.
            </p>

            <button
              onClick={() =>
                navigate(`/lesson/${lesson_no}/quiz`)
              }
              className="btn btn-primary px-8"
            >
              Start Quiz →
            </button>

          </div>
        </div>
      )}

      {/* =========================
          Details Modal
      ========================== */}
      {selectedWord && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedWord(null)}
        >

          <div
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex justify-between items-start gap-4 border-b pb-4">

              <div>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  {selectedWord.word}
                </h3>

                <p className="text-primary font-medium mt-1">
                  {selectedWord.pronunciation}
                </p>
              </div>

              <button
                onClick={() => setSelectedWord(null)}
                className="btn btn-sm btn-circle btn-ghost"
              >
                ✕
              </button>

            </div>

            {/* Meaning */}
            <div className="mt-5 space-y-4">

              <div>
                <p className="text-sm text-gray-500">
                  Meaning
                </p>

                <p className="text-lg font-semibold text-gray-800">
                  {selectedWord.meaning}
                </p>
              </div>

              {/* When to Say */}
              <div>
                <p className="text-sm text-gray-500">
                  When to say
                </p>

                <p className="text-gray-800">
                  {selectedWord.when_to_say}
                </p>
              </div>

              {/* Example */}
              <div className="bg-gray-50 border rounded-2xl p-4">

                <p className="text-sm font-semibold text-gray-600 mb-2">
                  Example
                </p>

                <p className="text-gray-800 italic">
                  {selectedWord.example}
                </p>

              </div>

            </div>

            {/* Modal Buttons */}
            <div className="flex gap-3 mt-6">

              <button
                onClick={() => speakWord(selectedWord.word)}
                className="btn btn-primary flex-1"
              >
                🔊 Listen
              </button>

              <button
                onClick={() => setSelectedWord(null)}
                className="btn btn-outline flex-1"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Lesson;
