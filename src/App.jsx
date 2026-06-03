import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FloatingNav } from './components/ui/floating-nav';
import Home from './pages/Home';
import { Package, Truck, ShieldCheck, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

// We'll create these next
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';

function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', link: '/', icon: <Package className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'About', link: isHome ? '#about' : '/#about', icon: <Truck className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Services', link: isHome ? '#services' : '/#services', icon: <MapPin className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Contact', link: '/contact', icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <FloatingNav navItems={navItems} />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-16 border-t-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black text-white tracking-tighter mb-4 flex items-center gap-2">
              <Package className="w-6 h-6 text-red-500" /> GoToGo Post
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Premium courier and relocation services. Whether it's a small parcel or moving an entire home, GoTogo Post gets it there safely.
            </p>
            <p className="text-sm text-slate-500">
              <strong>CIN:</strong> U53200UP2024PTC200350 <br />
              <strong>Reg No:</strong> 200350 <br />
              <strong>Type:</strong> Private Company limited by shares
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>OFF.NO.955, GAUR CITY MALL, C01, BGH, SEC4 GR.NOIDAWEST,<br/>Gautam Buddha Nagar, Uttar Pradesh,<br/>India, 201318</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href="mailto:JATINDER991425@GMAIL.COM" className="hover:text-white transition">JATINDER991425@GMAIL.COM</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GoTogo Post. All rights reserved. (Indian Non-Government Company)</p>
        </div>
      </footer>
      
      {/* Global Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition duration-300 z-[9999]">
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/refund-policy" element={<Refunds />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
