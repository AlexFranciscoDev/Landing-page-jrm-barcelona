import React from "react";
import "./BannerCta.css";

export const BannerCta = () => {
    return (
        <section id="banner-cta">
            <div className="container banner">
                <span className="banner__subtitle">Come as you are</span>
                <h2 className="banner__title">Make room for faith in your week</h2>
                <p className="banner__description">Step away from the everyday rush and join us for worship, prayer, and a message from God’s Word. Whether you’re exploring faith or have followed Jesus for years, we’d love to welcome you at JRM Barcelona.</p>
                <button className="button button--primary">Join us</button>
            </div>
        </section>
    )
}