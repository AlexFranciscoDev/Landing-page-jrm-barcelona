import React from "react";
import "./GetInvolved.css";

export const GetInvolved = () => {
  return (
    <section id="get-involved">
      <div className="container">
        <div className="get-involved__header">
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
        </div>
        <div className="get-involved-grid">
          <div
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
          </div>
          <div className="get-involved__block">
            <h3>Youth Ministry</h3>
            <p>
              Helping young people follow Jesus through friendship, prayer, and
              His Word. Together, we explore life’s questions and encourage each
              other to grow in faith.
            </p>
          </div>
          <div className="get-involved__block">
            <h3>Couples Ministry</h3>
            <p>
              Helping couples build marriages rooted in Jesus through Scripture,
              prayer, and community. Together, we learn to love deeply and
              support each other through life.
            </p>
          </div>
          <div className="get-involved__block">
            <h3>Worship Ministry</h3>
            <p>
              Helping people draw near to God through music, prayer, and praise.
              Together, we use our gifts to serve the church and honour Jesus
              wholeheartedly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
