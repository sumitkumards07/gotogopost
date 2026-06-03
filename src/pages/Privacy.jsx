import React from 'react';

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none text-slate-600">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect personal information that you provide to us when registering for an account, booking a shipment, or contacting customer support. This may include your name, email address, phone number, and physical addresses.</p>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to provide, maintain, and improve our logistics services, process your transactions, send you tracking updates, and communicate with you about your shipments.</p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Location Data</h2>
        <p className="mb-4">When you use our app to track a delivery or when our delivery partners are in transit, we collect precise location data to provide real-time tracking features.</p>
      </div>
    </div>
  );
}

export default Privacy;
