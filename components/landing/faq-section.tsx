"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Account & Security",
    items: [
      {
        question: "Is my money safe with CharlseEmpire?",
        answer: "Absolutely. We use bank-grade encryption and comply with all African financial regulations. Your funds are insured and protected."
      },
      {
        question: "How do I create an account?",
        answer: "Download the app or visit our website, enter your email, and complete KYC verification. Takes about 5 minutes and you're ready to go."
      },
      {
        question: "What are the KYC requirements?",
        answer: "We require a valid government ID, proof of address, and a phone number. This helps us prevent fraud and comply with regulations."
      },
    ]
  },
  {
    category: "Transactions & Fees",
    items: [
      {
        question: "How much does it cost to send money?",
        answer: "Transfers within Africa typically cost 1-2% depending on destination. That's 5-10x cheaper than traditional money transfer services."
      },
      {
        question: "How long do transfers take?",
        answer: "Most transfers arrive instantly. International transfers may take 1-2 hours depending on the destination bank."
      },
      {
        question: "What's the maximum transfer amount?",
        answer: "Limits depend on your account tier. Starter accounts can transfer up to $5,000/day. Premium accounts have higher limits."
      },
    ]
  },
  {
    category: "Products & Features",
    items: [
      {
        question: "What is the Njangi Platform?",
        answer: "Njangi is our group savings solution. Create or join savings circles, set goals, and build wealth collectively with trusted people."
      },
      {
        question: "Can I use CharlseEmpire Pay for my business?",
        answer: "Yes! We offer business accounts with invoicing, payroll, and reporting tools. Perfect for SMEs and freelancers."
      },
      {
        question: "Do you have a mobile app?",
        answer: "Yes, available on iOS and Android. Download from the App Store or Google Play and start in seconds."
      },
    ]
  },
  {
    category: "Developer & API",
    items: [
      {
        question: "How do I integrate CharlseEmpire API?",
        answer: "Check our developer documentation at developers.charlseempire.com. We have SDKs for Node.js, Python, and more."
      },
      {
        question: "Is there a sandbox environment?",
        answer: "Yes! We provide a live sandbox for testing. You can test all functionality without real transactions."
      },
      {
        question: "What payment methods do you support?",
        answer: "We support bank transfers, mobile money (M-Pesa, MTN Money, etc.), and card payments across 15+ African countries."
      },
    ]
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold pr-4">{question}</h4>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <p className="mt-4 text-muted-foreground leading-relaxed animate-in fade-in duration-300">
          {answer}
        </p>
      )}
    </button>
  );
}

export function FAQSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Questions?
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${categoryIndex * 100}ms` : "0ms",
              }}
            >
              <h3 className="text-2xl font-display tracking-tight mb-6 text-primary">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const itemId = `${categoryIndex}-${itemIndex}`;
                  return (
                    <FAQItem
                      key={itemId}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems.includes(itemId)}
                      onClick={() => toggleItem(itemId)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still need help CTA */}
        <div
          className={`mt-16 lg:mt-24 p-8 lg:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Our support team is here to help. Contact us anytime, we&apos;re usually super fast to respond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@charlseempire.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Email Support
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-primary/30 text-foreground rounded-full font-semibold hover:bg-primary/5 transition-colors"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
