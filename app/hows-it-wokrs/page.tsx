import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How FitFlow Works - Online Weight Loss Process in 4 Steps",
  description:
    "Simple 4-step process: Complete online visit, provider review, receive medication, get ongoing support. 100% online weight loss care.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    step: "STEP 01",
    title: "Complete Your Online Visit",
    body: "Take 5-10 minutes to complete a comprehensive health questionnaire from anywhere, at any time. Tell us about your medical history, current medications, and weight loss goals.",
    points: [
      "Quick 5-10 minute questionnaire",
      "Available 24/7 from any device",
      "Secure and HIPAA-compliant",
      "No office visits needed",
    ],
  },
  {
    step: "STEP 02",
    title: "Provider Review & Approval",
    body: "A board-certified medical provider reviews your information within 24-48 hours. If approved, they'll create a personalized treatment plan tailored to your needs.",
    points: [
      "Board-certified providers",
      "Review within 24-48 hours",
      "Personalized treatment plans",
      "Direct messaging with your provider",
    ],
  },
  {
    step: "STEP 03",
    title: "Receive Your Medication",
    body: "Your prescription is fulfilled and shipped directly to your door with free shipping. All medications are compounded in US-licensed pharmacies.",
    points: [
      "Free nationwide shipping",
      "Discreet packaging",
      "Licensed US pharmacies",
      "Arrives within 5-7 business days",
    ],
  },
  {
    step: "STEP 04",
    title: "Ongoing Support & Monitoring",
    body: "Get continuous care with unlimited messaging to your provider, regular check-ins, and dosage adjustments as needed to optimize your results.",
    points: [
      "Unlimited provider messaging",
      "Regular progress check-ins",
      "Dosage adjustments as needed",
      "Educational resources & tips",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>How FitFlow Works</h1>
      <p className="lead">
        Your personalized weight loss journey starts here. Simple, effective, and 100% online.
      </p>

      {steps.map((s) => (
        <section key={s.step}>
          <p className="legal-note">{s.step}</p>
          <h2>{s.title}</h2>
          <p>{s.body}</p>
          <ul>
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2>What to Expect</h2>
        <div className="card-grid">
          <div className="card"><h3>Week 1-2</h3><p><strong>Getting Started</strong> — Begin your treatment, adjust to the medication, and establish new routines.</p></div>
          <div className="card"><h3>Month 1-2</h3><p><strong>Early Progress</strong> — Notice reduced appetite and food cravings. Initial weight loss becomes visible.</p></div>
          <div className="card"><h3>Month 3-6</h3><p><strong>Significant Results</strong> — Experience consistent weight loss and improved energy levels.</p></div>
          <div className="card"><h3>Month 6+</h3><p><strong>Maintenance</strong> — Achieve your goals and maintain your healthy new weight long-term.</p></div>
        </div>
      </section>
    </div>
  );
}
