import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaYoutube } from "react-icons/fa";

const tutorials = [
  {
    id: 1,
    title: "Japanese Alphabet - Hiragana",
    description: "Learn the basic Hiragana characters step by step.",
    videoId: "6p9Il_j0zjc",
  },
  {
    id: 2,
    title: "Japanese Alphabet - Katakana",
    description: "Learn Japanese Katakana characters for beginners.",
    videoId: "s6DKRgtVLGA",
  },
  {
    id: 3,
    title: "Japanese Greetings",
    description: "Learn common Japanese greetings and expressions.",
    videoId: "q7c3vY5R8hM",
  },
  {
    id: 4,
    title: "Basic Japanese Phrases",
    description: "Useful Japanese phrases for everyday conversations.",
    videoId: "8YV8Kmf7h2s",
  },
  {
    id: 5,
    title: "Japanese Numbers",
    description: "Learn how to count from 1 to 10 in Japanese.",
    videoId: "2Q7D0R4Wm5A",
  },
  {
    id: 6,
    title: "Japanese Pronunciation",
    description: "Improve your Japanese pronunciation and speaking.",
    videoId: "3jY6q5F4d1A",
  },
];

const Tutorials = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <FaYoutube className="text-3xl text-primary" />
            </div>
          </div>

          <p className="text-primary font-semibold uppercase tracking-widest">
            Learn Japanese
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Japanese Tutorials
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500 mt-4">
            Improve your Japanese vocabulary, pronunciation, alphabet,
            and everyday communication skills through these tutorials.
          </p>
        </div>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Video */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                  title={tutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-primary">
                    Tutorial {tutorial.id}
                  </span>
                </div>

                <h2 className="text-xl font-bold">
                  {tutorial.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn Vocabulary */}
        <div className="mt-14 bg-primary text-primary-content rounded-3xl p-8 md:p-12 text-center">
          <FaBookOpen className="text-4xl mx-auto mb-4" />

          <h2 className="text-3xl font-bold">
            Ready to Practice?
          </h2>

          <p className="mt-3 opacity-90 max-w-xl mx-auto">
            Now that you have learned the basics, start practicing
            Japanese vocabulary with our interactive lessons.
          </p>

          <button
            onClick={() => navigate("/start-learning")}
            className="btn bg-white text-primary border-none hover:bg-gray-100 mt-6"
          >
            Learn Vocabularies
          </button>
        </div>

        {/* Back */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline gap-2"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Tutorials;