import React from 'react';
import { Pricing } from './pricing';
import { Particles } from '@/components/ui/particles';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Pro",
      price: "297",
      yearlyPrice: "2970", // Annual total: $297 × 10 months = $2970 (20% savings)
      period: "month",
      features: [
        "Full AI Platform Access",
        "Added bonus (Free CRM)",
        "Group Consulting and Coaching",
        "Group support",
        "One-on-one onboarding"
      ],
      description: "Perfect for getting started with AI automation",
      buttonText: "Get Started",
      href: "https://www.skool.com/bookedin",
      isPopular: false
    },
    {
      name: "Agency",
      price: "497",
      yearlyPrice: "4970", // Annual total: $497 × 10 months = $4970 (20% savings)
      period: "month",
      features: [
        "Everything in Pro",
        "White label rights to BookedIn.ai platform",
        "Priority 1-1 support",
        "Unlimited credits with keys"
      ],
      description: "Ideal for agencies wanting to resell AI services",
      buttonText: "Get Started",
      href: "https://www.skool.com/bookedin",
      isPopular: true
    },
    {
      name: "Custom",
      price: "0", // Will be hidden with custom styling
      yearlyPrice: "0",
      period: "Done for you",
      features: [
        "Full setup and management",
        "Dedicated Account Manager",
        "Pool setup and management",
        "Optimization options",
        "White glove service",
        "Build whatever Automation you need"
      ],
      description: "Fully managed solution tailored to your needs",
      buttonText: "Contact Sales",
      href: "#demo",
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
