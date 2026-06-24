const paymentStats = [
    ["150+", "Countries"],
    ["8+", "Payment Methods"],
    ["24/7", "Secure Operations"],
    ["Multi", "Currency Reports"],
  ];
  
  const trustBadges = [
    "Enterprise Ready",
    "PCI-DSS Inspired",
    "Multi-Currency",
    "Crypto Enabled",
    "Secure Transactions",
  ];
  
  const paymentMethods = [
    ["💳", "Credit Cards"],
    ["💳", "Debit Cards"],
    ["🟣", "Stripe"],
    ["🔵", "PayPal"],
    ["🔷", "Payoneer"],
    ["🟢", "Wise"],
    ["🏦", "Bank Transfer"],
    ["₿", "Cryptocurrency"],
  ];
  
  const cryptoAssets = [
    "USDT TRC20",
    "USDT ERC20",
    "USDT BEP20",
    "BTC",
    "ETH",
    "BNB",
    "SOL",
    "USDC",
  ];
  
  export default function PaymentsInfrastructure() {
    return (
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,255,0.14),transparent_35%)]" />
  
        <div className="relative max-w-7xl mx-auto rounded-[2rem] border border-cyan-500/20 bg-white/[0.04] p-8 md:p-12 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <p className="text-cyan-400 font-semibold mb-3">
            Enterprise Payment Infrastructure
          </p>
  
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Global Financial Infrastructure
          </h2>
  
          <p className="text-gray-400 text-lg md:text-xl leading-8 max-w-4xl mb-8">
            Secure payment architecture for modern businesses, supporting global
            cards, Stripe, PayPal, Payoneer, Wise, bank transfers, crypto payments,
            original transaction currency tracking, and enterprise-grade financial
            reporting.
          </p>
  
          <div className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                {badge}
              </span>
            ))}
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {paymentStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-cyan-500/20 bg-black/40 p-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {value}
                </h3>
                <p className="text-gray-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-bold mb-6">Payment Methods</h3>
  
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {paymentMethods.map(([icon, item]) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center hover:scale-105 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <span className="text-3xl">{icon}</span>
                    <p className="mt-3 text-sm text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-bold mb-4">Accepted Worldwide</h3>
  
              <ul className="space-y-4 text-gray-400 text-sm leading-6">
                <li>✓ 150+ supported countries</li>
                <li>✓ Multiple currencies</li>
                <li>✓ Bank transfers</li>
                <li>✓ Crypto payments</li>
                <li>✓ Enterprise reporting</li>
                <li>✓ Secure transaction tracking</li>
              </ul>
            </div>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-bold mb-4">Multi-Currency Engine</h3>
  
              <ul className="space-y-4 text-gray-400 text-sm leading-6">
                <li>✓ Store original transaction currency</li>
                <li>✓ Live exchange rates for reporting</li>
                <li>✓ Multi-currency accounting</li>
                <li>✓ Financial reports by currency</li>
                <li>✓ Global payment operations</li>
              </ul>
            </div>
  
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-bold mb-6">
                Supported Digital Assets
              </h3>
  
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cryptoAssets.map((asset) => (
                  <div
                    key={asset}
                    className="rounded-2xl border border-cyan-500/20 bg-white/[0.04] p-4 text-center text-sm hover:scale-105 hover:bg-cyan-500/10 hover:border-cyan-400/70 transition-all duration-300"
                  >
                    {asset}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center text-cyan-200">
            Enterprise Ready · Global Payments · Multi-Currency · Crypto Payments · Financial Reports · Secure Transactions
          </div>
        </div>
      </section>
    );
  }
  