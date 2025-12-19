export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: December 19, 2024</p>

        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to BookedIn.ai ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered sales automation platform.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using BookedIn.ai, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Information You Provide</h3>
            <p className="text-slate-600 leading-relaxed mb-4">We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Account information (name, email address, phone number, company name)</li>
              <li>Payment and billing information</li>
              <li>Customer data you upload to use our AI services</li>
              <li>Communications with our support team</li>
              <li>Feedback, survey responses, and testimonials</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">When you use our platform, we automatically collect:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Usage data (features used, time spent, interactions)</li>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log data (access times, pages viewed, errors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 AI Training Data</h3>
            <p className="text-slate-600 leading-relaxed">
              We may use anonymized and aggregated data from your interactions with our AI agents to improve our models and services. We do not use your specific customer data to train AI models without your explicit consent.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We use the collected information for:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Providing and maintaining our AI automation services</li>
              <li>Processing your transactions and managing your account</li>
              <li>Improving and personalizing your experience</li>
              <li>Sending you service updates, security alerts, and support messages</li>
              <li>Analyzing usage patterns to enhance our platform</li>
              <li>Detecting and preventing fraud and security issues</li>
              <li>Complying with legal obligations</li>
              <li>Marketing our services (with your consent)</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Share Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our platform (hosting, payment processing, analytics)</li>
              <li><strong>AI Service Providers:</strong> Partners who provide AI infrastructure (e.g., OpenAI, Anthropic) under strict data protection agreements</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you close your account, we will delete or anonymize your data within 90 days, unless we are required to retain it for legal purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-slate-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Object:</strong> Object to certain processing of your data</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              To exercise these rights, please contact us at <a href="mailto:privacy@bookedin.ai" className="text-blue-600 hover:text-blue-700">privacy@bookedin.ai</a>
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our platform.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. International Data Transfers</h2>
            <p className="text-slate-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="text-slate-900 font-semibold mb-2">BookedIn.ai</p>
              <p className="text-slate-600">Email: <a href="mailto:privacy@bookedin.ai" className="text-blue-600 hover:text-blue-700">privacy@bookedin.ai</a></p>
              <p className="text-slate-600">Support: <a href="mailto:support@bookedin.ai" className="text-blue-600 hover:text-blue-700">support@bookedin.ai</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-500 text-sm">
            © 2024 BookedIn.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

