import './Cover.css';

export default function Cover() {
  return (
    <div className="cover">
      <div className="cover-label">Technical Analysis</div>
      <h1>
        Proof of Concept<br />
        <span>System Breakdowns &amp; Gaps</span>
      </h1>
      <p className="cover-sub">
        An in-depth technical evaluation of the Tera Systems / QR Code Club
        platform — identifying architectural weaknesses, security gaps,
        scalability limits, and integration deficiencies.
      </p>
      <div className="cover-meta">
        <div className="cover-meta-item">
          <label>Target System</label>
          <span>Tera Systems – QRCodeClub</span>
        </div>
        <div className="cover-meta-item">
          <label>URL</label>
          <span>terasystems.net</span>
        </div>
        <div className="cover-meta-item">
          <label>Date</label>
          <span>March 2026</span>
        </div>
        <div className="cover-meta-item">
          <label>Classification</label>
          <span>Technical POC</span>
        </div>
      </div>
    </div>
  );
}
