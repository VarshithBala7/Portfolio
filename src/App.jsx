export default function App(){
  return (
    <div>
      <header style={{padding:"16px 0", borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
        <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontWeight:800}}>VB</div>
          <nav style={{display:"flex", gap:12}}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/files/resume.pdf" download className="btn">Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h1 style={{fontSize:36, margin:"0 0 8px"}}>Hi, I’m <span style={{color:"#7c6cff"}}>Varshith Bala</span></h1>
            <p style={{opacity:.8, maxWidth:720}}>
              Data Science graduate (UNT, Dec 2025). I build reliable data pipelines and ML-powered insights.
            </p>
          </div>
        </section>

        <section id="about" className="section" style={{background:"linear-gradient(180deg, rgba(255,255,255,0.04), transparent)"}}>
          <div className="container">
            <h2>About</h2>
            <p>
              I focus on practical analytics and ML: Python, SQL, ETL, AWS, Airflow, Snowflake, Tableau.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2>Skills</h2>
            <ul>
              <li>Python, Pandas, SQL, Tableau</li>
              <li>Airflow, AWS, Snowflake, Kafka</li>
              <li>ETL, Scikit-learn</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16}}>
              <div className="card">
                <h3>Meeting Health Dashboard</h3>
                <p>Interactive analytics of meeting quality and participation.</p>
              </div>
              <div className="card">
                <h3>NLP Sentiment Pipeline</h3>
                <p>Twitter/Reddit ingestion + sentiment + dashboards.</p>
              </div>
              <div className="card">
                <h3>X‑ray Classification</h3>
                <p>Transfer learning, experiment tracking & reporting.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section" style={{background:"linear-gradient(0deg, rgba(255,255,255,0.04), transparent)"}}>
          <div className="container">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:varshithbala@example.com">varshithbala@example.com</a></p>
            <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noreferrer">github.com/your-username</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/in/varshithbala</a></p>
          </div>
        </section>
      </main>

      <footer style={{padding:"24px 0", borderTop:"1px solid rgba(255,255,255,0.1)"}}>
        <div className="container">
          © {new Date().getFullYear()} Varshith Bala
        </div>
      </footer>
    </div>
  );
}
