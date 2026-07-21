import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "NAD+ Injection for Cellular Energy & Anti-Aging | FitFlow",
  description:
    "Support cellular energy and healthy aging with NAD+ injections. From $119/month with free shipping. Only $15 per shot. Personalized care from licensed providers.",
  alternates: { canonical: "/treatments/nad" },
};

export default function NadPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>NAD+ Injection</h1>
      <p className="lead">Save $25 on your first order</p>
      <p className="price">$165</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        See if you qualify
      </a>
      <p className="legal-note">Discount auto-applied at checkout</p>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>Helps power cellular energy production at the mitochondrial level, the powerhouse of your cells</li>
          <li>Only $15/shot*, homekit included</li>
          <li>Full-strength dosages of 500-1000mg per vial (200mg/mL)</li>
          <li>Free expedited shipping</li>
          <li>24/7 ongoing support from our care team</li>
        </ul>
        <p className="legal-note">Compounded in the U.S.A · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste real answers from Lovable for: &quot;What is NAD+ and why does it matter?&quot;,
          &quot;What are the potential benefits of NAD+ injections?&quot;, &quot;How often should
          I use NAD+ injections?&quot;, and &quot;Are there any side effects?&quot;
        </TodoBanner>
      </section>
    </div>
  );
}
