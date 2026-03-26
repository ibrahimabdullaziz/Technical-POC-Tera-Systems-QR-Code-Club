import './SummaryBar.css';

const items = [
  { severity: 'critical', count: 4, label: 'Critical Gaps' },
  { severity: 'high', count: 6, label: 'High Severity' },
  { severity: 'medium', count: 7, label: 'Medium Severity' },
  { severity: 'low', count: 5, label: 'Low / Enhancement' },
];

export default function SummaryBar() {
  return (
    <div className="summary-bar">
      {items.map((item) => (
        <div key={item.severity} className={`summary-item ${item.severity}`}>
          <div className="count">{item.count}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
