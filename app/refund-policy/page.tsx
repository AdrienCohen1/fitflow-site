import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | FitFlow Health",
  description: "Refund and cancellation policy for FitFlow Health services and medications.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 800 }}>
      <h1>Refund &amp; Cancellation Policy</h1>
      <p className="legal-note">Last Updated: July 15, 2026</p>

      <p>
        This Refund &amp; Cancellation Policy explains the conditions for cancellations, refunds,
        and returns for services and medications provided by FitFlow Health (&quot;FitFlow,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By making a purchase through FitFlow,
        you agree to the terms outlined below.
      </p>

      <h2>General Policy</h2>
      <ul>
        <li>All prescriptions are <strong>personalized</strong> for individual patients and therefore <strong>cannot be returned or refunded</strong> once prepared.</li>
        <li>Federal and state pharmacy rules prohibit the return of prescription medications under any circumstances.</li>
        <li><strong>Once an order ships, it is final and non-refundable.</strong></li>
        <li>Refunds are only provided under the circumstances described in this policy or where otherwise required by law.</li>
      </ul>

      <h2>Order Cancellation</h2>
      <ul>
        <li><strong>Before Pharmacy Submission:</strong> If you&apos;ve completed a provider consultation but the medication order has not yet been submitted to the pharmacy, you may cancel for a refund.</li>
        <li><strong>After Pharmacy Submission:</strong> Once your prescription has been transmitted to the pharmacy, cancellation and refund are no longer possible.</li>
        <li><strong>After Shipping:</strong> Orders that have left the pharmacy cannot be canceled.</li>
      </ul>

      <h2>Medical Ineligibility</h2>
      <p>
        If, after review, a licensed healthcare provider determines that you are not medically
        eligible for treatment, your order will be canceled and you will receive a{" "}
        <strong>full refund</strong>.
      </p>

      <h2>Damaged Deliveries</h2>
      <ul>
        <li>If your package arrives damaged, you must notify us within <strong>24 hours of delivery</strong> and include a clear photo of the damage.</li>
        <li>After verification, FitFlow will either replace the product or issue a refund.</li>
        <li>Requests submitted outside this timeframe may not be honored.</li>
      </ul>

      <h2>Subscription Plan Cancellations</h2>
      <ul>
        <li>To end a subscription plan, contact us through our <a href="/contact">contact page</a> with your request.</li>
        <li>Once confirmed, your plan will stay active until the end of your current billing cycle, and no further renewals will be charged.</li>
        <li>Partial or prorated refunds are <strong>not</strong> offered for unused time within a billing cycle.</li>
      </ul>

      <h2>When Refunds Are Not Available</h2>
      <p>Refunds will <strong>not</strong> be issued in the following circumstances:</p>
      <ul>
        <li>The prescription has already been sent to the pharmacy</li>
        <li>The customer changes their mind after an order has been processed</li>
        <li>Incorrect or incomplete details provided by the customer (e.g., invalid or wrong shipping address)</li>
        <li>Any violation of FitFlow&apos;s Terms of Service</li>
        <li>Dissatisfaction with a compounded medication, since it is uniquely prepared for each patient</li>
        <li>Shipments confirmed as <strong>delivered by the carrier</strong> to the correct address</li>
      </ul>

      <h2>Shipping Concerns</h2>
      <ul>
        <li>If a shipment is marked <strong>delivered by the carrier but not received</strong>, you must notify FitFlow within <strong>24 hours</strong> and submit documentation, such as a missing package claim.</li>
        <li>If theft is suspected, a <strong>police report</strong> may be required before a replacement can be considered.</li>
        <li>FitFlow is not responsible for packages after the carrier has confirmed delivery.</li>
        <li>All medications are compounded and packaged for stability during transit. Variations in packaging or exposure to temperature changes do not qualify for a refund unless the dispensing pharmacy confirms that medication integrity has been compromised.</li>
      </ul>

      <h2>Requesting a Refund</h2>
      <p>To request a refund:</p>
      <ol>
        <li><strong>Submit Your Request:</strong> Contact us through our <a href="/contact">contact page</a> or patient portal.</li>
        <li><strong>Include Required Information:</strong> Provide your full name, email address, order number, payment date, and reason for the request. Attach supporting documents, such as photos if the medication arrived damaged.</li>
        <li><strong>Processing Time:</strong> Refund requests are reviewed within 2–4 business days. You will be notified of the outcome.</li>
        <li><strong>Refund Issuance:</strong> Approved refunds are returned to the original payment method within 5–10 business days. Please allow time for your bank or card issuer to post the credit.</li>
      </ol>

      <h2>Service Dissatisfaction</h2>
      <p>
        Concerns about service quality (such as delays or communication issues) do not
        automatically qualify for refunds. However, FitFlow may review such cases individually at
        its discretion.
      </p>

      <h2>Billing Errors &amp; Duplicate Payments</h2>
      <ul>
        <li>Refunds will be granted if a duplicate charge or billing error is confirmed.</li>
        <li>If a pricing error occurs, FitFlow reserves the right to correct it and issue any applicable refund.</li>
      </ul>

      <h2>Chargebacks &amp; Payment Disputes</h2>
      <p>
        If a customer initiates a chargeback, payment dispute, or otherwise attempts to reverse a
        payment through their bank or card issuer, FitFlow reserves the right to immediately
        suspend or terminate all current and future services, prescriptions, shipments, and
        account access while the dispute is under review.
      </p>
      <p>
        If the dispute is resolved in FitFlow&apos;s favor, FitFlow may, at its sole discretion,
        permanently terminate the customer&apos;s account and discontinue any remaining services
        or shipments associated with the disputed purchase. Customers who initiate fraudulent or
        abusive payment disputes may become permanently ineligible for future services.
      </p>
      <p>
        Nothing in this section limits any other rights or remedies available to FitFlow under
        these Terms or applicable law.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this policy, please visit our{" "}
        <a href="/contact">contact page</a>. We&apos;re available to help answer your questions.
      </p>
    </div>
  );
}
