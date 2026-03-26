import SectionCard from '../components/SectionCard';
import GapCard from '../components/GapCard';

export default function SecurityGaps() {
  return (
    <SectionCard num="03" title="Security Gaps">
      <div className="gap-grid">
        <GapCard severity="critical" title="SEC-01 — Open Redirect / QR Hijacking via Unsigned Dynamic URLs">
          <strong>Breakdown:</strong> Dynamic QR codes resolve to a stored URL in the database. If this URL is modifiable without server-side signing or validation, an attacker who compromises an account (or exploits an IDOR) can silently redirect all scans to a phishing or malware URL — affecting every person who scans the code.
          <br /><br />
          <strong>Proof of Concept:</strong>
          <pre>
{`# Attacker modifies dynamic QR target via a standard update call
PATCH /api/qrcodes/{id}/target
Content-Type: application/json
Authorization: Bearer <stolen_token>

{
  "target_url": "https://attacker.com/phish"  // No URL allow-list or signing check
}

# All future scans of the printed QR code → attacker domain
# User has NO indication the QR was modified`}
          </pre>
          <strong>Fix:</strong> Implement HMAC-signed redirect tokens. Validate destination URLs against a configurable allow-list. Log all target URL changes with immutable audit records.
        </GapCard>

        <GapCard severity="critical" title="SEC-02 — No Multi-Factor Authentication">
          <strong>Breakdown:</strong> The platform offers QR codes that serve as a business&apos;s entire digital identity (business card, company profile, event attendee list). Account takeover via credential stuffing will grant an attacker full control with zero additional friction — no MFA, no login anomaly detection is visible.
          <br /><br />
          <strong>Impact:</strong> A business whose QR code has been silently redirected to a phishing site may not discover the breach until customer complaints arrive — with reputational and legal consequences.
          <br /><br />
          <strong>Fix:</strong> Implement TOTP-based MFA as a minimum. Add rate-limiting and geo-anomaly alerts on login. Provide passkey / WebAuthn support for enterprise users.
        </GapCard>

        <GapCard severity="critical" title="SEC-03 — PIN-Only Access Control for Business Cards / Events">
          <strong>Breakdown:</strong> The sole described access-control mechanism for protecting sensitive QR codes is a PIN code. PINs are typically 4–6 digits (max 10<sup>6</sup> combinations), have no brute-force lockout on the client scan side, and offer no session management. This is insufficient for protecting contact databases or event attendee lists.
          <br /><br />
          <pre>
{`# Brute-force POC (no lockout)
for pin in range(0000, 9999):
    r = requests.post("/api/qr/unlock", json={"pin": f"{pin:04d}"})
    if r.status_code == 200:
        print(f"PIN found: {pin}")
        break`}
          </pre>
          <strong>Fix:</strong> Add exponential backoff + IP lockout after 5 failed PIN attempts. Replace PIN with time-limited access tokens for high-sensitivity cards. Require re-authentication for accessing contact capture forms.
        </GapCard>

        <GapCard severity="critical" title="SEC-04 — WordPress CMS Attack Surface on Marketing + App Subdomain">
          <strong>Breakdown:</strong> The marketing site runs on WordPress, which accounts for the majority of CMS-related CVEs published annually. Without a WAF, auto-updates, and plugin audit processes, this site becomes a pivot point. If the marketing domain shares origin infrastructure with the app, a compromise can cross-contaminate session cookies.
          <br /><br />
          <strong>Fix:</strong> Enforce strict domain separation between <span className="inline-code">terasystems.net</span> and <span className="inline-code">qrapp.terasystems.net</span>. Use a WAF (Cloudflare, AWS WAF). Enforce <span className="inline-code">SameSite=Strict</span> and <span className="inline-code">__Host-</span> prefixed cookies on the app subdomain.
        </GapCard>

        <GapCard severity="high" title="SEC-05 — No Audit Logging or Change History">
          <strong>Breakdown:</strong> No mention of audit logs for QR code modifications, target URL changes, or admin actions. For compliance and forensics, immutable logs are essential. A business cannot investigate a QR hijacking incident if no change history exists.
          <br /><br />
          <strong>Fix:</strong> Implement append-only event log (who changed what, when, from which IP) for all QR code mutations. Expose a log view to account owners. Archive to S3/GCS with 90-day retention minimum.
        </GapCard>

        <GapCard severity="high" title="SEC-06 — No Content Security Policy or XSS Protection on Bio Link Pages">
          <strong>Breakdown:</strong> Bio link pages are user-generated public HTML pages. Without a strict Content Security Policy (CSP) and output encoding, stored XSS is possible if user inputs are rendered unescaped — allowing attackers to inject scripts that steal cookies of anyone visiting a bio link.
          <br /><br />
          <strong>Fix:</strong> Enforce strict CSP headers on all user-generated pages. Sanitize all user content server-side using an allowlist approach. Implement sub-resource integrity on third-party scripts.
        </GapCard>
      </div>
    </SectionCard>
  );
}
