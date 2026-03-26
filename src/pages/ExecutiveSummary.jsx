import SectionCard from '../components/SectionCard';

export default function ExecutiveSummary() {
  return (
    <SectionCard num="01" title="Executive Summary">
      <p>
        Tera Systems operates <strong>QRCodeClub</strong>, a SaaS platform
        offering QR code generation, dynamic code management, bio-link
        pages, digital business cards, company profiles, and event
        management. The platform targets SMBs and individual creators,
        offering over 33 QR code types with analytics and PIN-based
        protection.
      </p>
      <p>
        This POC was produced by analyzing the public-facing product,
        application endpoints (<span className="inline-code">qrapp.terasystems.net</span>),
        marketing materials, and stated feature sets. The goal is to
        surface structural and technical gaps that either already cause
        system breakdowns or will become critical as the platform scales.
      </p>
      <p>
        The analysis identified <strong>22 gaps</strong> across security,
        scalability, analytics, integration, UX, and compliance
        dimensions. Four of these are classified as
        <strong> critical</strong> — meaning they can currently be
        exploited or cause data loss / service failure with no mitigation
        in place.
      </p>
      <div className="rec-box">
        <strong>Key finding:</strong> The platform&apos;s QR redirect pipeline,
        authentication layer, and event management subsystem each contain
        critical architectural deficiencies that pose immediate risk to
        user trust and business continuity.
      </div>
    </SectionCard>
  );
}
