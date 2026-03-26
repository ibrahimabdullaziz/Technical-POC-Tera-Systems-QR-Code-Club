import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function ComplianceGaps() {
  return (
    <SectionCard num="08" title="Compliance &amp; Data Governance Gaps">
      <div className="gap-grid">
        <GapCard severity="critical" title="COMP-01 — No GDPR / PDPL Compliance Infrastructure Visible">
          <strong>Breakdown:</strong> The platform collects scan analytics (IP address, location, device type, time) from every person who scans a QR code — including EU and KSA residents. Under GDPR and the Saudi Personal Data Protection Law (PDPL), scan events from these users constitute personal data collection that requires:
          <ul className="plain">
            <li>A lawful processing basis</li>
            <li>Privacy notice at point of scan</li>
            <li>Data subject access / deletion mechanisms</li>
            <li>Data Processing Agreements with B2B customers</li>
          </ul>
          <br />
          <strong>Risk:</strong> Fines up to 4% of global annual turnover (GDPR) or SAR 5M (PDPL). The platform&apos;s B2B customers become joint data controllers and inherit this liability.
          <br /><br />
          <strong>Fix:</strong> Appoint a DPO. Draft a DPA template for B2B customers. Implement a scan-event consent banner option for EU-targeting QR codes. Offer IP anonymization in analytics settings. Define and publish data retention periods.
        </GapCard>

        <GapCard severity="high" title="COMP-02 — PCI DSS Scope Unclear for Checkout Flow">
          <strong>Gap:</strong> A checkout endpoint (<span className="inline-code">qrapp.terasystems.net/checkout</span>) exists for plan purchases. It is unclear whether card data is handled server-side or delegated to a compliant processor. If any cardholder data transits or is stored on the application server, PCI DSS compliance obligations apply and may not be met.
          <br /><br />
          <strong>Fix:</strong> Use a PCI-compliant payment processor (Stripe, PayTabs for MENA region) in &quot;redirect&quot; or &quot;hosted fields&quot; mode so no card data touches the application server. Clearly document the PCI SAQ scope.
        </GapCard>

        <GapCard severity="medium" title="COMP-03 — No Data Residency Controls">
          <strong>Gap:</strong> Enterprise customers in regulated sectors (healthcare, finance, government) in Gulf states have data residency requirements — data must stay within national borders. No data residency options are stated, which blocks enterprise sales in these verticals.
          <br /><br />
          <strong>Fix:</strong> Partner with a local cloud provider (STC Cloud, Alibaba Cloud UAE, Oracle UAE Region). Offer a &quot;GCC data residency&quot; plan for Enterprise tier. Document data flows for all components.
        </GapCard>
      </div>
    </SectionCard>
  );
}
