import { motion, useReducedMotion } from "motion/react";
import './OurMission.css';
import { LuBookOpenText } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { PiHandsPraying } from "react-icons/pi";

const MotionDiv = motion.div;
const MotionButton = motion.button;

export const OurMission = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0, card = false) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24, scale: card ? 0.96 : 1 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });
  return (
    <section id="our-mission">
      <div className="container">
        <MotionDiv className="our-mission__header" {...entrance()}>
          <h2>Grow closer to God</h2>
          <p>
            We want to help you know Jesus personally and follow Him in everyday
            life. Wherever you are in your faith, we invite you to grow through
            His Word, prayer, and community.
          </p>
        </MotionDiv>
        <div className="our-mission__grid">
          <MotionDiv className="our-mission__block" {...entrance(0, true)}>
            <div className="our-mission__icon">
              <LuBookOpenText />
            </div>
            <h3>Grow in His Word</h3>
            <p>
              Discover who God is through the Bible. Together, we make room for
              questions, deepen our understanding, and learn to put His Word
              into practice.
            </p>
          </MotionDiv>
          <MotionDiv className="our-mission__block" {...entrance(0.1, true)}>
            <div className="our-mission__icon">
              <SlPeople />
            </div>
            <h3>Walk together in faith</h3>
            <p>
              Following Jesus is a journey we share. Find people who will pray
              with you, encourage you, and help you stay rooted in your
              relationship with God.
            </p>
          </MotionDiv>
          <MotionDiv className="our-mission__block" {...entrance(0.2, true)}>
            <div className="our-mission__icon">
              <PiHandsPraying />
            </div>
            <h3>Draw near in prayer</h3>
            <p>
              Prayer is a chance to be honest with God, seek His guidance, and
              learn to trust Him. Let’s bring our needs before Him and make time
              for His presence together.
            </p>
          </MotionDiv>
        </div>
        <MotionButton className="button button--primary our-mission__btn" {...entrance()}>Grow with us</MotionButton>
      </div>
    </section>
  );
};
