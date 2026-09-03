import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const lessons = [
  { id: 1, title: "Lesson 1", subtitle: "Basic Greetings", icon: "👋" },
  { id: 2, title: "Lesson 2", subtitle: "Daily Expressions", icon: "💬" },
  { id: 3, title: "Lesson 3", subtitle: "People & Family", icon: "👨‍👩‍👧" },
  { id: 4, title: "Lesson 4", subtitle: "Food & Drinks", icon: "🍱" },
  { id: 5, title: "Lesson 5", subtitle: "Places", icon: "📍" },
  { id: 6, title: "Lesson 6", subtitle: "Time & Numbers", icon: "⏰" },
  { id: 7, title: "Lesson 7", subtitle: "Common Verbs", icon: "🏃" },
  { id: 8, title: "Lesson 8", subtitle: "Adjectives", icon: "✨" },
  { id: 9, title: "Lesson 9", subtitle: "Travel Vocabulary", icon: "✈️" },
  { id: 10, title: "Lesson 10", subtitle: "Useful Conversation", icon: "🗣️" },
];

const StartLearning = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-base-100 overflow-x-hidden">

      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="w-full px-4 pt-8 sm:pt-10 pb-6 sm:pb-8">
        <div
          className="w-full max-w-4xl mx-auto text-center"
          data-aos="fade-down"
        >
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
            🇯🇵
          </div>

          <span className="badge badge-primary badge-outline mb-3 sm:mb-4">
            Japanese Vocabulary
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            Let's Learn Japanese
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-base-content/60 max-w-2xl mx-auto leading-relaxed">
            Choose a lesson and start building your Japanese vocabulary
            step by step.
          </p>
        </div>
      </section>

      {/* =========================
          LESSON CARDS
      ========================== */}
      <section className="w-full px-3 sm:px-4 py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto">

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">

            {lessons.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                data-aos="fade-up"
                data-aos-delay={lesson.id * 40}
                className="group w-full min-w-0"
              >
                <div className="card h-full min-h-[220px] bg-base-200 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300">

                  <div className="card-body items-center justify-center text-center p-5 sm:p-6">

                    {/* Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                      {lesson.icon}
                    </div>

                    {/* Lesson */}
                    <h2 className="card-title text-lg sm:text-xl mt-2">
                      {lesson.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-base-content/60 min-h-[40px] flex items-center">
                      {lesson.subtitle}
                    </p>

                    {/* Button */}
                    <div className="card-actions mt-2">
                      <span className="btn btn-primary btn-sm">
                        Start Lesson
                      </span>
                    </div>

                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          ALPHABET TUTORIAL
      ========================== */}
      <section className="w-full px-3 sm:px-4 py-10 sm:py-12 md:py-16">
        <div
          className="w-full max-w-6xl mx-auto"
          data-aos="fade-up"
        >

          <div className="text-center mb-6 sm:mb-8">
            <span className="badge badge-secondary badge-outline mb-3">
              Japanese Basics
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Learn the Japanese Alphabet
            </h2>

            <p className="mt-3 text-sm sm:text-base text-base-content/60">
              Start with the basics before diving into vocabulary.
            </p>
          </div>

          {/* Video */}
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-black">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6p9Il_j0zjc"
                title="Learn Japanese Alphabet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/tutorials"
              className="btn btn-primary w-full sm:w-auto px-6 sm:px-8"
            >
              View More Tutorials →
            </Link>
          </div>

        </div>
      </section>

      {/* =========================
          LEARNING TIPS
      ========================== */}
      <section className="w-full px-3 sm:px-4 pb-10 sm:pb-16">
        <div
          className="w-full max-w-6xl mx-auto bg-base-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10"
          data-aos="zoom-in"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">

            {/* Tip 1 */}
            <div className="text-center">
              <div className="text-4xl mb-3">
                🧠
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Learn Regularly
              </h3>

              <p className="text-sm text-base-content/60 leading-relaxed">
                Practice a few Japanese words every day instead of learning
                everything at once.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="text-center">
              <div className="text-4xl mb-3">
                🔊
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Listen Carefully
              </h3>

              <p className="text-sm text-base-content/60 leading-relaxed">
                Listen to the pronunciation and repeat each word aloud.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="text-center">
              <div className="text-4xl mb-3">
                💪
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Keep Practicing
              </h3>

              <p className="text-sm text-base-content/60 leading-relaxed">
                Review previous lessons regularly to remember vocabulary
                for longer.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default StartLearning;