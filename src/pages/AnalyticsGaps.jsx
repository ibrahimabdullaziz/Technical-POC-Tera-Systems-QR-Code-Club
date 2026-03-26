import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function AnalyticsGaps() {
  return (
    <SectionCard num="05" title="Analytics &amp; Data Gaps">
      <p>
        The platform advertises &quot;comprehensive monitoring&quot; but the stated
        metrics are scan count, location, and time. This is{' '}
        <em>operational telemetry</em>, not business intelligence. The
        following gaps prevent customers from making data-driven decisions.
      </p>

      <div className="gap-grid">
        <GapCard severity="high" title="ANALYTICS-01 — No Conversion Tracking Beyond the Scan">
          <strong>Gap:</strong> Knowing someone scanned a QR code is not knowing whether they completed a purchase, registered for an event, or saved a contact. The platform records the tap — not the outcome. This makes ROI measurement for QR-based campaigns impossible.
          <br /><br />
          <strong>Fix:</strong> Introduce a server-side event callback system. Allow customers to register a webhook that fires on QR scan. For internal pages (bio links, menus), add optional UTM parameter injection and goal events (button clicks, form submits). Integrate with Google Analytics 4 / Meta Pixel via configurable embedding.
        </GapCard>

        <GapCard severity="medium" title="ANALYTICS-02 — No A/B Testing for Dynamic QR Codes">
          <strong>Gap:</strong> Dynamic QR codes can point to any URL. The platform doesn&apos;t expose the ability to route X% of scans to URL A and Y% to URL B. This is a missed opportunity for marketing teams to test landing pages or promotional content.
          <br /><br />
          <strong>Fix:</strong> Implement weighted URL routing on dynamic QR codes. Provide a simple percentage split control in the dashboard with real-time performance comparison.
        </GapCard>

        <GapCard severity="medium" title="ANALYTICS-03 — No Real-Time Dashboard or Alerting">
          <strong>Gap:</strong> All analytics appear to be batch-reported. There is no mention of real-time dashboards or alerts (e.g., &quot;your QR code was scanned 500 times in the last 10 minutes&quot; or &quot;scan rate dropped to zero&quot;). Event promoters and product managers need live visibility.
          <br /><br />
          <strong>Fix:</strong> Add WebSocket-based real-time counters to the dashboard. Allow users to configure alert thresholds (e.g., &gt;X scans/hour, or no scans for Y days on a high-traffic code).
        </GapCard>

        <GapCard severity="medium" title="ANALYTICS-04 — No Bot / Crawler Scan Filtering">
          <strong>Gap:</strong> Link preview bots (iMessage, WhatsApp, Slack) and uptime monitoring tools regularly hit redirect URLs, inflating scan counts. Without user-agent filtering, customers may see misleading analytics that skew campaign performance metrics.
          <br /><br />
          <strong>Fix:</strong> Filter known bot user-agents from scan counters. Flag suspicious scan patterns (hundreds of scans from a single IP in milliseconds). Show a &quot;filtered vs raw&quot; scan count toggle in analytics.
        </GapCard>
      </div>
    </SectionCard>
  );
}
