import { motion, useReducedMotion } from "motion/react";
import { ImageCarousel } from "../image-carousel/ImageCarousel";
import './About.css';

const MotionDiv = motion.div;

export const About = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });
  return (
    <section id="about">
      <div className="container about">
        <MotionDiv {...entrance()} className='about__text'>
            <h2 className='text__title'>A family where faith and community grow</h2>
            <p>At JRM Barcelona, we’re a community that loves Jesus and shares life together. Wherever you come from, you’ll find a warm welcome and a place to belong.</p>
            <p>Through worship, friendship, and serving others, we encourage one another to grow in faith and discover God’s purpose for our lives. We’d love for you to be part of our story.</p>
            <a href="#schedule" className='button button--primary about__text--schedule'>Schedule</a>
        </MotionDiv>
        <MotionDiv {...entrance(0.15)} className='about__img'>
            <ImageCarousel/>
        </MotionDiv>
      </div>
    </section>
  );
};
