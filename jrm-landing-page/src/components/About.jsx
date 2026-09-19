import React from "react";
import { ImageCarousel } from "./ImageCarousel";
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className='about__text'>
            <h2 className='text__title'>A family where faith and community grow</h2>
            <p>At JRM Barcelona, we’re a community that loves Jesus and shares life together. Wherever you come from, you’ll find a warm welcome and a place to belong.</p>
            <p>Through worship, friendship, and serving others, we encourage one another to grow in faith and discover God’s purpose for our lives. We’d love for you to be part of our story.</p>
            <button className='button button--primary about__text--schedule'>Schedule</button>
        </div>
        <div className='about__img'>
            <ImageCarousel/>
        </div>
      </div>
    </section>
  );
};
