import './Hero.css';

export const Hero = () => {
  return (
    <section id="home">
      <div className="hero-images">
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="hero-tagline">Welcome to JRM Barcelona</span>
            <h1 className="hero-headline">A place where everyone belongs</h1>
            <p className="hero-description">We are a Christian church in the heart of Barcelona, where you can find community, hope, and the presence of God.</p>
            <div className='hero-buttons'>
              <button className='button button--primary'>Schedule</button>
              <button className='button button--terciary'>Contact</button>
            </div>
            <blockquote className="hero-verse">
              “For where two or three gather in my name, there am I with them.”<br /> <span className="verse">Matthew 18:20 (NIV)</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
