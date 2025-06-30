import React from 'react';

export const metadata = {
  title: "Privacy & Cookies Policy – Arqai Studio",
  description:
    "Learn how Arqai Studio collects, uses, and protects your personal information. Read our privacy and cookies policy for full transparency on our data practices.",
  keywords:
    "privacy policy, cookies policy, GDPR, user data protection, Arqai Studio privacy, personal data usage, consent withdrawal, digital art privacy, AI art studio, website cookies",
  openGraph: {
    title: "Privacy & Cookies Policy – Arqai Studio",
    description:
      "Understand how your personal data and cookies are handled at Arqai Studio. Full transparency and user data rights explained.",
    url: "https://www.arqaistudio.com/privacy-policy",
    siteName: "Arqai Studio",
    type: "article",
  },
  alternates: {
    canonical: "https://www.arqaistudio.com/privacy-policy",
  },
};

const CookiesPage = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12 font-avenir">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-center">
          Privacy & Cookies Policy
        </h1>

        <p className="text-base sm:text-lg leading-relaxed">
          Welcome to Arqai Studio. We respect your privacy and are committed to protecting your personal data. This Privacy and Cookies Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">1. Who We Are</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Arqai Studio is a bespoke art studio combining AI-generated design with handcrafted artistry. We operate this website to present our artistic services and connect with clients worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">2. What Information We Collect</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              When you use our website or contact us through the form, we may collect:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg leading-relaxed">
              <li>Your name</li>
              <li>Email address</li>
              <li>Any information you provide in the message field</li>
            </ul>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">
              We do not collect payment details or personal data unless you provide it voluntarily.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              We use the information solely to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg leading-relaxed">
              <li>Respond to your inquiries</li>
              <li>Provide requested services</li>
              <li>Improve our website and offerings</li>
            </ul>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">
              Your data will never be sold, shared, or used for marketing without consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">4. Cookies</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              This website uses essential cookies to ensure functionality and anonymous analytics cookies to understand how visitors interact with our content.
            </p>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">Cookies may:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg leading-relaxed">
              <li>Remember your preferences</li>
              <li>Track website usage (via tools like Google Analytics)</li>
            </ul>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">
              By continuing to browse, you accept the use of cookies. You can change cookie settings in your browser at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">5. Your Rights</h2>
            <p className="text-base sm:text-lg leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg leading-relaxed">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:hello@arqaistudio.com" className="text-[#95774B] underline">
                hello@arqaistudio.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">6. Contact</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              For questions about this Privacy Policy, reach out to:
            </p>
            <p className="mt-2 text-base sm:text-lg leading-relaxed">
              Arqai Studio<br />
              <a href="mailto:hello@arqaistudio.com" className="text-[#95774B] underline">hello@arqaistudio.com</a><br />
              <a href="https://www.arqaistudio.com" target="_blank" rel="noopener noreferrer" className="text-[#95774B] underline">www.arqaistudio.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPage;
