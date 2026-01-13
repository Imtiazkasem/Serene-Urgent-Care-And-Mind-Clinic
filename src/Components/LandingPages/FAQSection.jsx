"use client"
import { useState } from "react";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need an appointment for urgent care?",
      answer:
        "No appointment necessary! We welcome walk-ins during our regular hours. However, booking an appointment online can help reduce your wait time.",
    },
    {
      question: "What insurance do you accept?",
      answer:
        "We accept Medicare, Medi-Cal, and most major insurance plans including Blue Cross, Aetna, UnitedHealthcare, and Cigna. We also offer affordable membership plans for uninsured patients.",
    },
    {
      question: "What is TMS Therapy and who is it for?",
      answer:
        "TMS (Transcranial Magnetic Stimulation) is an FDA-approved, non-invasive treatment for depression and other mental health conditions. We use BrainsWay and NeuroStar technology. It's ideal for patients who haven't responded well to traditional treatments.",
    },
    {
      question: "Can you treat both physical and mental health conditions?",
      answer:
        "Absolutely! Our integrated model means you can receive primary care, urgent care, and mental health services all in one place. No need for multiple appointments or referrals to different specialists.",
    },
    {
      question: "What are your walk-in hours?",
      answer:
        "Our walk-in urgent care hours are Monday-Friday 8AM-8PM and Saturday-Sunday 9AM-5PM. For mental health services and TMS therapy, we recommend scheduling an appointment for the best availability.",
    },
    {
      question: "Do you offer same-day mental health evaluations?",
      answer:
        "Yes! We provide same-day mental health evaluations for conditions including depression, anxiety, ADHD, and more. Our experienced providers can create a treatment plan during your first visit.",
    },
    {
      question: "What services are included in your membership plans?",
      answer:
        "Our membership plans for uninsured patients include discounted rates on office visits, lab work, prescriptions, and mental health services. Contact us for specific pricing and plan details tailored to your needs.",
    },
    {
      question: "How long does a typical urgent care visit take?",
      answer:
        "Most urgent care visits take 30-60 minutes from check-in to discharge. We prioritize efficiency while ensuring you receive thorough, quality care. Booking online can help reduce wait times.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <p className="text-lg text-slate-600">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-slate-200 overflow-hidden hover:border-primary/60 transition-colors duration-700 ease-in-out "
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 cursor-pointer transition-all duration-1000 ease-in-out"
              >
                <span className="font-semibold text-text pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-text mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our friendly team is here to help you with any concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition"
            >
              Contact Us
            </a>
            <a
              href="tel:+310431-4558"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
