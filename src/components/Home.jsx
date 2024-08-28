import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Hi there <span role="img" aria-label="wave">👋</span> I&apos;m
      </h1>
      <h2 className="home-name">[Cristina Silvestre]</h2>
      <h3 className="home-role">Web Developer</h3>
      <p className="home-description">
        {/* I recently graduated in DAW */}
        <br />
        {/* Consistenly learning, I'm looking for an opportunity to grow :) */}
      </p>
      <p className="home-links">
        {/* My GitHub profile */}
        <br />
        const githubUrl = &quot;<a href="https://github.com/crisilto" target="_blank" rel="noopener noreferrer">https://github.com/crisilto</a>&quot;
      </p>
    </div>
  );
};

export default Home;
