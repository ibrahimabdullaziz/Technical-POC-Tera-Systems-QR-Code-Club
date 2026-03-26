export const phase1 = [
  { id: 'SEC-01', action: 'Implement HMAC signing on dynamic QR redirect URLs', owner: 'Backend' },
  { id: 'SEC-02', action: 'Add TOTP-based MFA to account login', owner: 'Auth team' },
  { id: 'SEC-03', action: 'Add rate-limiting / lockout on PIN verification endpoint', owner: 'Backend' },
  { id: 'COMP-01', action: 'Implement IP anonymization in analytics + privacy notice on scan', owner: 'Backend + Legal' },
  { id: 'SEC-04', action: 'Deploy WAF (Cloudflare) in front of both domains', owner: 'DevOps' },
];

export const phase2 = [
  { id: 'SCALE-01', action: 'Move QR redirect pipeline to Cloudflare Workers (edge)', owner: 'DevOps' },
  { id: 'SCALE-02', action: 'Launch public status page; define SLA; implement fallback URL', owner: 'DevOps + PM' },
  { id: 'API-01', action: 'Build and publish REST API v1 with OpenAPI spec', owner: 'Backend' },
  { id: 'ANALYTICS-01', action: 'Add webhook-based scan event system', owner: 'Backend' },
  { id: 'SEC-05', action: 'Implement append-only audit log for QR mutations', owner: 'Backend' },
];

export const phase3 = [
  { id: 'UX-01', action: 'Multi-user workspaces + RBAC for agency / enterprise tier', owner: 'Full-stack' },
  { id: 'UX-02', action: 'Bulk QR generation via CSV upload', owner: 'Backend' },
  { id: 'API-02', action: 'HubSpot + Zapier integrations', owner: 'Integrations' },
  { id: 'UX-03', action: 'Custom domain / white-label support', owner: 'DevOps + Backend' },
  { id: 'COMP-03', action: 'GCC data residency deployment option', owner: 'Infra + Sales' },
];

export const techStack = [
  { layer: 'Frontend', observed: 'WordPress (terasystems.net), Custom app (qrapp.*)', concern: 'Two codebases to maintain; CMS attack surface' },
  { layer: 'Auth', observed: 'Cookie-based session, no visible OAuth / SSO', concern: 'No MFA, no enterprise SSO' },
  { layer: 'QR Redirect', observed: 'URL shortener-style redirect', concern: 'No URL signing, open redirect risk' },
  { layer: 'Analytics', observed: 'Scan count, location, time (stated)', concern: 'No real-time, no funnel, no conversion tracking' },
  { layer: 'Payments', observed: 'Checkout endpoint visible', concern: 'PCI scope unclear; no stated payment processor' },
  { layer: 'Infrastructure', observed: 'Single origin, Egypt-based', concern: 'Latency for global users; single point of failure' },
];
