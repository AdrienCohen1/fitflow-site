import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "Compounded Tirzepatide $134/Month - Same as Mounjaro",
  description:
    "Compounded tirzepatide starting at $134/month. Identical active ingredient to Mounjaro. Advanced dual GIP/GLP-1 technology, up to 22% weight reduction. Complimentary shipping.",
  alternates: { canonical: "/treatments/tirzepatide" },
  openGraph: { type: "website" },
};

export default function TirzepatidePage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Compounded Tirzepatide</h1>
      <p className="lead">Same active ingredient in Mounjaro®</p>
      <p className="price">$134/mo</p>
      <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
        Get Started
      </a>

      <section>
        <h2>Pricing</h2>
        <div className="card-grid">
          <div className="card"><h3>Monthly</h3><p>Billed monthly</p><p className="price">$235</p></div>
          <div className="card"><h3>Quarterly</h3><p>Billed every 3 months ($199/mo)</p><p className="price">$597</p></div>
          <div className="card"><h3>6 Months (Popular)</h3><p>Billed every 6 months ($175/mo)</p><p className="price">$1,050</p></div>
          <div className="card"><h3>Annual</h3><p>Billed yearly ($134/mo)</p><p className="price">$1,608</p></div>
        </div>
        <p className="legal-note">Compounded in the U.S.A. · FSA &amp; HSA Eligible</p>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <TodoBanner>
          Paste the real accordion copy from Lovable for: &quot;What&apos;s included with my
          plan?&quot;, &quot;What weight loss treatment options are available to me?&quot;,
          &quot;What if I need to cancel?&quot;, &quot;How does Tirzepatide work for weight
          loss?&quot;, and &quot;What are the side effects of Tirzepatide?&quot;. This content
          wasn&apos;t retrievable from the live site (it only renders client-side), and it
          shouldn&apos;t be guessed for a regulated medical product.
        </TodoBanner>
      </section>

      <p className="legal-note">
        The statements on this page have not been evaluated by the Food and Drug Administration.
        This product is not intended to diagnose, treat, cure or prevent any disease.
        <br />
        *Price shown applies to compounded GLP-1 12-Month plan paid upfront or with buy now, pay
        later programs. Actual price will depend on product and plan prescribed.
        <br />
        **The FDA does not review or approve any compounded medications for safety or
        effectiveness.
      </p>
    </div>
  );
}
