import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FitFlow Health",
  description: "Terms of Service for FitFlow Health.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 800 }}>
      <h1>Terms of Service</h1>

      <h2>Introduction</h2>
      <p>
        This Terms of Service is a contract between you (&quot;You&quot;, &quot;your&quot;) and
        FitFlow Health (&quot;FitFlow,&quot; &quot;we,&quot; &quot;us&quot;) and our affiliates.
        These terms and conditions (together with our Privacy Policy and Code of Conduct, the
        &quot;Terms of Service&quot; or &quot;Terms&quot;) govern your access to and use of the
        Website and any related documentation, software, application, content, functionality,
        and products (collectively, the &quot;Service(s)&quot;).
      </p>
      <p>
        Please read the Terms of Service carefully before you access or use our Services. By
        accessing our Website or using our Services, you accept and agree to be bound by these
        Terms.
      </p>
      <p>
        <strong>
          THIS AGREEMENT INCLUDES A MANDATORY ARBITRATION CLAUSE AND WAIVER OF CLASS ACTION
          RIGHTS.
        </strong>
      </p>

      <h2>Eligibility</h2>
      <p>To qualify to use the Services, the following must be true:</p>
      <ul>
        <li>You are age 18 or over</li>
        <li>You are located in a state where we operate</li>
        <li>You agree to be legally bound by these Terms</li>
      </ul>
      <p>
        Satisfying these requirements does not guarantee you will receive Services through
        FitFlow. We reserve the right to change or include new requirements as deemed
        appropriate.
      </p>

      <h2>Requirements for Use</h2>
      <p>
        You must have compatible computing and/or mobile devices, access to the Internet, and
        certain necessary software to use the Services. Fees and charges may apply to your use of
        mobile services and the Internet.
      </p>

      <h2>Consent to Telehealth Services</h2>
      <p>
        Telemedicine involves the delivery of healthcare services using electronic communications
        between a healthcare provider and a patient who are not in the same physical location.
        Telemedicine may include:
      </p>
      <ul>
        <li>Electronic transmission of medical records, images, and health information</li>
        <li>Interactions via audio, video, and/or data communications</li>
        <li>Use of output data from medical devices</li>
      </ul>
      <p>
        The electronic systems used incorporate security protocols to protect the privacy and
        security of health information.
      </p>

      <h2>Privacy Policy</h2>
      <p>
        FitFlow understands the importance of confidentiality and privacy regarding your health
        information. Please see our <a href="/privacy-policy">Privacy Policy</a> for details on
        how we collect and use your personal information.
      </p>

      <h2>Your Relationship with FitFlow</h2>
      <p>
        FitFlow provides a technology platform for you to access licensed healthcare providers
        and obtain health information. The healthcare resources made available through our
        Services are not a substitute for direct in-person healthcare services in all cases. The
        decision regarding diagnosis and treatment rests with you and the healthcare provider.
      </p>
      <p>
        By using the Services, you consent to receiving disclosures, notices, messages, and other
        communications from FitFlow and healthcare providers. It is your responsibility to
        monitor these communications.
      </p>

      <h2>Communications by Text and Email</h2>
      <p>
        By opting-in to receive text messages from FitFlow, you consent to receiving messages
        regarding your account, order confirmations, shipping notifications, and provider
        communications. You understand that:
      </p>
      <ul>
        <li>You are the authorized user of the mobile device</li>
        <li>You are responsible for messaging and data charges</li>
        <li>Messages may not be encrypted</li>
      </ul>
      <p>You can opt-out at any time by texting &quot;STOP&quot; to any message received.</p>

      <h2>Registration and User Accounts</h2>
      <p>
        You must register with FitFlow to access the Services. You agree to provide accurate,
        complete, and current information. You are responsible for:
      </p>
      <ul>
        <li>Maintaining the confidentiality of your username and password</li>
        <li>All activities that occur under your account</li>
        <li>Immediately notifying us of any unauthorized use</li>
      </ul>

      <h2>Prohibited Use</h2>
      <p>You agree that you will not:</p>
      <ul>
        <li>Impersonate any person or entity</li>
        <li>Use the Services to violate any law</li>
        <li>Reverse engineer or disassemble any software</li>
        <li>Distribute harmful computer code</li>
        <li>Access the Services in a manner that infringes on others&apos; rights</li>
        <li>Use the Services to create competing products</li>
        <li>Interfere with or harm the Services</li>
        <li>Bypass security measures</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content, features, and functionality of the Services are owned by FitFlow and are
        protected by copyright, trademark, and other intellectual property laws. You are granted
        a limited license to access and use the Services for personal, non-commercial purposes
        only.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        THE SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DO NOT
        WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER
        HARMFUL COMPONENTS.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, FITFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE
        SERVICES.
      </p>

      <h2>Arbitration Agreement</h2>
      <p>
        Any dispute arising out of or relating to these Terms or the Services shall be resolved
        by binding arbitration, rather than in court. You waive your right to a jury trial and to
        participate in a class action lawsuit.
      </p>
      <p>
        You may opt-out of this arbitration agreement by sending written notice within 30 days of
        first accepting these Terms.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. We will notify you of material changes by posting
        the new Terms on this page. Your continued use of the Services after changes become
        effective constitutes acceptance of the modified Terms.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have questions about these Terms, please visit our <a href="/contact">contact page</a>.
      </p>
    </div>
  );
}
