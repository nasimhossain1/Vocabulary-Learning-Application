import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* =========================
   Animated Number Component
========================= */
const AnimatedNumber = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1500;
    const steps = 50;
    const increment = end / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* =========================
   Home Component
========================= */
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-100">

      {/* =====================================
          1. HERO / BANNER SLIDER
      ====================================== */}
      <section className="px-4 py-6 md:py-10">
        <div
          className="max-w-7xl mx-auto carousel rounded-3xl overflow-hidden shadow-2xl"
          data-aos="fade-down"
        >

          {/* Slide 1 */}
          <div
            id="slide1"
            className="carousel-item relative w-full min-h-[480px] md:min-h-[560px]"
          >
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=85"
              alt="Japan"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex items-center w-full">
              <div className="px-6 md:px-12 lg:px-16 max-w-3xl text-white">

                <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-semibold mb-5">
                  🇯🇵 Lingo Bingo
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Start Your Japanese Journey
                </h1>

                <p className="mt-5 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Learn Japanese vocabulary in a simple and enjoyable way with
                  structured lessons, pronunciation practice and real-life
                  examples.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/start-learning"
                    className="btn btn-primary px-7"
                  >
                    Start Learning
                  </Link>

                  <Link
                    to="/about-us"
                    className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-7"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
              <a
                href="#slide3"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❮
              </a>

              <a
                href="#slide2"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            id="slide2"
            className="carousel-item relative w-full min-h-[480px] md:min-h-[560px]"
          >
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85"
              alt="Japanese city"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex items-center w-full">
              <div className="px-6 md:px-12 lg:px-16 max-w-3xl text-white">

                <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-semibold mb-5">
                  📚 Learn Every Day
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Build Your Vocabulary
                </h2>

                <p className="mt-5 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Discover useful Japanese words and learn how to use them
                  naturally in everyday conversations.
                </p>

                <div className="mt-8">
                  <Link
                    to="/start-learning"
                    className="btn btn-secondary px-7"
                  >
                    Explore Lessons
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
              <a
                href="#slide1"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❮
              </a>

              <a
                href="#slide3"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full min-h-[480px] md:min-h-[560px]"
          >
            <img
              src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1800&q=85"
              alt="Japanese temple"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex items-center w-full">
              <div className="px-6 md:px-12 lg:px-16 max-w-3xl text-white">

                <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-semibold mb-5">
                  🔊 Speak With Confidence
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Learn. Practice. Remember.
                </h2>

                <p className="mt-5 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  Listen to pronunciation, understand meanings and practice
                  Japanese vocabulary with practical examples.
                </p>

                <div className="mt-8">
                  <Link
                    to="/tutorials"
                    className="btn btn-accent px-7"
                  >
                    Watch Tutorials
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
              <a
                href="#slide2"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❮
              </a>

              <a
                href="#slide1"
                className="btn btn-circle bg-white/80 hover:bg-white border-none text-black"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          2. ABOUT SECTION
      ====================================== */}
      <section className="px-4 py-12 md:py-16">
        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
        >
          <span className="badge badge-primary badge-outline mb-4">
            Our Mission
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Make Japanese Vocabulary Easy & Fun
          </h2>

          <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
            Lingo Bingo is a fun and interactive vocabulary learning
            application designed to help learners improve their Japanese
            vocabulary. Our goal is to make language learning easier by
            combining structured lessons, pronunciation practice, examples and
            interactive learning activities.
          </p>
        </div>
      </section>

      {/* =====================================
          3. SUCCESS SECTION
      ====================================== */}
      <section className="px-4 py-12">
        <div
          className="max-w-7xl mx-auto bg-base-200 rounded-3xl p-6 md:p-10"
          data-aos="zoom-in"
        >
          <div className="text-center mb-10">
            <span className="badge badge-secondary badge-outline mb-3">
              Our Progress
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Lingo Bingo in Numbers
            </h2>

            <p className="mt-3 text-base-content/60">
              Learn Japanese vocabulary with thousands of learners around the
              world.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

            {/* Users */}
            <div className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-3">👥</div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-primary">
                <AnimatedNumber end={1500} suffix="+" />
              </h3>

              <p className="mt-2 text-base-content/60">
                Active Users
              </p>
            </div>

            {/* Lessons */}
            <div className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-3">📚</div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-secondary">
                <AnimatedNumber end={10} />
              </h3>

              <p className="mt-2 text-base-content/60">
                Lessons
              </p>
            </div>

            {/* Vocabulary */}
            <div className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-3">🗣️</div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-accent">
                <AnimatedNumber end={50} suffix="+" />
              </h3>

              <p className="mt-2 text-base-content/60">
                Vocabulary Words
              </p>
            </div>

            {/* Tutorials */}
            <div className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎥</div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-info">
                <AnimatedNumber end={8} />
              </h3>

              <p className="mt-2 text-base-content/60">
                Tutorial Videos
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          4. WHY LEARN WITH US
      ====================================== */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">

          <div
            className="text-center mb-10"
            data-aos="fade-up"
          >
            <span className="badge badge-primary badge-outline mb-3">
              Why Lingo Bingo?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need to Learn
            </h2>

            <p className="mt-3 text-base-content/60 max-w-2xl mx-auto">
              Simple tools and useful features to make your Japanese vocabulary
              learning journey easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <div className="card-body">
                <div className="text-5xl mb-4">🔊</div>

                <h3 className="card-title text-xl">
                  Pronunciation Practice
                </h3>

                <p className="text-base-content/70">
                  Listen to Japanese words and practice their pronunciation to
                  improve your speaking skills.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="card-body">
                <div className="text-5xl mb-4">📖</div>

                <h3 className="card-title text-xl">
                  Structured Lessons
                </h3>

                <p className="text-base-content/70">
                  Learn vocabulary through 10 carefully organized lessons from
                  beginner to advanced.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body">
                <div className="text-5xl mb-4">💡</div>

                <h3 className="card-title text-xl">
                  Real-Life Examples
                </h3>

                <p className="text-base-content/70">
                  Understand when and how to use each word through practical
                  Japanese examples.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          5. HOW IT WORKS
      ====================================== */}
      <section className="px-4 py-12 md:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto">

          <div
            className="text-center mb-12"
            data-aos="fade-up"
          >
            <span className="badge badge-secondary badge-outline mb-3">
              Easy Learning
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Start Learning in 3 Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Step 1 */}
            <div
              className="text-center"
              data-aos="fade-right"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mb-5">
                1
              </div>

              <h3 className="text-xl font-bold mb-3">
                Create an Account
              </h3>

              <p className="text-base-content/60">
                Register for free and get access to Japanese vocabulary
                lessons.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary text-secondary-content flex items-center justify-center text-2xl font-bold mb-5">
                2
              </div>

              <h3 className="text-xl font-bold mb-3">
                Choose a Lesson
              </h3>

              <p className="text-base-content/60">
                Select a lesson and explore vocabulary according to difficulty.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="text-center"
              data-aos="fade-left"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent text-accent-content flex items-center justify-center text-2xl font-bold mb-5">
                3
              </div>

              <h3 className="text-xl font-bold mb-3">
                Practice & Improve
              </h3>

              <p className="text-base-content/60">
                Listen, practice and learn new words regularly to improve your
                Japanese.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          6. FINAL CTA
      ====================================== */}
      <section className="px-4 py-12 md:py-20">
        <div
          className="max-w-5xl mx-auto text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-8 md:p-14 shadow-xl"
          data-aos="fade-up"
        >
          <div className="text-5xl mb-5">
            🇯🇵
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Japanese Journey?
          </h2>

          <p className="text-white/85 max-w-2xl mx-auto mb-8">
            Build your Japanese vocabulary step by step, improve your
            pronunciation and become more confident in communication.
          </p>

          <Link
            to="/start-learning"
            className="btn bg-white text-indigo-600 border-none hover:bg-gray-100 px-8"
          >
            Explore Lessons
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;