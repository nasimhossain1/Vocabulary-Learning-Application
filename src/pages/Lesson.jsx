import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import japaneseVocab from '../data/japaneseVocab.json';
import { speakWord } from '../hooks/useSpeech';

const Lesson = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);

  // Router param অনুযায়ী নির্দিষ্ট লেসনের শব্দগুলো ফিল্টার করা
  const currentVocab = japaneseVocab.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );

  // Difficulty অনুযায়ী কার্ডের ব্যাকগ্রাউন্ড কালার সেট করা
  const getCardColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-50 border-green-300';
      case 'medium':
        return 'bg-blue-50 border-blue-300';
      case 'difficult':
        return 'bg-red-50 border-red-300';
      default:
        return 'bg-gray-50 border-gray-300';
    }
  };

  const getBadgeColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-200 text-green-800';
      case 'medium':
        return 'bg-blue-200 text-blue-800';
      case 'difficult':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Lesson - {lesson_no} Vocabularies
        </h1>
        <button
          onClick={() => navigate('/start-learning')}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Lessons
        </button>
      </div>

      {/* Vocabulary Cards Grid */}
      {currentVocab.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVocab.map((item) => (
            <div
              key={item.id}
              onClick={() => speakWord(item.word)}
              className={`p-6 border-2 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between ${getCardColor(
                item.difficulty
              )}`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    {item.word}
                  </h2>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold uppercase ${getBadgeColor(
                      item.difficulty
                    )}`}
                  >
                    {item.difficulty}
                  </span>
                </div>

                <p className="text-lg font-medium text-gray-700">
                  <span className="text-gray-500 text-sm">Pronunciation:</span> {item.pronunciation}
                </p>

                <p className="text-gray-800">
                  <span className="font-semibold">Meaning:</span> {item.meaning}
                </p>

                <p className="text-sm text-gray-600 italic">
                  Part of speech: {item.part_of_speech}
                </p>
              </div>

              {/* Modal trigger button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // কার্ডের ক্লিক ইভেন্ট থামাবে (যাতে দুটি স্পিচ কল না হয়)
                  setSelectedWord(item);
                }}
                className="mt-6 w-full bg-indigo-500 text-white font-medium py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                When to Say
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 text-xl">
          No vocabularies found for Lesson {lesson_no}.
        </div>
      )}

      {/* When to Say Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">
              {selectedWord.word} ({selectedWord.pronunciation})
            </h3>
            
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Meaning: </span>
              {selectedWord.meaning}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">When to say: </span>
              {selectedWord.when_to_say}
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="text-sm font-semibold text-gray-700 mb-1">Example:</p>
              <p className="text-gray-800 italic">{selectedWord.example}</p>
            </div>

            <div className="text-right pt-2">
              <button
                onClick={() => setSelectedWord(null)}
                className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
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