import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="trust-bar">
        No hidden fees &nbsp;·&nbsp; Unlimited 24/7 support &nbsp;·&nbsp; 5,000+ members &nbsp;·&nbsp; 100% online &nbsp;·&nbsp; FDA regulated pharmacies
      </div>
      <header className="site-header">
        <div className="row">
          <Link href="/" className="logo">FitFlow</Link>
          <nav className="main-nav">
            <ul>
              <li><Link href="/">Weight Loss</Link></li>
            </ul>
          </nav>
          <a className="cta-btn" href="https://go.fitflowrx.com/start-online-visit/newweightlossintake">
            Get Started
          </a>
        </div>
      </header>
    </>
  );
}
