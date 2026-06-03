import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Have questions about our logistics services? We're here to help. Reach out to us via phone, email, or visit our office.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Head Office</h3>
                  <p className="text-slate-600 leading-relaxed">OFF.NO.955, GAUR CITY MALL, C01, BGH, SEC4 GR.NOIDAWEST,<br/>Gautam Buddha Nagar, Uttar Pradesh,<br/>India, 201318</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Email Support</h3>
                  <a href="mailto:JATINDER991425@GMAIL.COM" className="text-blue-600 hover:underline">JATINDER991425@GMAIL.COM</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Customer Care</h3>
                  <p className="text-slate-600">+91 1800-XXX-XXXX (24/7 Support)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input type="text" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
