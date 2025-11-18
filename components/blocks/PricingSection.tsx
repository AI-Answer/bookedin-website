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
      name: "Agency",
      price: "497",
      yearlyPrice: "4970", // Annual total: $497 × 10 months = $4970 (20% savings)
      period: "month",
      features: [
        "Everything in Starter",
        "Unlimited AI Agents",
        "White Label Rights",
        "Priority 1-1 Support",
        "Advanced Automation Features"
      ],
      description: "Ideal for agencies wanting to resell AI services",
      buttonText: "Get Started",
      href: "https://dashboard.bookedin.ai/register",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      yearlyPrice: "Custom",
      period: "month",
      features: [
        "Everything in Agency",
        "Custom Integration",
        "Dedicated Account Manager",
        "White Glove Service",
        "Custom Automation Workflows"
      ],
      description: "Fully managed solution tailored to your needs",
      buttonText: "Contact Sales",
      href: "/book",
      isPopular: false
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
      </div>
    </section>
  );
};

export default PricingSection;
