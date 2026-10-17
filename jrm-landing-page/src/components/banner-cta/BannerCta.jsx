import { motion, useReducedMotion } from "motion/react";
import "./BannerCta.css";

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionHeading = motion.h2;
const MotionParagraph = motion.p;

export const BannerCta = () => {
  const reduceMotion = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="banner-cta">
      <div className="container">
        <MotionDiv
          className="banner"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <MotionSpan variants={reduceMotion ? undefined : item} className="banner__subtitle">Come as you are</MotionSpan>
          <MotionHeading variants={reduceMotion ? undefined : item} className="banner__title">Make room for faith in your week</MotionHeading>
          <MotionParagraph variants={reduceMotion ? undefined : item} className="banner__description">
            Step away from the everyday rush and join us for worship, prayer,
            and a message from God’s Word. Whether you’re exploring faith or
            have followed Jesus for years, we’d love to welcome you at JRM
            Barcelona.
          </MotionParagraph>
          <MotionDiv variants={reduceMotion ? undefined : item}>
            <a href="#where-we-are" className="button button--primary">Join us</a>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
