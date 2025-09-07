import React, { useState } from "react";
const faqsData = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'My Orders' section. We also send tracking details via email."
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer 24-hour return policy for unused and unopened products. Please contact our support team for assistance."
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by location."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via the Contact Us page or email us directly at support@example.com."
  },
  {
    question: "Can I change my delivery address after placing an order?",
    answer:
      "Yes, you can update your delivery address within 2 hours of placing the order by visiting your account settings or contacting support."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit cards, net banking, UPI, and popular digital wallets for your convenience."
  },
  {
    question: "Do you provide gift wrapping services?",
    answer:
      "Yes, we offer gift wrapping at checkout for a small additional charge. You can also add a personalized message."
  },
  {
    question: "How do I report a damaged or missing item?",
    answer:
      "If your order is damaged or incomplete, please contact us within 48 hours with your order number and photos for a quick resolution."
  },
  {
    question: "Are there any membership benefits?",
    answer:
      "Yes! Members enjoy exclusive discounts, early access to sales, and free delivery on all orders."
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Orders within India are typically delivered within 3-5 business days, while international shipping may take 7-15 days."
  },
  {
    question: "Can I cancel my order after placing it?",
    answer:
      "Yes, you can cancel your order within 1 hour of placing it through your account dashboard."
  },
  {
    question: "Do you offer bulk or wholesale discounts?",
    answer:
      "Yes, we offer special rates for bulk orders. Please contact our sales team for more information."
  }
];
const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-gradient-to-r from-indigo-600/4 via-purple-500/5 to-pink-200  flex justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow hover:shadow-white transition duration-500 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
