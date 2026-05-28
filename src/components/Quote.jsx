import { FaQuoteLeft } from "react-icons/fa";

export default function Quote() {
  return (
    <section className="quote reveal" aria-label="Quote">
      <FaQuoteLeft className="quote__mark" />
      <blockquote className="quote__text">
        Pressure Is Privilege.
      </blockquote>
      <span className="quote__line" />
    </section>
  );
}
