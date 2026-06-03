import React from 'react';

function Refunds() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Refund & Cancellation Policy</h1>
      <div className="prose prose-blue max-w-none text-slate-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Cancellations</h2>
        <p className="mb-4">You may cancel a delivery request free of charge up to 2 hours before the scheduled pickup time. Cancellations made after a driver has been dispatched may incur a cancellation fee.</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Refunds for Service Failure</h2>
        <p className="mb-4">If we fail to deliver your package within the guaranteed timeframe, you may be eligible for a partial or full refund of the delivery fee, subject to investigation.</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Damage Claims</h2>
        <p className="mb-4">All shipments are fully insured. In the rare event of damage or loss during transit, claims must be filed within 7 days of the delivery date with photographic evidence.</p>
      </div>
    </div>
  );
}

export default Refunds;
