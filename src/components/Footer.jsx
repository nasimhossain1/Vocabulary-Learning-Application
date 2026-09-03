const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              🗣️ Lingo Bingo
            </h2>
            <p className="text-sm opacity-80 leading-6">
              Learn new vocabulary, practice pronunciation, and improve your
              language skills with fun and interactive lessons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Home</li>
              <li>Start Learning</li>
              <li>Tutorials</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Learning With Us</h3>
            <p className="text-sm opacity-80 leading-6">
              Make language learning a daily habit and take one step closer to
              becoming a confident language learner.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-content/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Lingo Bingo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;