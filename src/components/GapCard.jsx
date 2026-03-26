import './GapCard.css';

export default function GapCard({ severity, title, children }) {
  return (
    <div className={`gap-card ${severity}`}>
      <div className="gap-header">
        <span className="severity-badge">{severity}</span>
        <span className="gap-title">{title}</span>
      </div>
      <div className="gap-body">{children}</div>
    </div>
  );
}
