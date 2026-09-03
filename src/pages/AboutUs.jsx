const AboutUs = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-content">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Lingo Bingo
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Learn new languages, build your vocabulary, and practice every day
            with Lingo Bingo.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Learn Languages in a Fun Way
            </h2>

            <p className="text-base-content/70 leading-7 mb-4">
              Lingo Bingo is a vocabulary learning application designed to
              make language learning simple, interactive, and enjoyable.
            </p>

            <p className="text-base-content/70 leading-7">
              Our platform helps learners discover new words, understand their
              meanings, practice pronunciation, and improve their vocabulary
              through interactive lessons and quizzes.
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">🌎</div>

              <h3 className="text-2xl font-bold mb-2">
                Learn. Practice. Improve.
              </h3>

              <p className="text-base-content/70">
                Small daily practice can make a big difference in your
                language-learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-base-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            What You Can Do
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-bold text-xl">Learn Vocabulary</h3>
                <p className="text-sm text-base-content/70">
                  Learn useful words through organized lessons.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🔊</div>
                <h3 className="font-bold text-xl">Practice Pronunciation</h3>
                <p className="text-sm text-base-content/70">
                  Listen to words and improve your pronunciation.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-bold text-xl">Take Quizzes</h3>
                <p className="text-sm text-base-content/70">
                  Test your vocabulary knowledge with interactive quizzes.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-xl">Track Progress</h3>
                <p className="text-sm text-base-content/70">
                  Keep learning consistently and improve your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-5">Our Mission</h2>

        <p className="text-lg text-base-content/70 leading-8">
          Our mission is to make language learning accessible, enjoyable, and
          effective for everyone. Lingo Bingo combines vocabulary lessons,
          pronunciation practice, and quizzes to create a simple learning
          experience.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;