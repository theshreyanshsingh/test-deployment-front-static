import "./App.css";

function App() {
  const athletes = [
    {
      name: "Sarah Johnson",
      sport: "Track & Field",
      achievement: "Olympic Gold Medalist",
    },
    {
      name: "Marcus Chen",
      sport: "Swimming",
      achievement: "World Record Holder",
    },
    {
      name: "Elena Rodriguez",
      sport: "Tennis",
      achievement: "Grand Slam Champion",
    },
    { name: "David Kim", sport: "Basketball", achievement: "MVP 2023" },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Elite Athletes</h1>
          <p className="hero-subtitle">Celebrating Excellence in Sports</p>
          <button className="cta-button">Discover Champions</button>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* Athletes Grid */}
      <section className="athletes-section">
        <h2 className="section-title">Featured Athletes</h2>
        <div className="athletes-grid">
          {athletes.map((athlete, index) => (
            <div key={index} className="athlete-card">
              <div className="athlete-avatar"></div>
              <h3 className="athlete-name">{athlete.name}</h3>
              <p className="athlete-sport">{athlete.sport}</p>
              <p className="athlete-achievement">{athlete.achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Athletes</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Sports</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Championships</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
