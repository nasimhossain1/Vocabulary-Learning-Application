import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* =========================
   Animated Number
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
   Hero Slide
========================= */
const HeroSlide = ({
  id,
  image,
  alt,
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  buttonClass,
  prev,
  next,
}) => {
  return (
    <div
      id={id}
      className="carousel-item relative w-full min-w-full h-[520px] sm:h-[560px] md:h-[600px]"
    >
      {/* Background */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center md:justify-start w-full h-full">
        <div className="w-full max-w-3xl px-12 sm:px-14 md:px-16 lg:px-20 text-center md:text-left text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
            {badge}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight break-words">
            {title}
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {description}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <Link
              to={buttonLink}
              className={`btn ${buttonClass} w-full sm:w-auto px-6 sm:px-7`}
            >
              {buttonText}
            </Link>

            {id === "slide1" && (
              <Link
                to="/about-us"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-black w-full sm:w-auto px-6 sm:px-7"
              >
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-1/2 -translate-y-1/2 flex justify-between z-20">
        <a
          href={`#${prev}`}
          className="btn btn-circle btn-sm sm:btn-md bg-white/80 hover:bg-white border-none text-black shadow-lg"
        >
          ❮
        </a>

        <a
          href={`#${next}`}
          className="btn btn-circle btn-sm sm:btn-md bg-white/80 hover:bg-white border-none text-black shadow-lg"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

/* =========================
   Home
========================= */
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-100 overflow-x-hidden">

      {/* =========================
          HERO
      ========================= */}
      <section className="w-full px-2 sm:px-4 py-3 sm:py-6 md:py-10 lg:px-7">
  <div className="w-full flex justify-center">
    <div
      className="max-w-7xl w-full carousel rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
      data-aos="fade-down"
    >

      {/* Slide 1 */}
      <HeroSlide
        id="slide1"
        image="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=85"
        alt="Japan"
        badge="🇯🇵 Lingo Bingo"
        title="Start Your Japanese Journey"
        description="Learn Japanese vocabulary in a simple and enjoyable way with structured lessons, pronunciation practice and real-life examples."
        buttonText="Start Learning"
        buttonLink="/start-learning"
        buttonClass="btn-primary"
        prev="slide3"
        next="slide2"
      />

      {/* Slide 2 */}
      <HeroSlide
        id="slide2"
        image="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85"
        alt="Japanese city"
        badge="📚 Learn Every Day"
        title="Build Your Vocabulary"
        description="Discover useful Japanese words and learn how to use them naturally in everyday conversations."
        buttonText="Explore Lessons"
        buttonLink="/start-learning"
        buttonClass="btn-secondary"
        prev="slide1"
        next="slide3"
      />

      {/* Slide 3 */}
      <HeroSlide
        id="slide3"
        image="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1800&q=85"
        alt="Japanese temple"
        badge="🔊 Speak With Confidence"
        title="Learn. Practice. Remember."
        description="Listen to pronunciation, understand meanings and practice Japanese vocabulary with practical examples."
        buttonText="Watch Tutorials"
        buttonLink="/tutorials"
        buttonClass="btn-accent"
        prev="slide2"
        next="slide1"
      />

    </div>
  </div>
</section>
      {/* =========================
          ABOUT
      ========================= */}
      <section className="px-4 py-10 sm:py-12 md:py-16">
        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
        >
          <span className="badge badge-primary badge-outline mb-4">
            Our Mission
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Make Japanese Vocabulary Easy & Fun
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-base-content/70 leading-relaxed">
            Lingo Bingo is a fun and interactive vocabulary learning
            application designed to help learners improve their Japanese
            vocabulary. Our goal is to make language learning easier by
            combining structured lessons, pronunciation practice, examples and
            interactive learning activities.
          </p>
        </div>
      </section>

      {/* =========================
          SUCCESS
      ========================= */}
      <section className="px-3 sm:px-4 py-10 sm:py-12">
        <div
          className="max-w-7xl mx-auto bg-base-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10"
          data-aos="zoom-in"
        >
          <div className="text-center mb-7 sm:mb-10">
            <span className="badge badge-secondary badge-outline mb-3">
              Our Progress
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Lingo Bingo in Numbers
            </h2>

            <p className="mt-3 text-sm sm:text-base text-base-content/60">
              Learn Japanese vocabulary with thousands of learners around the
              world.
            </p>
          </div>

          {/* Responsive Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">

            <div className="bg-base-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                👥
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                <AnimatedNumber end={1500} suffix="+" />
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-base-content/60">
                Active Users
              </p>
            </div>

            <div className="bg-base-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                📚
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
                <AnimatedNumber end={10} />
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-base-content/60">
                Lessons
              </p>
            </div>

            <div className="bg-base-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                🗣️
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent">
                <AnimatedNumber end={50} suffix="+" />
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-base-content/60">
                Vocabulary Words
              </p>
            </div>

            <div className="bg-base-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                🎥
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-info">
                <AnimatedNumber end={8} />
              </h3>

              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-base-content/60">
                Tutorial Videos
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          WHY LINGO BINGO
      ========================= */}
      <section className="px-4 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">

          <div
            className="text-center mb-8 sm:mb-10"
            data-aos="fade-up"
          >
            <span className="badge badge-primary badge-outline mb-3">
              Why Lingo Bingo?
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Everything You Need to Learn
            </h2>

            <p className="mt-3 text-sm sm:text-base text-base-content/60 max-w-2xl mx-auto">
              Simple tools and useful features to make your Japanese vocabulary
              learning journey easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              <div className="card-body p-5 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                  🔊
                </div>

                <h3 className="card-title text-lg sm:text-xl">
                  Pronunciation Practice
                </h3>

                <p className="text-sm sm:text-base text-base-content/70">
                  Listen to Japanese words and practice their pronunciation to
                  improve your speaking skills.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="card-body p-5 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                  📖
                </div>

                <h3 className="card-title text-lg sm:text-xl">
                  Structured Lessons
                </h3>

                <p className="text-sm sm:text-base text-base-content/70">
                  Learn vocabulary through 10 carefully organized lessons from
                  beginner to advanced.
                </p>
              </div>
            </div>

            <div
              className="card bg-base-200 shadow-sm hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body p-5 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                  💡
                </div>

                <h3 className="card-title text-lg sm:text-xl">
                  Real-Life Examples
                </h3>

                <p className="text-sm sm:text-base text-base-content/70">
                  Understand when and how to use each word through practical
                  Japanese examples.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          HOW IT WORKS
      ========================= */}
      <section className="px-4 py-10 sm:py-12 md:py-16 bg-base-200">
        <div className="max-w-7xl mx-auto">

          <div
            className="text-center mb-10 sm:mb-12"
            data-aos="fade-up"
          >
            <span className="badge badge-secondary badge-outline mb-3">
              Easy Learning
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Start Learning in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">

            <div
              className="text-center"
              data-aos="fade-right"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary text-primary-content flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                1
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3">
                Create an Account
              </h3>

              <p className="text-sm sm:text-base text-base-content/60">
                Register for free and get access to Japanese vocabulary
                lessons.
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-secondary text-secondary-content flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                2
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3">
                Choose a Lesson
              </h3>

              <p className="text-sm sm:text-base text-base-content/60">
                Select a lesson and explore vocabulary according to difficulty.
              </p>
            </div>

            <div
              className="text-center"
              data-aos="fade-left"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-accent text-accent-content flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                3
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3">
                Practice & Improve
              </h3>

              <p className="text-sm sm:text-base text-base-content/60">
                Listen, practice and learn new words regularly to improve your
                Japanese.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="px-3 sm:px-4 py-10 sm:py-12 md:py-20">
        <div
          className="max-w-5xl mx-auto text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14 shadow-xl"
          data-aos="fade-up"
        >
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">
            🇯🇵
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Start Your Japanese Journey?
          </h2>

          <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Build your Japanese vocabulary step by step, improve your
            pronunciation and become more confident in communication.
          </p>

          <Link
            to="/start-learning"
            className="btn bg-white text-indigo-600 border-none hover:bg-gray-100 w-full sm:w-auto px-8"
          >
            Explore Lessons
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;