import React from 'react';
import { Pricing } from './pricing';
import { Particles } from '@/components/ui/particles';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "97",
      yearlyPrice: "970", // Annual total: $97 × 10 months = $970 (20% savings)
      period: "month",
      features: [
        "Full Platform Access",
        "Group Coaching and Consulting",
        "2 AI Agents",
        "Community Support",
        "Email & SMS Automation"
      ],
      description: "Perfect for getting started with AI automation",
      buttonText: "Get Started",
      href: "https://dashboard.bookedin.ai/register",
      isPopular: false
    },
    {
      name: "Professional",
      price: "297",
      yearlyPrice: "2970", // Annual total: $297 × 10 months = $2970 (20% savings)
      period: "month",
      features: [
        "Everything in Starter",
        "5 AI Agents",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      description: "For growing businesses scaling their operations",
      buttonText: "Get Started",
      href: "https://dashboard.bookedin.ai/register",
      isPopular: false
    },
    {
      name: "Agency",
      price: "497",
      yearlyPrice: "4970", // Annual total: $497 × 10 months = $4970 (20% savings)
      period: "month",
      features: [
        "Everything in Professional",
        "Unlimited AI Agents",
        "White Label Rights",
        "Priority 1-1 Support",
        "Advanced Automation Features"
      ],
      description: "Ideal for agencies wanting to resell AI services",
      buttonText: "Get Started",
      href: "https://dashboard.bookedin.ai/register",
      isPopular: true
    }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#305AE3"
        refresh
      />
      <div className="relative z-10 container mx-auto px-6">
        <Pricing
          plans={pricingPlans}
          title="Choose Your Plan"
          description="Get started with BookedIn.ai and transform your lead conversion process"
        />

        {/* Done For You Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Done For You
              </h3>
              <p className="text-lg text-muted-foreground">
                Let our team handle everything for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Full setup and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom automation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>White glove service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Ongoing optimization</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <p className="text-5xl font-bold text-foreground mb-2">Custom Pricing</p>
                  <p className="text-muted-foreground">Tailored to your specific needs</p>
                </div>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Perfect for businesses that want a fully managed, hands-off solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
