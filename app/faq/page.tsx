import type { Metadata } from "next";
import TodoBanner from "@/components/TodoBanner";

export const metadata: Metadata = {
  title: "Weight Loss FAQ - FitFlow Health Questions & Answers",
  description:
    "Find answers to common questions about GLP-1 weight loss medications, pricing, side effects, and treatment process. Expert answers from FitFlow Health.",
  alternates: { canonical: "/faq" },
};

const questions = [
  "How does FitFlow work?",
  "What medications do you offer?",
  "How much weight can I expect to lose?",
  "Are there any side effects?",
  "How much does it cost?",
  "Is this covered by insurance?",
  "How long do I need to take the medication?",
  "Who can use FitFlow?",
  "How do I take the medication?",
  "What if I have questions during treatment?",
  "How quickly will I receive my medication?",
  "Can I cancel at any time?",
  "What's the difference between Semaglutide and Tirzepatide?",
  "Do I need to exercise or diet?",
  "Will I gain the weight back after stopping?",
  "How do I get started?",
  "What if the medication doesn't work for me?",
  "Do you offer any discounts or payment plans?",
  "Is my personal health information secure?",
];

export default function FaqPage() {
  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1>Frequently Asked Questions</h1>
      <p className="lead">Everything you need to know about FitFlow and our weight loss programs</p>

      <TodoBanner>
        Paste the real answer copy for each question below from your Lovable dashboard. These
        answers weren&apos;t retrievable from the live site because they only render after a user
        clicks the accordion (client-side state), which is itself a good example of the exact
        crawlability problem this migration fixes.
      </TodoBanner>

      {questions.map((q) => (
        <div className="faq-item" key={q}>
          <h3>{q}</h3>
          <p>[Answer to be filled in]</p>
        </div>
      ))}
    </div>
  );
}
