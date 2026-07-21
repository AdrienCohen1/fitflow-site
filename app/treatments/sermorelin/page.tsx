import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "Sermorelin Injection for Anti-Aging | FitFlow",
  description:
    "Support natural HGH production with Sermorelin injections. From $101/month with free shipping. Personalized anti-aging care from licensed medical professionals.",
  alternates: { canonical: "/treatments/sermorelin" },
};

export default function SermorelinPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Sermorelin Injection</h1>
      <p className="lead">Save $25 on your first order</p>
      <p className="price">$175</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        See if you qualify
      </a>
      <p className="legal-note">Discount auto-applied at checkout</p>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>Sermorelin may support HGH production by mimicking growth hormone-releasing hormone</li>
          <li>Personalized care, guided by FitFlow&apos;s licensed medical experts</li>
          <li>5mL (10mg) vial and homekit included</li>
          <li>Free expedited shipping</li>
          <li>24/7 support from our dedicated care team</li>
        </ul>
        <p className="legal-note">Compounded in the U.S.A · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste real answers from Lovable for: &quot;How does Sermorelin differ from HGH?&quot;,
          &quot;What results can I expect?&quot;, &quot;Who is a good candidate for
          Sermorelin?&quot;, and &quot;How is Sermorelin administered?&quot;
        </TodoBanner>
      </section>
    </div>
  );
}
