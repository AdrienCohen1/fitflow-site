import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FitFlow Health - Weight Loss Support & Questions",
  description:
    "Get in touch with FitFlow's customer support team. Email support, FAQ resources, and expert help for your weight loss journey.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Get in Touch</h1>
      <p className="lead">
        Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to
        you soon.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Email Us</h3>
          <p>Send us an email and we&apos;ll respond within 24 hours</p>
          <a href="mailto:info@fitflowrx.com">info@fitflowrx.com</a>
        </div>
        <div className="card">
          <h3>FAQ</h3>
          <p>Find quick answers to common questions</p>
          <a href="/faq">Visit FAQ page</a>
        </div>
      </div>

      <section>
        <h2>Support Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
        <p>Sunday: Closed</p>
        <p className="legal-note">
          * Emails sent outside of business hours will be responded to on the next business day
        </p>
      </section>

      <section>
        <h2>Ready to start your journey?</h2>
        <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
          Get Started
        </a>
      </section>
    </div>
  );
}
