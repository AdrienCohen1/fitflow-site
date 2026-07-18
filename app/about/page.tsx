import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FitFlow Health - Prescription Weight Loss Treatments Online",
  description:
    "Learn about FitFlow's mission to make prescription weight loss accessible. Board-certified providers, prescription medications, 100% online care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>About FitFlow</h1>
      <p className="lead">
        We&apos;re on a mission to make effective weight loss accessible, affordable, and
        personalized for everyone.
      </p>

      <section>
        <h2>Our Mission</h2>
        <p>
          At FitFlow, we believe everyone deserves access to proven weight loss solutions without
          the barriers of traditional healthcare. We combine cutting-edge medical science with
          compassionate care to help you achieve lasting results.
        </p>
        <div className="card-grid">
          <div className="card"><h3>Safe &amp; Regulated</h3><p>Prescription medications prescribed by board-certified providers</p></div>
          <div className="card"><h3>Evidence-Based</h3><p>Clinically proven treatments backed by extensive research</p></div>
          <div className="card"><h3>Personalized Care</h3><p>Tailored treatment plans designed for your unique needs</p></div>
        </div>
      </section>

      <section>
        <h2>The Science Behind Our Treatments</h2>
        <h3>What are GLP-1 Medications?</h3>
        <p>
          GLP-1 (Glucagon-Like Peptide-1) receptor agonists are medications that mimic a natural
          hormone in your body that helps regulate appetite and blood sugar. These medications
          have been extensively studied and proven effective for weight loss. Originally
          developed for type 2 diabetes, GLP-1 medications have shown remarkable effectiveness for
          weight management and obesity treatment.
        </p>
        <div className="card-grid">
          <div className="card">
            <h3>How They Work</h3>
            <ul>
              <li>Reduce appetite and food cravings</li>
              <li>Increase feelings of fullness</li>
              <li>Slow gastric emptying</li>
              <li>Improve blood sugar control</li>
              <li>Support metabolic health</li>
            </ul>
          </div>
          <div className="card">
            <h3>Clinical Evidence</h3>
            <ul>
              <li>15-22% average body weight loss</li>
              <li>Proven in multiple clinical trials</li>
              <li>Thousands of patients studied</li>
              <li>Long-term safety data available</li>
              <li>Clinically proven active ingredients</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Why Choose FitFlow?</h2>
        <div className="card-grid">
          <div className="card"><h3>100% Online</h3><p>No office visits, no waiting rooms. Complete everything from the comfort of your home on your schedule.</p></div>
          <div className="card"><h3>Transparent Pricing</h3><p>Know exactly what you&apos;ll pay upfront. No hidden fees, no surprises, no insurance hassles.</p></div>
          <div className="card"><h3>Board-Certified Providers</h3><p>Your care is managed by licensed medical professionals with expertise in weight management.</p></div>
          <div className="card"><h3>Ongoing Support</h3><p>Unlimited messaging with your provider, regular check-ins, and continuous care throughout your journey.</p></div>
          <div className="card"><h3>Fast &amp; Discreet</h3><p>Medication ships directly to your door in discreet packaging with free nationwide shipping.</p></div>
          <div className="card"><h3>Quality Medications</h3><p>All medications are compounded in US-licensed pharmacies following strict safety standards.</p></div>
        </div>
      </section>

      <section>
        <div className="card-grid">
          <div className="card"><p className="price">10,000+</p><p>Patients Served</p></div>
          <div className="card"><p className="price">95%</p><p>Satisfaction Rate</p></div>
          <div className="card"><p className="price">24-48h</p><p>Provider Review Time</p></div>
          <div className="card"><p className="price">100%</p><p>Online Process</p></div>
        </div>
      </section>
    </div>
  );
}
