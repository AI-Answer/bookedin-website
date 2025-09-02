import React from 'react';
import { Particles } from '@/components/ui/particles';

const BeforeAfterSection: React.FC = () => {
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
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why use BookedIn.ai?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop wasting time on complex integrations and start focusing on what matters most - growing your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center max-w-4xl mx-auto">
          {/* Before Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
            <div className="mb-4">
              <img
                src="/n8n.png"
                alt="Complex workflow diagram showing the old way"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-red-600 mb-3">THE OLD WAY</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Hire appointment setters and train them for weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Buy 10 different software tools that don't talk to each other</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Build complex N8N workflows that break constantly</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Manage staff schedules, sick days, and turnover</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Juggle between multiple dashboards and logins</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-sm">✗</span>
                <span className="text-gray-700 text-sm">Spend weekends fixing broken integrations</span>
              </li>
            </ul>
          </div>

          {/* After Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
            <div className="mb-4">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/4WBCThgieRy9bHVip9nI/media/684b3a0f07bcd3fcb45b89b2.gif"
                alt="Clean, simple BookedIn interface"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-blue-600 mb-3">THE BOOKEDIN WAY</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">⚡</span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">Fill in your business details</span>
                  <span className="text-gray-600 text-sm"> (5 minutes)</span>
                  <p className="text-xs text-gray-600 mt-1">Add your services, pricing, FAQs, and hours - everything your AI needs to know.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">🤖</span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">Watch your AI agents go live</span>
                  <span className="text-gray-600 text-sm"> (instantly)</span>
                  <p className="text-xs text-gray-600 mt-1">Your agents are automatically created and ready. Test them, tweak responses, perfect the flow.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">📅</span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">Connect calendar & let them work</span>
                  <span className="text-gray-600 text-sm"> (24/7)</span>
                  <p className="text-xs text-gray-600 mt-1">Link your calendar and channels. Your AI now handles every lead, books appointments, never forgets.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Get Started Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
