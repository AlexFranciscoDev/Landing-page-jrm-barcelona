import react from "react";
import "./WhereWeAre.css";

export const WhereWeAre = () => {
  return (
    <section id="where-we-are">
      <div className="container">
        <div className="where-we-are__header">
          <span className="where-we-are__subtitle">Where we are</span>
          <h2 className="where-we-are__title">Find us in Barcelona</h2>
        </div>
        <div className="where-we-are__content">
          <div className="where-we-are__info">
            <div className="where-we-are__item">
              <div className="info__container">
                <h3 className="info__title">Adress</h3>
                <p className="info__paragraph">
                  <a
                    href="https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&name=CALLE+RIERETA+NO.+4%2C+BAJOS+ESQUINA+VISTA+ALEGRE%2C+Barcelona%2C+Spain%2C+08001&mkt=es-ES&fbclid=IwY2xjawU6El5leHRuA2FlbQIxMABwZG9mAWJyaWQRMG1EUWNLOUtBbUtocmhKRk1zcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeJ097XonPOjghCkxLtrCGSMvcCX9jzfDQBzwtjsd5Q8FCFHJMiBWHo2Tdst8_aem_gF2ITRBYEw-92EHXpzQjXg&FORM=FBKPL1&q=41.37902%2C+2.16717&cp=41.379021%7E2.167170&lvl=11&style=r"
                    target="_blank"
                  >
                    C/ Riereta NO.4, Bajos esquina vista alegre, Barcelona,
                    Spain, 08001
                  </a>
                </p>
              </div>
            </div>

            <div className="where-we-are__info-item">
              <div className="info__container">
                <h3 className="info__title">Schedule</h3>
                <p className="info__paragraph">
                  <ul>
                    <li>Monday · Service - Filipino: 17:30H - 19:00H</li>
                    <li>Tuesday · Bible study - Spanish: 18:00H - 19:30H</li>
                    <li>Wednesday · Bible study - Filipino: 17:30H - 19:00H</li>
                    <li>
                      Friday · Prayer intercession - Filipino, Spanish: 17:30H -
                      19:00H
                    </li>
                    <li>Sunday · 1st service - Filipino: 10:30H - 12:30H</li>
                    <li>Sunday · 2nd service - Spanish: 12:45H - 14:30H</li>
                    <li>Sunday · 3rd service - Filipino: 17:30H - 19:00H</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="where-we-are__info-item">
              <div className="info__container">
                <h3 className="info__title">Getting here by metro</h3>
                <p className="info__paragraph">
                  You can reach us by metro: take line L2 to Sant Antoni or line
                  L3 to Paral·lel.
                </p>
              </div>
            </div>
          </div>
          <div className="where-we-are__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.767483474776!2d2.1645295119782766!3d41.37913619638669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a35b76eb3b0d%3A0xe85883c597648005!2sIglesia%20Evang%C3%A9lica%20Jes%C3%BAs%20Reino%20Ministerio!5e0!3m2!1ses!2ses!4v1791834990035!5m2!1ses!2ses"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
