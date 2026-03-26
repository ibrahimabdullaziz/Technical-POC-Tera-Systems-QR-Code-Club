import './RecommendationTable.css';

export default function RecommendationTable({ title, rows }) {
  return (
    <div className="recommendation-table-section">
      <h3>{title}</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Action</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.action}</td>
              <td>{row.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
