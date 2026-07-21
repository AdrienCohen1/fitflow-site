import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "Glutathione Treatment - Master Antioxidant | FitFlow",
  description:
    "Experience the power of glutathione for anti-aging, skin brightening, and cellular health. Get pharmaceutical-grade treatment delivered to your door.",
  alternates: { canonical: "/treatments/glutathione" },
};

export default function GlutathionePage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Glutathione</h1>
      <p className="lead">Save $25 on your first order</p>
      <p className="price">from $110/mo</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        See if you qualify
      </a>
      <p className="legal-note">Discount auto-applied at checkout</p>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>Powerful antioxidant protection at the cellular level</li>
          <li>Brightens and evens skin tone naturally</li>
          <li>Supports immune function and detoxification</li>
          <li>Free expedited shipping included</li>
          <li>24/7 ongoing support from our care team</li>
        </ul>
        <p className="legal-note">Compounded in the U.S.A · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste real answers from Lovable for: &quot;What is Glutathione?&quot;, &quot;How is it
          administered?&quot;, and &quot;When will I see results?&quot;
        </TodoBanner>
      </section>
    </div>
  );
}
