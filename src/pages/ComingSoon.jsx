import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowLeft } from 'lucide-react';

function ComingSoon() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-xl p-10 text-center border border-slate-100">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Smartphone className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">App Coming Soon!</h1>
        <p className="text-lg text-slate-600 mb-8">
          We are working hard on our mobile app to bring Delhi NCR's fastest logistics right to your fingertips. Stay tuned!
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
