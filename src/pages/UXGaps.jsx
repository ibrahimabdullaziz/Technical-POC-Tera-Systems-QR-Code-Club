import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function UXGaps() {
  return (
    <SectionCard num="07" title="Product &amp; UX Gaps">
      <div className="gap-grid">
        <GapCard severity="medium" title="UX-01 — No Team / Multi-User Collaboration">
          <strong>Gap:</strong> The platform appears to be single-user per account. Agencies managing QR codes for multiple clients, or companies where multiple staff manage different QR codes, have no role-based access control (RBAC). Anyone with the password has full access to everything.
          <br /><br />
          <strong>Fix:</strong> Introduce workspaces with Owner / Admin / Editor / Viewer roles. Support sub-accounts per client for agency use. This unlocks the enterprise tier pricing model.
        </GapCard>

        <GapCard severity="medium" title="UX-02 — No Bulk QR Generation">
          <strong>Gap:</strong> Creating 500 QR codes for a product catalog requires 500 manual form submissions. There is no CSV upload, batch import, or template-based bulk generation visible. This is a hard blocker for e-commerce and logistics use cases.
          <br /><br />
          <strong>Fix:</strong> Accept CSV input: each row defines a QR code (target URL, label, type). Generate and return a ZIP of QR images or a PDF sheet. This can be gated behind a Business/Enterprise plan.
        </GapCard>

        <GapCard severity="low" title="UX-03 — No White-Label / Custom Domain Support">
          <strong>Gap:</strong> All QR redirect URLs contain <span className="inline-code">qrapp.terasystems.net</span>. Agencies and enterprises cannot brand the redirect under their own domain (e.g., <span className="inline-code">go.mybrand.com/abc123</span>). This limits upsell potential and enterprise adoption.
          <br /><br />
          <strong>Fix:</strong> Allow custom domain mapping via CNAME records. Provide a wildcard SSL cert provisioning flow using Let&apos;s Encrypt / Caddy. Charge as a premium add-on.
        </GapCard>

        <GapCard severity="low" title="UX-04 — No Print-Ready Export Formats">
          <strong>Gap:</strong> QR code export options and resolutions aren&apos;t stated. Print-ready QR codes require SVG (infinitely scalable) or high-DPI PNG at minimum. CMYK PDF export is needed for professional print. Missing formats block print production workflows.
          <br /><br />
          <strong>Fix:</strong> Offer SVG export by default (vector, print-safe). Optional high-DPI PNG (600 DPI). Provide a print-sheet generator that places multiple codes on an A4/Letter PDF with registration marks.
        </GapCard>
      </div>
    </SectionCard>
  );
}
