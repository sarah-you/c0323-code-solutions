import './Main.css';

export default function Main() {
  return (
    <div className="main-container">
      <div className="main-img-wrap">
        <img
          className="main-hero"
          src="/images/hero.jpg"
          alt="woman smiling happily"
        />
        <h1 className="hero-text-overlay-h1">
          The EMR Reimagined for Primary Care
        </h1>
        <p className="hero-text-overlay-p">
          Can't remember the last time you talked with a patient without
          focusing on the EMR? Canvas lets you rediscover joy in the work you
          do. Capture meaningful data, identify gaps in care, and move
          seamslessly between tasks wtihin the platform. You stay present with
          patients while your whole care team stays up-to-speed. Be a better
          doctor with Canvas, designed for primary care providers with the help
          of primary care providers
        </p>
        <button className="main-cta-btn">Get Started</button>
      </div>
    </div>
  );
}
