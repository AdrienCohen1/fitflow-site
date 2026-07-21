export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="container">
          <h1>
            Prescription Weight Loss
            <span className="accent">Tirzepatide &amp; Semaglutide</span>
          </h1>
          <p className="lead">
            Science-backed weight loss solutions. No hidden fees. 100% online.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 14, color: "#4a5259" }}>
            <span>🛡️ Licensed &amp; regulated</span>
            <span>🕐 100% online</span>
            <span>💚 Personalized support</span>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "none" }}>
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <div className="card">
              <img
                src="/Tirz%20Syringe%20Green.png"
                alt="Compounded Tirzepatide vial"
                style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
              <div className="card-body">
                <h3>Compounded Tirzepatide</h3>
                <p className="as-low-as">as low as</p>
                <p className="price">$134 per month</p>
                <div className="card-actions">
                  <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">Get Started</a>
                  <a className="cta-btn-outline" href="/treatments/tirzepatide">Learn More</a>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="/Sem%20Syringe%20Blue.png"
                alt="Compounded Semaglutide vial"
                style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
              <div className="card-body">
                <h3>Compounded Semaglutide</h3>
                <p className="as-low-as">as low as</p>
                <p className="price">$99 per month</p>
                <div className="card-actions">
                  <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">Get Started</a>
                  <a className="cta-btn-outline" href="/treatments/semaglutide">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="promo-bar">
        <div className="container" style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          <span>💚 Personalized support</span>
          <span>✅ 100% entirely online</span>
          <span>🛡️ FSA &amp; HSA eligible</span>
          <span>🚚 Free &amp; discreet shipping</span>
        </div>
      </div>

      <section>
        <div className="container">
          <h2>Other Treatments</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-body">
                <h3>Sermorelin</h3>
                <p style={{ color: "#78828c", fontSize: 14 }}>For muscle support</p>
                <p className="price">from $175/mo</p>
                <a href="/treatments/sermorelin">Learn more →</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>NAD+</h3>
                <p style={{ color: "#78828c", fontSize: 14 }}>For energy and longevity</p>
                <p className="price">from $165/mo</p>
                <a href="/treatments/nad">Learn more →</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>MIC+B12</h3>
                <p style={{ color: "#78828c", fontSize: 14 }}>For mood and energy</p>
                <p className="price">from $95/mo</p>
                <a href="/treatments/mic-b12">Learn more →</a>
              </div>
            </div>
          </div>
          <p className="legal-note" style={{ textAlign: "center" }}>
            6,969 members · Free expedited shipping · FSA &amp; HSA eligible
          </p>
        </div>
      </section>
    </>
  );
}
