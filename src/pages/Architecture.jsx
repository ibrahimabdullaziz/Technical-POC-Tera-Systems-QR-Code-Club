import SectionCard from '../components/SectionCard';
import { techStack } from '../data/gapsData';
import './Architecture.css';

export default function Architecture() {
  return (
    <SectionCard num="02" title="Architecture Overview &amp; Observed Stack">
      <p>
        Based on observable surface area, the stack appears to follow a
        monolithic WordPress front-end combined with a custom SaaS
        application layer.
      </p>

      <div className="arch-diagram">
        <span className="comment">/* Inferred architecture — observed from public endpoints */</span>
        <br /><br />
        <span className="node">[ User / Scanner ]</span><br />
        <span className="arrow">│</span><br />
        <span className="arrow">▼</span><br />
        <span className="node">[ QR Code Redirect URL ]</span><br />
        <span className="gap-marker">⚠ GAP-01: No redirect signing / integrity check</span><br />
        <span className="arrow">│</span><br />
        <span className="arrow">▼</span><br />
        <span className="node">[ qrapp.terasystems.net ]</span><br />
        <span className="gap-marker">⚠ GAP-02: Single subdomain — no CDN observed</span><br />
        <span className="arrow">├──</span> <span className="node">Auth Layer</span><br />
        <span className="gap-marker">⚠ GAP-03: Cookie/session only, no MFA / SSO</span><br />
        <span className="arrow">├──</span> <span className="node">QR Generator</span> <span className="comment">(OK — well-scoped)</span><br />
        <span className="arrow">├──</span> <span className="node">Dynamic URL Store</span><br />
        <span className="gap-marker">⚠ GAP-04: No URL validation / allow-list</span><br />
        <span className="arrow">├──</span> <span className="node">Analytics Engine</span><br />
        <span className="gap-marker">⚠ GAP-05: Basic scan counters only</span><br />
        <span className="arrow">├──</span> <span className="node">Event Manager</span><br />
        <span className="gap-marker">⚠ GAP-06: No ticket/entry validation system</span><br />
        <span className="arrow">└──</span> <span className="node">Bio Link Pages</span> <span className="comment">(feature complete)</span><br />
        <span className="arrow">│</span><br />
        <span className="arrow">▼</span><br />
        <span className="node">[ Data Store ]</span><br />
        <span className="gap-marker">⚠ GAP-07: No multi-region / backup strategy visible</span><br />
        <span className="arrow">│</span><br />
        <span className="arrow">▼</span><br />
        <span className="node">[ WordPress CMS — terasystems.net ]</span> <span className="comment">(marketing site)</span>
      </div>

      <h3>Observed Technology Signals</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Observed / Inferred</th>
            <th>Concern</th>
          </tr>
        </thead>
        <tbody>
          {techStack.map((row) => (
            <tr key={row.layer}>
              <td>{row.layer}</td>
              <td>{row.observed}</td>
              <td>{row.concern}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  );
}
