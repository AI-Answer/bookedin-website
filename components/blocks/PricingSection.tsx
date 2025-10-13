import React from 'react';
import { Pricing } from './pricing';
import { Particles } from '@/components/ui/particles';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Platform",
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
        "Everything in Platform",
        "White label rights to BookedIn.ai platform",
        "Priority 1-1 support",
        "Unlimited credits with keys",
        "Advanced automation features"
      ],
      description: "Ideal for agencies wanting to resell AI services",
      buttonText: "Contact Sales",
      href: "/book",
      isPopular: false
    },
    {
      name: "Done For You",
      price: "2500",
      yearlyPrice: "2500",
      period: "one-time",
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
      href: "/book",
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
      </div>
    </section>
  );
};

export default PricingSection;
