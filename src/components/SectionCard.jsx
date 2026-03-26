import './SectionCard.css';

export default function SectionCard({ num, title, children }) {
  return (
    <section>
      <div className="section-card">
        <div className="section-header">
          <span className="section-num">{num}</span>
          <h2>{title}</h2>
        </div>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
