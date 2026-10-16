import { motion, useReducedMotion } from "motion/react";
import './Hero.css';

const MotionSpan = motion.span;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;
const MotionDiv = motion.div;
const MotionQuote = motion.blockquote;

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.9,
      delay: reduceMotion ? 0 : 0.35 + delay * 2,
      ease: [0.22, 1, 0.36, 1],
    },
  });
  return (
    <section id="home">
      <div className="hero-images">
        <div className="hero-overlay">
          <div className="container hero-content">
            <MotionSpan {...entrance(0)} className="hero-tagline">Welcome to JRM Barcelona</MotionSpan>
            <MotionHeading {...entrance(0.1)} className="hero-headline">A place where everyone belongs</MotionHeading>
            <MotionParagraph {...entrance(0.2)} className="hero-description">We are a Christian church in the heart of Barcelona, where you can find community, hope, and the presence of God.</MotionParagraph>
            <MotionDiv {...entrance(0.3)} className='hero-buttons'>
              <a href="#schedule" className='button button--primary'>Schedule</a>
              <a href="#contact" className='button button--terciary'>Contact</a>
            </MotionDiv>
            <MotionQuote {...entrance(0.4)} className="hero-verse">
              “For where two or three gather in my name, there am I with them.”<br /> <span className="verse">Matthew 18:20 (NIV)</span>
            </MotionQuote>
          </div>
        </div>
      </div>
    </section>
  );
};
