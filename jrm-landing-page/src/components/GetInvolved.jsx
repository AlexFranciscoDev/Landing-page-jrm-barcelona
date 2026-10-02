import { motion, useReducedMotion } from "motion/react";
import "./GetInvolved.css";

const MotionDiv = motion.div;

export const GetInvolved = () => {
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
    <section id="get-involved">
      <div className="container">
        <MotionDiv className="get-involved__header" {...entrance()}>
          <span className="get-involved__subtitle">Get involved</span>
          <h2>A place for you and your family</h2>
          <p>
            At Jesus Reigns Ministries Barcelona, we want you and your family to
            know Jesus deeply and find a community to walk alongside you. We
            come from different cultures and backgrounds, united by our faith
            and our desire to grow closer to God. Through worship, prayer,
            studying His Word, and serving others, we learn to follow Him in our
            everyday lives. Wherever you are in your journey, we invite you to
            join us, share your gifts, and help us bring the love of Jesus to
            our city.
          </p>
        </MotionDiv>
        <div className="get-involved-grid">
          <MotionDiv
            {...entrance(0, true)}
            className="get-involved__block"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 3%), rgb(0 0 0 / 12%)),
    url('/img/kids.webp')`,
            }}
          >
            <h3>Children’s Ministry</h3>
            <p>
              Helping children know Jesus through Bible stories, prayer, and
              activities. Together, we nurture their faith and help them
              discover God’s love in everyday life.
            </p>
          </MotionDiv>
          <MotionDiv
            {...entrance(0.1, true)}
            className="get-involved__block"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 3%), rgb(0 0 0 / 12%)),
    url('/img/youth.webp')`,
            }}
          >
            <h3>Youth Ministry</h3>
            <p>
              Helping young people follow Jesus through friendship, prayer, and
              His Word. Together, we explore life’s questions and encourage each
              other to grow in faith.
            </p>
          </MotionDiv>
          <MotionDiv
            {...entrance(0, true)}
            className="get-involved__block"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 3%), rgb(0 0 0 / 12%)),
    url('/img/couples.webp')`,
            }}
          >
            <h3>Couples Ministry</h3>
            <p>
              Helping couples build marriages rooted in Jesus through Scripture,
              prayer, and community. Together, we learn to love deeply and
              support each other through life.
            </p>
          </MotionDiv>
          <MotionDiv
            {...entrance(0.1, true)}
            className="get-involved__block"
            style={{
              backgroundImage: `linear-gradient(rgb(0 0 0 / 3%), rgb(0 0 0 / 12%)),
    url('/img/worship.webp')`,
            }}
          >
            <h3>Worship Ministry</h3>
            <p>
              Helping people draw near to God through music, prayer, and praise.
              Together, we use our gifts to serve the church and honour Jesus
              wholeheartedly.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
