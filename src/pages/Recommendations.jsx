import SectionCard from '../components/SectionCard';
import RecommendationTable from '../components/RecommendationTable';
import { phase1, phase2, phase3 } from '../data/gapsData';

export default function Recommendations() {
  return (
    <SectionCard num="09" title="Recommendations Roadmap">
      <p>
        Gaps are grouped into three delivery phases based on severity
        and business impact.
      </p>

      <RecommendationTable
        title="Phase 1 — Immediate: Fix Critical & Existential Risks"
        rows={phase1}
      />

      <RecommendationTable
        title="Phase 2 — Short-Term: Reliability & Core Product"
        rows={phase2}
      />

      <RecommendationTable
        title="Phase 3 — Strategic: Differentiation & Growth"
        rows={phase3}
      />

      <div className="rec-box rec-box-margin-top">
        <strong>Priority Note:</strong> Phase 1 items are not optional
        enhancements — they are risk remediation. Shipping Phase 1 as soon as possible protects the platform from a QR hijacking incident
        that would be catastrophic to brand trust and potentially
        constitute a GDPR-notifiable breach.
      </div>
    </SectionCard>
  );
}
