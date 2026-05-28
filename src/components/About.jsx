import { useState } from "react";
import skills from "../data/skills";
import heroCharacter from "../assets/hero-character.png";
import heroReveal from "../assets/hero-reveal.png";

export default function About() {
  const [flipped, setFlipped] = useState(false);

  const doubled = [...skills, ...skills];

  return (
    <section id="about" className="about reveal">
      <h2 className="section-title">
        About Me
        <span className="section-title__underline" />
      </h2>

      <div className="about__content">
        <div
          className={`about__card ${flipped ? "about__card--flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
          aria-label="Flip photo card"
        >
          <div className="about__card-inner">
            <div className="about__card-front">
              <img src={heroCharacter} alt="Tahmid portrait" />
            </div>
            <div className="about__card-back">
              <img src={heroReveal} alt="Tahmid alternate" />
            </div>
          </div>
        </div>

        <div className="about__bio">
          <p>
            I'm Tahmid, a Computer Science student and full-stack developer from
            Dhaka, Bangladesh. I build real, deployed web apps — from a Next.js
            learning platform for my university to AI-powered tools that combine
            machine learning with modern web stacks. I enjoy writing clean,
            logical code, shipping projects end-to-end, and learning in public.
            My goal is to keep building polished products that solve real problems
            for real people.
          </p>
        </div>
      </div>

      <div className="marquee" aria-label="Skills">
        <div className="marquee__track">
          {doubled.map((s, i) => (
            <div className="marquee__item" key={i}>
              <s.Icon size={28} />
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
