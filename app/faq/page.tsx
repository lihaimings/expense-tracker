"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is {'name': 'FAQ', 'path': '/faq', 'title': 'Frequently Asked Questions', 'meta_description': 'Common questions about Expense Tracker', 'faqs': [{'question': 'How do I log my expenses?', 'answer': 'Enter your expense date and amount, then select the category'}, {'question': 'Can I export my expenses?', 'answer': 'Yes, you can export your expenses as a CSV file'}, {'question': 'Is Expense Tracker secure?', 'answer': 'Yes, our tool uses SSL encryption to protect user data'}]} free to use?",
    answer: "Yes, {'name': 'FAQ', 'path': '/faq', 'title': 'Frequently Asked Questions', 'meta_description': 'Common questions about Expense Tracker', 'faqs': [{'question': 'How do I log my expenses?', 'answer': 'Enter your expense date and amount, then select the category'}, {'question': 'Can I export my expenses?', 'answer': 'Yes, you can export your expenses as a CSV file'}, {'question': 'Is Expense Tracker secure?', 'answer': 'Yes, our tool uses SSL encryption to protect user data'}]} is completely free to use with no hidden fees or subscriptions."
  },
  {
    question: "Do I need to create an account?",
    answer: "No, you can use {'name': 'FAQ', 'path': '/faq', 'title': 'Frequently Asked Questions', 'meta_description': 'Common questions about Expense Tracker', 'faqs': [{'question': 'How do I log my expenses?', 'answer': 'Enter your expense date and amount, then select the category'}, {'question': 'Can I export my expenses?', 'answer': 'Yes, you can export your expenses as a CSV file'}, {'question': 'Is Expense Tracker secure?', 'answer': 'Yes, our tool uses SSL encryption to protect user data'}]} without creating an account or signing up."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, all processing happens locally in your browser. We don't store or transmit your data."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely! {'name': 'FAQ', 'path': '/faq', 'title': 'Frequently Asked Questions', 'meta_description': 'Common questions about Expense Tracker', 'faqs': [{'question': 'How do I log my expenses?', 'answer': 'Enter your expense date and amount, then select the category'}, {'question': 'Can I export my expenses?', 'answer': 'Yes, you can export your expenses as a CSV file'}, {'question': 'Is Expense Tracker secure?', 'answer': 'Yes, our tool uses SSL encryption to protect user data'}]} is fully responsive and works great on all devices."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button type="button"
              className="w-full p-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-muted-foreground">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
