
import "./About.css";

export default function About(){
  return (
    <main className="about">
      <section className="about-hero">
        <span className="badge">👋 About TaskFlow</span>
        <h1>Productivity Starts With Better Organization.</h1>
        <p>TaskFlow is a modern task management application built to help users organize work, track progress and stay focused.</p>
      </section>

      <section className="mission">
        <div className="box">
          <h2>🎯 Our Mission</h2>
          <p>Provide a clean, fast and enjoyable experience for managing daily tasks.</p>
        </div>
        <div className="box">
          <h2>💡 Vision</h2>
          <p>Build a simple platform that increases productivity without unnecessary complexity.</p>
        </div>
      </section>

      <section className="tech">
        <h2>Built With</h2>
        <div className="grid">
          <div className="card">⚛ React</div>
          <div className="card">🎨 CSS3</div>
          <div className="card">💾 Local Storage</div>
          <div className="card">🧭 React Router</div>
          <div className="card">⚡ Modern JavaScript</div>
          <div className="card">📱 Responsive Design</div>
        </div>
      </section>

      <section className="why">
        <h2>Why TaskFlow?</h2>
        <ul>
          <li>✔ Clean and modern UI.</li>
          <li>✔ Easy task organization.</li>
          <li>✔ Fast performance.</li>
          <li>✔ Responsive on all devices.</li>
        </ul>
      </section>

      <section className="team">
        <div className="profile">
          <div className="avatar">ZI</div>
          <h3>Developer</h3>
          <p>Frontend Developer passionate about creating beautiful and user-friendly interfaces.</p>
        </div>
      </section>
    </main>
  );
}
