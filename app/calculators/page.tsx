import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "GLP-1 Weight Loss Calculators | BMI, Cost & Dosage Tools",
  description:
    "Free interactive calculators for GLP-1 medications. Calculate your BMI, compare costs, predict weight loss results, and view dosing schedules for semaglutide and tirzepatide.",
  alternates: { canonical: "/calculators" },
};

export default function CalculatorsPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>GLP-1 Weight Loss Calculators</h1>
      <p className="lead">
        Free interactive tools to help you plan your weight loss journey with semaglutide or
        tirzepatide.
      </p>

      <TodoBanner>
        These calculators are static placeholders. The live site has working interactive tools
        (BMI calculator, cost comparison, weight loss predictor, dosage guide) built with
        client-side JavaScript — rebuilding those is a separate, larger task than this content
        migration.
      </TodoBanner>

      <div className="card-grid">
        <div className="card">
          <h3>BMI Calculator</h3>
          <p>Calculate your Body Mass Index and check GLP-1 medication eligibility.</p>
        </div>
        <div className="card">
          <h3>Cost Calculator</h3>
          <p>Compare costs between compounded and brand-name (Wegovy/Mounjaro) options.</p>
        </div>
        <div className="card">
          <h3>Weight Loss Predictor</h3>
          <p>Project your weight loss journey based on clinical trial data (~15% for semaglutide, ~20% for tirzepatide).</p>
        </div>
        <div className="card">
          <h3>Dosage Guide</h3>
          <p>Step-by-step dosing schedule for safe and effective treatment.</p>
        </div>
      </div>

      <section>
        <h2>Ready to Start Your Journey?</h2>
        <a className="cta-btn" href="/treatments/semaglutide">View Treatment Options</a>
      </section>
    </div>
  );
}
