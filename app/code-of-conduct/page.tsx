import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Code of Conduct | FitFlow Health",
  description: "Code of Conduct for healthcare providers on the FitFlow Health platform.",
  alternates: { canonical: "/code-of-conduct" },
};

export default function CodeOfConductPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 800 }}>
      <h1>Provider Code of Conduct</h1>

      <h2>Introduction</h2>
      <p>
        The FitFlow Health mission is dedicated to enhancing healthcare accessibility and
        transforming how individuals engage with the medical system for weight management and
        metabolic health. This document outlines the universal code of conduct for healthcare
        providers utilizing the FitFlow platform, aiming to align the principles of FitFlow
        Health with the medical professionals on our platform. This Code of Conduct is dynamic,
        evolving with provider feedback to ensure the delivery of premium care to patients.
      </p>

      <h2>Best Practices on the Platform</h2>
      <ul>
        <li><strong>Be Patient:</strong> Telemedicine may be unfamiliar to many patients. Address their questions, no matter how straightforward they may seem, with sensitivity and guide them toward the most effective treatment path.</li>
        <li><strong>Always Explain:</strong> Provide comprehensive explanations for your treatment decisions, ensuring patients understand your medical guidance, whether or not it involves prescribing medication.</li>
        <li><strong>Follow Up:</strong> The FitFlow platform automates patient follow-ups post-treatment plan at regular intervals. For patients requiring closer monitoring, utilize the platform&apos;s messaging system for scheduled follow-ups or contact the FitFlow Medical Operations Team for assistance.</li>
        <li><strong>Document:</strong> Maintain detailed records of your clinical decisions, especially if system alerts indicate potential contraindications or risks. Documenting additional information obtained through direct communication with patients is crucial.</li>
        <li><strong>Check-in:</strong> Top-rated providers check their messages daily. Notify the FitFlow Medical Operations Team in advance if you expect to be unavailable for over 48 hours to ensure continuous patient support.</li>
      </ul>

      <h2>Conduct Expectations on the Platform</h2>
      <ul>
        <li><strong>Verify Identity:</strong> Confirm patient identity through government ID and photo verification, supported by automated software checks. Ensure personal information provided matches the government ID.</li>
        <li><strong>Follow State Protocols:</strong> Adhere to state-specific guidelines to establish a legitimate patient-physician relationship before offering medical advice or treatment. When uncertain, consult the FitFlow Medical Operations team or FitFlow&apos;s legal counsel.</li>
        <li><strong>Prioritize Responsiveness:</strong> Address patient consultations in a timely manner to maintain prompt service delivery and patient satisfaction.</li>
        <li><strong>One at a Time:</strong> Engage with one patient consultation at a time, ensuring your full attention to each case. Avoid intervening in ongoing treatments by other providers unless a second opinion is requested.</li>
      </ul>

      <h2>Safety, Security &amp; Privacy</h2>
      <ul>
        <li><strong>Drug Interactions:</strong> Vigilantly review patient medications for potential drug interactions. Consult with FitFlow&apos;s clinical directors through the Medical Operations team for guidance on complex drug interactions.</li>
        <li><strong>When in Doubt, Don&apos;t:</strong> Exercise caution in prescribing medications. Opt for consultations or refer patients to their primary physician if uncertain about treatment safety.</li>
        <li><strong>Address Underlying Concerns:</strong> Pay attention to both physical and mental health concerns. Follow appropriate protocols for handling medical emergencies or concerning patient behaviors.</li>
        <li><strong>Review Protocols Regularly:</strong> Consistently consult condition-specific provider protocols for guidelines on safe practices and make medical decisions based on the standard of care.</li>
        <li><strong>Never Share:</strong> Keep your FitFlow provider credentials confidential. Do not disclose patient information outside of required FitFlow operations.</li>
        <li><strong>Secure PHI:</strong> Ensure all patient information is shared through HIPAA-compliant channels. Avoid platform usage in public settings where protected health information could be exposed.</li>
      </ul>

      <h2>Ethical Expectations for Platform Providers</h2>
      <p>FitFlow-affiliated healthcare providers are held to the highest ethical standards of the medical profession:</p>
      <ul>
        <li><strong>Do No Harm:</strong> Prioritize patient safety above all. Treatment decisions should not be influenced by the prospect of compensation.</li>
        <li><strong>No Self-Referral:</strong> Direct patients needing additional services or referrals to their primary healthcare provider or an external physician, not to your private practice.</li>
        <li><strong>Sound Body &amp; Sound Mind:</strong> Abstain from practicing medicine on the platform while under the influence of substances that could impair judgment.</li>
        <li><strong>Keep FitFlow Informed:</strong> Promptly inform the FitFlow Medical Operations Team of any professional disciplinary actions or changes in your medical licensure status.</li>
      </ul>

      <h2>Commitment to Excellence</h2>
      <p>
        Thank you for your commitment to providing exceptional care through FitFlow Health.
        Together, we&apos;re making quality healthcare more accessible and transforming lives
        through evidence-based weight management solutions.
      </p>

      <h2>Contact</h2>
      <p>
        For questions or concerns regarding this Code of Conduct, please contact the FitFlow
        Medical Operations Team through our <a href="/contact">contact page</a>.
      </p>
    </div>
  );
}
