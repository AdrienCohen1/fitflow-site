import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "MIC+B12 Injection for Weight Loss & Energy | FitFlow",
  description:
    "Boost energy, improve mood, and support weight loss with MIC+B12 injections. Starting at $73/month with free shipping. Personalized care from licensed providers.",
  alternates: { canonical: "/treatments/mic-b12" },
};

export default function MicB12Page() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>MIC+B12 Injection</h1>
      <p className="lead">Save $25 on your first order</p>
      <p className="price">$95</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        See if you qualify
      </a>
      <p className="legal-note">Discount auto-applied at checkout</p>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>Lipotropic injection that improves energy, mood and can promote weight loss</li>
          <li>Personalized energy + mood from FitFlow&apos;s licensed medical professionals</li>
          <li>No membership fees. Same price at every dose</li>
          <li>Free expedited shipping included</li>
          <li>24/7 ongoing support from our care team</li>
        </ul>
        <p className="legal-note">Compounded in the U.S.A · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste real answers from Lovable for: &quot;What is the difference between
          Methylcobalamin and cyanocobalamin?&quot;, &quot;How often should I take MIC+B12
          injections?&quot;, &quot;Are there any side effects?&quot;, and &quot;Can I use MIC+B12
          with other weight loss treatments?&quot;
        </TodoBanner>
      </section>
    </div>
  );
}
