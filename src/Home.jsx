

import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <span className="badge">🚀 Modern Task Management</span>
          <h1>Manage Your Tasks <span>Smarter.</span></h1>
          <p>
            Organize your work, track your progress and stay productive with a
            clean, modern interface built using React.
          </p>

          <div className="buttons">
            <button className="primary">Get Started</button>
            <button className="secondary">Live Demo</button>
          </div>

          <div className="stats-mini">
            <div><h3>10K+</h3><span>Tasks</span></div>
            <div><h3>500+</h3><span>Users</span></div>
            <div><h3>99%</h3><span>Happy</span></div>
          </div>
        </div>

        <div className="mockup">
          <div className="top">
            <span></span><span></span><span></span>
          </div>
          <h3>Today's Tasks</h3>
          <div className="task done">✔ Finish Portfolio</div>
          <div className="task done">✔ Review React</div>
          <div className="task">○ Learn useCallback</div>
          <div className="task">○ Deploy Project</div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose TaskFlow?</h2>
        <div className="cards">
          <div className="card">⚡<h3>Fast</h3><p>Optimized React experience.</p></div>
          <div className="card">🌙<h3>Dark Mode</h3><p>Beautiful light & dark UI.</p></div>
          <div className="card">💾<h3>Auto Save</h3><p>Ready for Local Storage.</p></div>
          <div className="card">📱<h3>Responsive</h3><p>Works on every device.</p></div>
        </div>
      </section>

      <section className="steps">
        <h2>How It Works</h2>
        <div className="timeline">
          <div>1️⃣ Create</div>
          <div>⬇</div>
          <div>2️⃣ Organize</div>
          <div>⬇</div>
          <div>3️⃣ Complete</div>
        </div>
      </section>

      <section className="numbers">
        <div><h2>1200+</h2><p>Projects</p></div>
        <div><h2>5800+</h2><p>Tasks</p></div>
        <div><h2>99%</h2><p>Satisfaction</p></div>
        <div><h2>24/7</h2><p>Available</p></div>
      </section>

      <section className="cta">
        <h2>Ready to boost your productivity?</h2>
        <p>Create your account and start managing your work today.</p>
        <button className="primary">Create Account</button>
      </section>

      <footer className="footer">
        <h3>TaskFlow</h3>
        <p>Built with ❤️ using React.</p>
      </footer>
    </main>
  );
}
