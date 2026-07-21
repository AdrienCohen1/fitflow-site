import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships & Collaborations | FitFlow Health",
  description:
    "Partner with FitFlow Health. Opportunities for healthcare providers, medical organizations, content creators, and health organizations.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Partner with FitFlow</h1>
      <p className="lead">Join us in making evidence-based weight loss accessible to everyone.</p>

      <div className="card-grid">
        <div className="card">
          <h3>Healthcare Providers</h3>
          <p>Collaborate with licensed physicians and nurse practitioners to expand weight loss care.</p>
          <ul>
            <li>Referral partnerships</li>
            <li>Co-branded programs</li>
            <li>Telehealth integration</li>
          </ul>
        </div>
        <div className="card">
          <h3>Content Creators</h3>
          <p>Share accurate, evidence-based weight loss information with your audience.</p>
          <ul>
            <li>Guest posting opportunities</li>
            <li>Medical review services</li>
            <li>Educational resources</li>
          </ul>
        </div>
        <div className="card">
          <h3>Health Organizations</h3>
          <p>Partner to provide comprehensive weight management solutions.</p>
          <ul>
            <li>Corporate wellness programs</li>
            <li>Research collaborations</li>
            <li>Community health initiatives</li>
          </ul>
        </div>
        <div className="card">
          <h3>Affiliates &amp; Influencers</h3>
          <p>Earn while helping your community achieve their health goals.</p>
          <ul>
            <li>Competitive commission structure</li>
            <li>Marketing support</li>
            <li>Dedicated partner portal</li>
          </ul>
        </div>
      </div>

      <section>
        <h2>Get in Touch</h2>
        <p>
          Interested in partnering? Email us at{" "}
          <a href="mailto:info@fitflowrx.com">info@fitflowrx.com</a> with details about your
          partnership idea, your organization, and what you have in mind.
        </p>
      </section>
    </div>
  );
}
