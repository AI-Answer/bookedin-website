import React from 'react';
import { Particles } from '@/components/ui/particles';

const BookingSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#305AE3"
        refresh
      />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Lead Conversion?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book a personalized demo and see exactly how BookedIn.ai can automate your follow-up process and convert more leads into meetings
            </p>
          </div>

          {/* Booking Widget Container */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-5xl mx-auto">
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Schedule Your Free Demo
                </h3>
                <p className="text-gray-600">
                  Choose a time that works for you and let's show you how BookedIn.ai can work for your business
                </p>
              </div>
              
              {/* Booking Embed */}
              <div className="booking-widget-container relative">
                <div className="w-full rounded-lg overflow-hidden bg-gray-50">
                  <iframe
                    src="https://app.converti.ai/widget/booking/U5bzTPMI2Fr08d0FXePj"
                    className="w-full border-none h-[700px] md:h-[800px] lg:h-[850px] min-h-[700px]"
                    scrolling="yes"
                    id="5tBRfXC6BBxlQyIdDzPF_1756855009188"
                    title="Book a Demo with BookedIn.ai"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Below Booking */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">30-Minute Demo</h4>
              <p className="text-gray-600">See BookedIn.ai in action with a personalized walkthrough</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Strategy</h4>
              <p className="text-gray-600">Get a tailored plan for your specific business needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Setup</h4>
              <p className="text-gray-600">Start converting leads within 30 minutes of your demo</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Embed Script */}
      <script 
        src="https://app.converti.ai/js/form_embed.js" 
        type="text/javascript"
        async
      />
    </section>
  );
};

export default BookingSection;
