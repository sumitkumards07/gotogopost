import React from 'react';

function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Terms of Service</h1>
      <div className="prose prose-blue max-w-none text-slate-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using GoTogo Post services and mobile applications, you agree to be bound by these Terms of Service.</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Service Limitations</h2>
        <p className="mb-4">We reserve the right to refuse shipment of hazardous materials, illegal substances, or any items that violate local or international transport laws.</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. User Responsibilities</h2>
        <p className="mb-4">Users are responsible for ensuring all packages are securely packed and accurately labeled. Incorrect weight or dimension declarations may result in additional charges.</p>
      </div>
    </div>
  );
}

export default Terms;
