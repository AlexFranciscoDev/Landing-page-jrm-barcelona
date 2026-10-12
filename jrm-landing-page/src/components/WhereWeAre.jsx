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
            <div className="info__container">
              <h3 className="info__title">Adress</h3>
              <p className="info__paragraph">
                Carrer de la Iglésia, XX 08001 Barcelona, España
              </p>
            </div>
          </div>

          <div className="where-we-are__info">
            <div className="info__container">
              <h3 className="info__title">Schedule</h3>
              <p className="info__paragraph">
                Carrer de la Iglésia, XX 08001 Barcelona, España
              </p>
            </div>
          </div>

          <div className="where-we-are__info">
            <div className="info__container">
              <h3 className="info__title">Metro and transport</h3>
              <p className="info__paragraph">
                Carrer de la Iglésia, XX 08001 Barcelona, España
              </p>
            </div>
          </div>
          <div className="where-we-are__map"></div>
        </div>
      </div>
    </section>
  );
};
