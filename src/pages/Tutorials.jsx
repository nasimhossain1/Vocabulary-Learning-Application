import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaYoutube } from "react-icons/fa";

const tutorials = [
  {
    id: 1,
    title: "Japanese Alphabet - Hiragana",
    description:
      "Learn the basic Hiragana characters step by step and build a strong foundation.",
    videoId: "6p9Il_j0zjc",
  },
  {
    id: 2,
    title: "Japanese Alphabet - Katakana",
    description:
      "Learn Katakana characters and understand how they are used in Japanese.",
    videoId: "s6DKRgtVLGA",
  },
  {
    id: 3,
    title: "Japanese Greetings",
    description:
      "Learn common Japanese greetings and expressions for everyday communication.",
    videoId: "q7c3vY5R8hM",
  },
  {
    id: 4,
    title: "Basic Japanese Phrases",
    description:
      "Practice useful Japanese phrases that you can use in daily conversations.",
    videoId: "8YV8Kmf7h2s",
  },
  {
    id: 5,
    title: "Japanese Numbers",
    description:
      "Learn how to count numbers in Japanese and practice basic counting.",
    videoId: "2Q7D0R4Wm5A",
  },
  {
    id: 6,
    title: "Japanese Pronunciation",
    description:
      "Improve your Japanese pronunciation and become more confident speaking.",
    videoId: "3jY6q5F4d1A",
  },
];

const Tutorials = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <FaYoutube className="text-4xl text-primary" />
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
            and everyday communication skills through these helpful
            video tutorials.
          </p>
        </div>

        {/* Tutorials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-1"
            >
              {/* Video */}
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                  title={tutorial.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="badge badge-primary mb-3">
                  Tutorial {tutorial.id}
                </span>

                <h2 className="text-xl font-bold">
                  {tutorial.title}
                </h2>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Section */}
        <div className="mt-16 bg-primary text-primary-content rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <FaBookOpen className="text-5xl mx-auto mb-5" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Practice?
          </h2>

          <p className="mt-4 opacity-90 max-w-xl mx-auto">
            Now that you have learned the basics, start practicing
            Japanese vocabulary with our interactive lessons and quizzes.
          </p>

          <button
            onClick={() => navigate("/start-learning")}
            className="btn bg-white text-primary border-none hover:bg-gray-100 mt-7"
          >
            Start Learning
          </button>
        </div>

        {/* Back Button */}
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