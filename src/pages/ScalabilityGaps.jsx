import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function ScalabilityGaps() {
  return (
    <SectionCard num="04" title="Scalability &amp; Reliability Gaps">
      <div className="gap-grid">
        <GapCard severity="high" title="SCALE-01 — No CDN / Edge Network for QR Redirect Pipeline">
          <strong>Breakdown:</strong> QR code scanning is a latency-sensitive action. The redirect must resolve in &lt;200ms to be imperceptible. With a single origin server in Egypt, users in North America, Europe, or Southeast Asia will experience 400–800ms redirect latency — noticeable as a page-load delay after scanning.
          <br /><br />
          <pre>
{`# Current path (estimated latency from US East)
User (New York) → Origin (Cairo) → Redirect → Final URL
~450ms RTT  ←  well above UX threshold

# Target path with CDN edge
User (New York) → Edge (Ashburn) → Redirect → Final URL
~30ms RTT   ← imperceptible`}
          </pre>
          <strong>Fix:</strong> Route QR redirect resolution through a global edge network (Cloudflare Workers, AWS CloudFront + Lambda@Edge, or Fastly). Cache static QR metadata at the edge. Only hit origin for dynamic URL resolution on first request per code per region.
        </GapCard>

        <GapCard severity="high" title="SCALE-02 — No Stated SLA, Uptime Guarantee, or Failover">
          <strong>Breakdown:</strong> A QR code printed on 10,000 product packages, event tickets, or menus becomes worthless if the redirect service is down. No SLA, status page, or incident response page is visible.
          <br /><br />
          <strong>Breakdown scenario:</strong> A restaurant prints QR menus. The redirect server experiences an outage. Every table&apos;s QR code shows a browser error. The restaurant cannot revert to physical menus mid-service.
          <br /><br />
          <strong>Fix:</strong> Publish a public status page (statuspage.io). Define 99.9% SLA for redirect endpoints. Implement active-passive failover with health checks. Provide a &quot;fallback URL&quot; per QR code used if the platform is unreachable.
        </GapCard>

        <GapCard severity="medium" title="SCALE-03 — Analytics Write Storm on Viral QR Events">
          <strong>Breakdown:</strong> If a QR code goes viral (e.g., printed in a TV ad or at a stadium event), the analytics system receives thousands of concurrent scan events. Writing each scan synchronously to a relational database creates a write storm that can bring down both the analytics and the redirect service.
          <br /><br />
          <strong>Fix:</strong> Decouple scan ingestion from analytics persistence. Write scan events to a message queue (Kafka, SQS, or Redis Streams). Process asynchronously in a separate analytics consumer. Apply debounced aggregation for high-frequency codes.
        </GapCard>
      </div>
    </SectionCard>
  );
}
