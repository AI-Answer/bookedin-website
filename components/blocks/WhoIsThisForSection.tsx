import React from 'react';
import { TextGradientScroll } from '@/components/ui/text-gradient-scroll';
import { Particles } from '@/components/ui/particles';

const WhoIsThisForSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
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
            Who is BookedIn AI for?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Target Audience */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header Badge */}
            <div className="text-center mb-6">
              <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full">
                To white label and sell
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                If you:
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 text-lg">→</span>
                  <span className="text-gray-700">Want to sell AI automation but can't code and don't want to hire developers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 text-lg">→</span>
                  <span className="text-gray-700">Watch other agencies charge <em className="font-semibold text-gray-900">$5K/month</em> for AI services while you're stuck selling "consulting."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3 text-lg">→</span>
                  <span className="text-gray-700">Need a proven AI offer that actually works - not another complicated tool you'll never figure out.</span>
                </li>
              </ul>
              
              <p className="text-lg font-semibold text-gray-900 mb-4">
                If the answer is yes, we can instantly fix that for you.
              </p>

              <div className="mb-4">
                <TextGradientScroll
                  text="Here's what's holding you back: Every client wants AI automation, but building it requires technical skills you don't have. You've tried no-code tools, but they're still too complex. You've considered partnerships, but then you lose control and margins."
                  className="text-gray-700 text-base leading-relaxed"
                  type="word"
                  textOpacity="soft"
                />
              </div>

              <div className="mb-6">
                <TextGradientScroll
                  text="BookedIn is the done-for-you AI system you sell as your own - a complete lead conversion platform that calls, texts, and messages leads automatically until they book appointments. No coding. No complexity. Just pick a template, slap your logo on it, and charge $2K-$5K/month per client."
                  className="text-gray-700 text-base leading-relaxed"
                  type="word"
                  textOpacity="soft"
                />
              </div>

              <p className="text-lg font-bold text-gray-900 italic">
                → Stop trying to build AI. Start selling it.
              </p>
            </div>
          </div>

          {/* Second Target Audience */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header Badge */}
            <div className="text-center mb-6">
              <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-4 py-2 rounded-full">
                For yourself
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                The last mile of lead generation
              </h3>

              <div className="mb-4">
                <TextGradientScroll
                  text="You are great at running Facebook and Google Ads to get leads for your customers, but getting them to actually show up is harder than ever. As an agency, half of the leads you generate for your customers are wasted."
                  className="text-gray-700 text-base leading-relaxed"
                  type="word"
                  textOpacity="soft"
                />
              </div>

              <div className="mb-6">
                <TextGradientScroll
                  text="Bookedin makes it easy for you to get more leads to actually show up in person or virtually."
                  className="text-gray-700 text-base leading-relaxed"
                  type="word"
                  textOpacity="soft"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  → How do we do it?
                </h4>
                <div className="mb-4">
                  <TextGradientScroll
                    text="We call every lead within seconds, then follow up via SMS, email, and even Instagram/LinkedIn DMs until they book or opt out."
                    className="text-gray-700 text-base leading-relaxed"
                    type="word"
                    textOpacity="soft"
                  />
                </div>
              </div>

              <p className="text-lg font-bold text-gray-900 italic">
                → Reduce your cost per lead and make more money for your customers than they are spending.
              </p>
            </div>
          </div>
        </div>
        
        {/* Centered Get Started Button */}
        <div className="text-center mt-12">
          <a
            href="http://dashboard.bookedin.ai/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
