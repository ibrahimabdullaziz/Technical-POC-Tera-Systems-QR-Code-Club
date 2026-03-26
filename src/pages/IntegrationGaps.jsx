import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function IntegrationGaps() {
  return (
    <SectionCard num="06" title="Integration &amp; API Gaps">
      <div className="gap-grid">
        <GapCard severity="high" title="API-01 — No Public REST API or Webhook System">
          <strong>Gap:</strong> There is no documented public API for creating/managing QR codes programmatically. This blocks the most important use cases for growth: bulk QR generation for e-commerce (product packaging), CRM sync, marketing automation workflows, and developer integrations.
          <br /><br />
          <pre>
{`# What a developer needs (currently missing)
POST /api/v1/qrcodes
Authorization: Bearer <api_key>
{
  "type": "dynamic_url",
  "target": "https://example.com/product/123",
  "label": "Product 123 packaging QR",
  "webhook_url": "https://myapp.com/qr-scan-events"
}`}
          </pre>
          <strong>Fix:</strong> Publish a RESTful API v1 with CRUD for QR codes, analytics read endpoints, and webhook registration. Issue API keys per account. Rate-limit by tier. Publish an OpenAPI 3.0 spec.
        </GapCard>

        <GapCard severity="medium" title="API-02 — No CRM or Marketing Automation Integration">
          <strong>Gap:</strong> Contact capture from digital business card scans has no path to CRM systems (HubSpot, Salesforce, Zoho). Leads captured via QR scans sit in the platform siloed, requiring manual export. This directly reduces the value proposition for B2B users.
          <br /><br />
          <strong>Fix:</strong> Native integrations with HubSpot and Mailchimp via OAuth. Zapier / Make (Integromat) connector as a lightweight alternative covering 5,000+ downstream apps.
        </GapCard>

        <GapCard severity="medium" title="API-03 — No Calendar Integration for Event Management">
          <strong>Gap:</strong> Events can be created and shared via QR, but there is no ICS export, Google Calendar sync, or Outlook invite capability. RSVPs collected on the platform aren&apos;t mirrored into organizers&apos; or attendees&apos; calendars automatically.
          <br /><br />
          <strong>Fix:</strong> Generate <span className="inline-code">.ics</span> files dynamically per event. Provide &quot;Add to Google Calendar&quot; / &quot;Add to Outlook&quot; buttons on event landing pages. Sync RSVP data to connected calendar systems via Google Calendar API.
        </GapCard>
      </div>
    </SectionCard>
  );
}
