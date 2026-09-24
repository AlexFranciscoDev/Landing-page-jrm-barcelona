import React from "react";
import './OurMission.css';
import { LuBookOpenText } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { PiHandsPraying } from "react-icons/pi";

export const OurMission = () => {
  return (
    <section id="our-mission">
      <div className="container">
        <div className="our-mission__header">
          <h2>Grow closer to God</h2>
          <p>
            We want to help you know Jesus personally and follow Him in everyday
            life. Wherever you are in your faith, we invite you to grow through
            His Word, prayer, and community.
          </p>
        </div>
        <div className="our-mission__grid">
          <div className="our-mission__block">
            <div className="our-mission__icon">
              <LuBookOpenText />
            </div>
            <h3>Grow in His Word</h3>
            <p>
              Discover who God is through the Bible. Together, we make room for
              questions, deepen our understanding, and learn to put His Word
              into practice.
            </p>
          </div>
          <div className="our-mission__block">
            <div className="our-mission__icon">
              <SlPeople />
            </div>
            <h3>Walk together in faith</h3>
            <p>
              Following Jesus is a journey we share. Find people who will pray
              with you, encourage you, and help you stay rooted in your
              relationship with God.
            </p>
          </div>
          <div className="our-mission__block">
            <div className="our-mission__icon">
              <PiHandsPraying />
            </div>
            <h3>Draw near in prayer</h3>
            <p>
              Prayer is a chance to be honest with God, seek His guidance, and
              learn to trust Him. Let’s bring our needs before Him and make time
              for His presence together.
            </p>
          </div>
        </div>
        <button className="button button--primary our-mission__btn">Grow with us</button>
      </div>
    </section>
  );
};
