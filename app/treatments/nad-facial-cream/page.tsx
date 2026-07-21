import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "NAD+ Facial Cream - Cellular Anti-Aging Skincare | FitFlow",
  description:
    "Revolutionary NAD+ facial cream for cellular skin rejuvenation. Reduce fine lines, boost elasticity, and restore radiance with advanced anti-aging science.",
  alternates: { canonical: "/treatments/nad-facial-cream" },
};

export default function NadFacialCreamPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>NAD+ Facial Cream</h1>
      <p className="lead">Save $25 on your first order</p>
      <p className="price">$155</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        See if you qualify
      </a>
      <p className="legal-note">Discount auto-applied at checkout</p>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>Reduces fine lines and wrinkles with cellular energy</li>
          <li>Boosts NAD+ directly in skin cells</li>
          <li>Improves skin elasticity and firmness</li>
          <li>Free expedited shipping included</li>
          <li>24/7 ongoing support from our care team</li>
        </ul>
        <p className="legal-note">Compounded in the U.S.A · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste real answers from Lovable for: &quot;What makes NAD+ Facial Cream unique?&quot;,
          &quot;How do I use it?&quot;, and &quot;When will I see results?&quot;
        </TodoBanner>
      </section>
    </div>
  );
}
