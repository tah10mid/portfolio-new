import { FaCode, FaPaintBrush, FaLaptopCode, FaRobot } from "react-icons/fa";

const services = [
  {
    Icon: FaCode,
    title: "Frontend Development",
    description:
      "I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.js, PHP, MySQL and Next.js.",
  },
  {
    Icon: FaPaintBrush,
    title: "UI Design",
    description:
      "Creating clean and modern user interfaces with focus on design and usability.",
  },
  {
    Icon: FaLaptopCode,
    title: "Web Applications",
    description:
      "Building modern web applications with dynamic features and smooth performance.",
  },
  {
    Icon: FaRobot,
    title: "AI & Machine Learning",
    description:
      "ML models, intent classification, LLM integration with Gemini, and intelligent Streamlit-powered tools.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services reveal">
      <h2 className="section-title">
        Services
        <span className="section-title__underline" />
      </h2>
      <div className="services__grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <s.Icon className="service-card__icon" size={45} />
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
