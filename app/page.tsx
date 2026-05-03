export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaving Money on the Table at Tax Time
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          TaxTrack connects to your bank and credit cards, automatically categorizes business expenses as writeoffs, and generates IRS-ready reports — so you keep more of what you earn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to start.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="font-semibold text-white mb-1">Bank Sync via Plaid</h3>
            <p className="text-sm text-[#8b949e]">Connect all your accounts in seconds. Transactions import automatically every day.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI Categorization</h3>
            <p className="text-sm text-[#8b949e]">Our AI flags deductible expenses — software, travel, home office, and more — instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-semibold text-white mb-1">Tax-Ready Reports</h3>
            <p className="text-sm text-[#8b949e]">Export a clean Schedule C summary your accountant (or TurboTax) can use directly.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bank & card connections',
              'AI-powered expense categorization',
              'Unlimited tax-ready PDF exports',
              'Schedule C & writeoff summaries',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my banking data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We use Plaid, the same technology trusted by Venmo and Coinbase. We never store your bank credentials — only read-only transaction data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What expenses can TaxTrack identify?</h3>
            <p className="text-sm text-[#8b949e]">Software subscriptions, home office costs, travel, meals, professional development, equipment, and more — all common Schedule C deductions for freelancers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel with one click from your dashboard. No contracts, no cancellation fees, no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TaxTrack. Built for freelancers.
      </footer>
    </main>
  )
}
