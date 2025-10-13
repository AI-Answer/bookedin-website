"use client"

import { useEffect } from "react"

export default function BookingPage() {
  // Load the Converti.ai embed script and Funnelytics tracking
  useEffect(() => {
    // Converti.ai embed script
    const convertScript = document.createElement('script')
    convertScript.src = 'https://app.converti.ai/js/form_embed.js'
    convertScript.type = 'text/javascript'
    convertScript.async = true
    document.body.appendChild(convertScript)

    // Funnelytics tracking script
    const funnelyticsScript = document.createElement('script')
    funnelyticsScript.type = 'text/javascript'
    funnelyticsScript.innerHTML = `
      (function(funnel) {
        var deferredEvents = [];
        window.funnelytics = {
          events: {
            trigger: function (name, attributes, callback, opts) {
              deferredEvents.push({name: name, attributes: attributes, callback: callback, opts: opts});
            }
          }
        };
        var insert = document.getElementsByTagName('script')[0],
            script = document.createElement('script');
        script.addEventListener('load', function() {
          window.funnelytics.init(funnel, false, deferredEvents, {});
        });
        script.src = 'https://cdn.funnelytics.io/track-v3.js';
        script.type = 'text/javascript';
        script.async = true;
        insert.parentNode.insertBefore(script, insert);
      })('44fc4944-42f6-4964-b257-aeddbc4ee011');
    `
    document.head.appendChild(funnelyticsScript)

    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(convertScript)) {
        document.body.removeChild(convertScript)
      }
      if (document.head.contains(funnelyticsScript)) {
        document.head.removeChild(funnelyticsScript)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-15 blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg mb-6">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">B</span>
            </div>
            <span className="font-semibold">BookedIn</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Let's find where you're losing conversions & customers.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Schedule your BookedIn Visibility demo.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://app.converti.ai/widget/booking/U5bzTPMI2Fr08d0FXePj"
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '700px'
              }}
              scrolling="no"
              id="5tBRfXC6BBxlQyIdDzPF_1760303128422"
              title="BookedIn Calendar Booking"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
