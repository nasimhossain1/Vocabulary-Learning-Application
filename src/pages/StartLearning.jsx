import { Link } from "react-router-dom";

const lessons = [
  {
    id: 1,
    title: "Lesson 1",
    subtitle: "Basic Greetings",
    icon: "👋",
  },
  {
    id: 2,
    title: "Lesson 2",
    subtitle: "Daily Expressions",
    icon: "💬",
  },
  {
    id: 3,
    title: "Lesson 3",
    subtitle: "People & Family",
    icon: "👨‍👩‍👧",
  },
  {
    id: 4,
    title: "Lesson 4",
    subtitle: "Food & Drinks",
    icon: "🍱",
  },
  {
    id: 5,
    title: "Lesson 5",
    subtitle: "Places",
    icon: "📍",
  },
  {
    id: 6,
    title: "Lesson 6",
    subtitle: "Time & Numbers",
    icon: "⏰",
  },
  {
    id: 7,
    title: "Lesson 7",
    subtitle: "Common Verbs",
    icon: "🏃",
  },
  {
    id: 8,
    title: "Lesson 8",
    subtitle: "Adjectives",
    icon: "✨",
  },
  {
    id: 9,
    title: "Lesson 9",
    subtitle: "Travel Vocabulary",
    icon: "✈️",
  },
  {
    id: 10,
    title: "Lesson 10",
    subtitle: "Useful Conversation",
    icon: "🗣️",
  },
];

const StartLearning = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* =========================
          Page Header
      ========================== */}
      <section className="px-4 pt-10 pb-8">

        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-down"
        >

          <div className="text-5xl mb-4">
            🇯🇵
          </div>

          <span className="badge badge-primary badge-outline mb-4">
            Japanese Vocabulary
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold">
            Let's Learn Japanese
          </h1>

          <p className="mt-4 text-base md:text-lg text-base-content/60 max-w-2xl mx-auto">
            Choose a lesson and start building your Japanese
            vocabulary step by step.
          </p>

        </div>

      </section>


      {/* =========================
          Lesson Cards
      ========================== */}
      <section className="px-4 py-8">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

            {lessons.map((lesson) => (

              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                data-aos="fade-up"
                data-aos-delay={lesson.id * 50}
                className="group"
              >

                <div className="card h-full bg-base-200 border border-base-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                  <div className="card-body items-center text-center">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {lesson.icon}
                    </div>

                    {/* Lesson Number */}
                    <h2 className="card-title text-xl mt-2">
                      {lesson.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm text-base-content/60">
                      {lesson.subtitle}
                    </p>

                    {/* Button */}
                    <div className="card-actions mt-3">

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
          Alphabet Tutorial
      ========================== */}
      <section className="px-4 py-12 md:py-16">

        <div
          className="max-w-6xl mx-auto"
          data-aos="fade-up"
        >

          <div className="text-center mb-8">

            <span className="badge badge-secondary badge-outline mb-3">
              Japanese Basics
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Learn the Japanese Alphabet
            </h2>

            <p className="mt-3 text-base-content/60">
              Start with the basics before diving into vocabulary.
            </p>

          </div>


          {/* Video */}
          <div className="rounded-3xl overflow-hidden shadow-xl bg-black">

            <div className="aspect-video">

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
          <div className="text-center mt-8">

            <Link
              to="/tutorials"
              className="btn btn-primary px-8"
            >
              View More Tutorials →
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          Learning Tips
      ========================== */}
      <section className="px-4 pb-16">

        <div
          className="max-w-6xl mx-auto bg-base-200 rounded-3xl p-7 md:p-10"
          data-aos="zoom-in"
        >

          <div className="grid md:grid-cols-3 gap-8">

            {/* Tip 1 */}
            <div className="text-center">

              <div className="text-4xl mb-3">
                🧠
              </div>

              <h3 className="text-xl font-bold mb-2">
                Learn Regularly
              </h3>

              <p className="text-sm text-base-content/60">
                Practice a few Japanese words every day
                instead of learning everything at once.
              </p>

            </div>


            {/* Tip 2 */}
            <div className="text-center">

              <div className="text-4xl mb-3">
                🔊
              </div>

              <h3 className="text-xl font-bold mb-2">
                Listen Carefully
              </h3>

              <p className="text-sm text-base-content/60">
                Listen to the pronunciation and repeat
                each word aloud.
              </p>

            </div>


            {/* Tip 3 */}
            <div className="text-center">

              <div className="text-4xl mb-3">
                💪
              </div>

              <h3 className="text-xl font-bold mb-2">
                Keep Practicing
              </h3>

              <p className="text-sm text-base-content/60">
                Review previous lessons regularly to
                remember vocabulary for longer.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default StartLearning;