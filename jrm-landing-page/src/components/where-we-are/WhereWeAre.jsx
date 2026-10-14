import { motion, useReducedMotion } from "motion/react";
import "./WhereWeAre.css";

const MotionSpan = motion.span;
const MotionHeading = motion.h2;
const MotionTitle = motion.h3;
const MotionParagraph = motion.p;
const MotionListItem = motion.li;
const MotionDiv = motion.div;

export const WhereWeAre = () => {
  const reduceMotion = useReducedMotion();
  const entrance = (delay = 0, fadeOnly = false) => ({
    initial: reduceMotion ? false : { opacity: 0, y: fadeOnly ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 1,
      delay: reduceMotion ? 0 : 0.2 + delay * 3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  });
  return (
    <section id="where-we-are">
      <div className="container">
        <div className="where-we-are__header">
          <MotionSpan {...entrance()} className="where-we-are__subtitle">Where we are</MotionSpan>
          <MotionHeading {...entrance(0.12)} className="where-we-are__title">Find us in Barcelona</MotionHeading>
        </div>
        <div className="where-we-are__content">
          <div className="where-we-are__info">
            <div className="where-we-are__item">
              <div className="info__container">
                <MotionTitle {...entrance()} className="info__title">Address</MotionTitle>
                <MotionParagraph {...entrance(0.12)} className="info__paragraph">
                  <a
                    href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&name=CALLE+RIERETA+NO.+4%2C+BAJOS+ESQUINA+VISTA+ALEGRE%2C+Barcelona%2C+Spain%2C+08001&mkt=es-ES&fbclid=IwY2xjawU6El5leHRuA2FlbQIxMABwZG9mAWJyaWQRMG1EUWNLOUtBbUtocmhKRk1zcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJ097XonPOjghCkxLtrCGSMvcCX9jzfDQBzwtjsd5Q8FCFHJMiBWHo2Tdst8_aem_gF2ITRBYEw-92EHXpzQjXg&FORM=FBKPL1&q=41.37902%2C+2.16717&cp=41.379021%7E2.167170&lvl=11&style=r"
                    target="_blank"
                  >
                    C/ Riereta NO.4, Bajos esquina vista alegre, Barcelona,
                    Spain, 08001
                  </a>
                </MotionParagraph>
              </div>
            </div>

            <div className="where-we-are__info-item">
              <div className="info__container">
                <MotionTitle {...entrance()} className="info__title">Schedule</MotionTitle>
                <ul className="info__paragraph">
                    <MotionListItem {...entrance(0.10)}>Monday · Service - Filipino: 17:30H - 19:00H</MotionListItem>
                    <MotionListItem {...entrance(0.15)}>Tuesday · Bible study - Spanish: 18:00H - 19:30H</MotionListItem>
                    <MotionListItem {...entrance(0.20)}>Wednesday · Bible study - Filipino: 17:30H - 19:00H</MotionListItem>
                    <MotionListItem {...entrance(0.25)}>
                      Friday · Prayer intercession - Filipino, Spanish: 17:30H -
                      19:00H
                    </MotionListItem>
                    <MotionListItem {...entrance(0.30)}>Sunday · 1st service - Filipino: 10:30H - 12:30H</MotionListItem>
                    <MotionListItem {...entrance(0.35)}>Sunday · 2nd service - Spanish: 12:45H - 14:30H</MotionListItem>
                    <MotionListItem {...entrance(0.40)}>Sunday · 3rd service - Filipino: 17:30H - 19:00H</MotionListItem>
                  </ul>
              </div>
            </div>

            <div className="where-we-are__info-item">
              <div className="info__container">
                <MotionTitle {...entrance()} className="info__title">Getting here by metro</MotionTitle>
                <MotionParagraph {...entrance(0.08)} className="info__paragraph metro-stations__intro">
                  Planning your visit? Take the metro to either of these stations:
                </MotionParagraph>
                <ul className="metro-stations">
                  <MotionListItem {...entrance(0.12)} className="metro-stations__item">
                    <span className="metro-stations__badge metro-stations__badge--l2" aria-label="Metro line L2">L2</span>
                    <span>Sant Antoni</span>
                  </MotionListItem>
                  <MotionListItem {...entrance(0.20)} className="metro-stations__item">
                    <span className="metro-stations__badge metro-stations__badge--l3" aria-label="Metro line L3">L3</span>
                    <span>Paral·lel</span>
                  </MotionListItem>
                </ul>
              </div>
            </div>
          </div>
          <MotionDiv {...entrance(0.15, true)} className="where-we-are__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.767483474776!2d2.1645295119782766!3d41.37913619638669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a35b76eb3b0d%3A0xe85883c597648005!2sIglesia%20Evang%C3%A9lica%20Jes%C3%BAs%20Reino%20Ministerio!5e0!3m2!1ses!2ses!4v1791834990035!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
